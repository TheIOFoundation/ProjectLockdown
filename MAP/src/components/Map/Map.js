/* eslint-disable no-restricted-globals */
import React from 'react';
import mapboxgl from 'mapbox-gl';
import './map.css';
import {
  filterLookupTable,
  selectedWorldview,
  domainCoors,
  domainCoorsMobile,
  pause,
  worldStyle,
} from './util';
import format from 'date-fns/format';
import addDays from 'date-fns/addDays';
import {getSnapShotData } from '../../services/map';
import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';
import '@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css';
import CountriesSearcher from '../CountriesSearcher/CountriesSearcher';
import AppContext from '../../contexts/AppContext';
import Zoom from '../../components/Zoom/Zoom';
//import LocalStorage Functions
import * as router from '../../router';
import _ from 'lodash';

/**
 * Primary UI component for user interaction
 */

// @fixme This should not be committed to the repository
export const mapboxToken =
  'pk.eyJ1IjoiamZxdWVyYWx0IiwiYSI6ImNrODcwb29vajBjMDkzbWxqZHh6ZDU5aHUifQ.BjT63Mdh-P2myNvygIhSpw';

let deviceCoords =  { lng: 40.7, lat: 25, zoom: 1.06 };

export class Map extends React.Component {
  static contextType = AppContext;

  constructor(props) {
    super(props);
    this.initMap = this.initMap.bind(this);
    this.updateMap = this.updateMap.bind(this);
    this.onMapClick = this.onMapClick.bind(this);
    this.onGetResult = this.onGetResult.bind(this);


    // If it is a mobile device get the cooridnates for mobile (domainCoorsMobile), else get the desktop coordinates (domainCoors)
    if (screen.width <= 699) deviceCoords = domainCoorsMobile;
    else deviceCoords = domainCoors;

    let url = window.location.href;
    let isLocationSet = false;
    for (let country in deviceCoords) {
      if (url.indexOf('lockdown.' + country) !== -1) {
        isLocationSet = true;
      }
    }
    this.state = {
      lng: this.props.mapCord.lng,
      lat: this.props.mapCord.lat,
      zoom: this.props.mapCord.zoom,
      countries: [],
      mapData: {},
      lookupTable: {},
      isMapReady: false,
      isLocationSet: isLocationSet,
      geocoder: {},
      lastCountry: {},
      mapStyle : [],
    };
    this.mapContainer = React.createRef();
  }

  componentWillReceiveProps(nextProps) {
    if(this.props.mapCord !== nextProps.mapCord){
      this.setState((prevSate) => ({
        ...prevSate,
        lng: nextProps.mapCord.lng,
        lat : nextProps.mapCord.lat,
        zoom: nextProps.mapCord.zoom
      }));
    }
}

  setMapState(map,lookupData, localData = []) {
    const localDataByIso = {};
    localData.forEach((l) => (localDataByIso[l.iso] = l));
    Object.keys(lookupData).forEach((key) => {
      var lookup = lookupData[key];
      var countryInfo = localDataByIso[key];
      map.setFeatureState(
        {
          source: 'admin-0',
          sourceLayer: 'boundaries_admin_0',
          id: lookup.feature_id,
        },
        {
          kind: countryInfo?.value,
          name: key,
        },
      );
    });
  }

 
  async initMap(mapData, lookupTable) {
    const {lng, lat, zoom} = this.state;
    if (!mapboxgl) {
       pause();
      this.initMap(mapData, lookupTable);
    }
    const mapBoxglState = mapboxgl.getRTLTextPluginStatus();
    if (mapBoxglState === 'unavailable' || mapBoxglState === 'error') {
      mapboxgl.setRTLTextPlugin(
        'https://api.mapbox.com/mapbox-gl-js/plugins/mapbox-gl-rtl-text/v0.2.3/mapbox-gl-rtl-text.js',
        null,
        true, // Lazy load the plugin
      );
    }


    let map = new mapboxgl.Map({
      accessToken: mapboxToken,
      container: this.mapContainer.current,
      style:
        'mapbox://styles/jfqueralt/ckavedmnk253z1iphmsy39s3r?optimize=true',
      center: [lng,lat],
      zoom: zoom,
      keyboard: false,
      pitchWithRotate: false,
    });
  
    let geocoder = new MapboxGeocoder({
      accessToken: mapboxToken,
      language: this.props.currentLanguage
        ? this.props.currentLanguage.locale
        : 'en',
      mapboxgl: mapboxgl,
      types: 'country',
    });
    geocoder.on('results', this.onGetResult);
    geocoder.addTo('#mapBlank');
    window.map = map;
    const localData = mapData[this.props.selectedDate];
    map.on('style.load', () => {
      let hoveredStateId = null;
      let iso = this.props.currentLanguage
        ? this.props.currentLanguage.locale
        : 'en';
      if (iso) {
        if (iso.includes('zh-')) {
          if (iso.includes('-CN')) {
            iso = 'zh-Hans';
          } else {
            iso = 'zh-Hant';
          }
        } else {
          iso = iso.split('-')[0];
        }
      }
      map.setLayoutProperty('water-line-label', 'text-field', [
        'get',
        'name_' + iso,
      ]);
      map.setLayoutProperty('country-label', 'text-field', [
        'get',
        'name_' + iso,
      ]);
      map.setLayoutProperty('water-point-label', 'text-field', [
        'get',
        'name_' + iso,
      ]);
      map.on('mousemove', 'admin-0-fill', function (e) {
        var features = map.queryRenderedFeatures(e.point, {
          layers: ['admin-0-fill'],
        });

        if (e.features.length > 0) {
          if (hoveredStateId) {
            map.setFeatureState(
              {
                source: 'admin-0',
                sourceLayer: 'boundaries_admin_0',
                id: hoveredStateId,
              },
              {
                hover: false,
              },
            );
          }

          hoveredStateId = features[0].id;

          map.setFeatureState(
            {
              source: 'admin-0',
              sourceLayer: 'boundaries_admin_0',
              id: hoveredStateId,
            },
            {
              hover: true,
            },
          );
        }
      });
      map.on('click', 'admin-0-fill', this.onMapClick);

    });

    map.on('load', () => {
      const waiting = () => {
        if (!map.isStyleLoaded()) {
          setTimeout(waiting, 200);
        } else {
          createViz(lookupTable);
        }
      };
      waiting();
    });
    this.props.setIsLoading(false);

    const createViz =  async (lookupTableData) => {    
      map.addSource('admin-0', {
        type: 'vector',
        url: 'mapbox://mapbox.boundaries-adm0-v3',
      });
      const lookupData = filterLookupTable(lookupTableData);

      // Filters the lookup table to features with the 'US' country code
      // and keys the table using the `unit_code` property that will be used for the join

       map.addLayer(
        {
          id: 'admin-0-fill',
          type: 'fill',
          source: 'admin-0',
          'source-layer': 'boundaries_admin_0',
          // Show only features for the selected worldview, hide disputed polygons
          filter: [
            'all',
            [
              'any',
              ['==', 'all', ['get', 'worldview']],
              ['in', selectedWorldview, ['get', 'worldview']],
            ],
            ['!', ['has', 'dispute']],
          ],

          paint: {
            'fill-color': [
              'case',
              ['!=', ['feature-state', 'kind'], null],
              [
                'match',
                ['feature-state', 'kind'],
                '1',
                worldStyle('1'),
                '2',
                worldStyle('2'),
                '3',
                worldStyle('3'),
                '4',
                worldStyle('4'),
                worldStyle('0'),
              ],
              // No data
              ['==', ['feature-state', 'kind'], null],
              worldStyle('0'),
              [
                'case',
                ['boolean', ['feature-state', 'hover'], false],
                'rgba(204,204,204,0.5)',
                'rgba(204,204,204,0)',
              ],
            ],
            // Hover style
            'fill-opacity': [
              'case',
              ['boolean', ['feature-state', 'hover'], false],
              0.7,
              1,
            ],
          },
        },
        'admin-1-boundary-bg',
      );

      //
      // Map style adjustments
      //

      // Improve contrast of country country labels
      map.setPaintProperty('country-label', 'text-color', 'hsl(0, 0%, 10%)');
      map.setPaintProperty(
        'country-label',
        'text-halo-color',
        'hsla(0, 0%, 100%,0.6)',
      );
      map.setPaintProperty('country-label', 'text-halo-width', 1);

      // Improve contrast of country state labels
      map.setPaintProperty('state-label', 'text-color', 'hsl(0, 0%, 30%)');
      map.setPaintProperty('state-label', 'text-halo-width', 0);

      // Improve contrast of country lines
      map.setPaintProperty(
        'admin-0-boundary',
        'line-color',
        'hsla(0, 0%, 90%, 0.8)',
      );
      map.setPaintProperty(
        'admin-0-boundary-disputed',
        'line-color',
        'hsla(0, 0%, 90%, 0.5)',
      );
      map.setPaintProperty(
        'admin-0-boundary-bg',
        'line-color',
        'hsla(0, 0%, 84%, 0.3)',
      );

      // Improve contrast of state lines
      map.setPaintProperty(
        'admin-1-boundary',
        'line-color',
        'hsla(0, 0%, 90%, 0.6)',
      );

      // Improve contrast of city labels
      map.setPaintProperty('settlement-major-label', 'text-halo-width', 0);
      map.setPaintProperty('settlement-minor-label', 'text-halo-width', 0);

      // Change water color
      map.setPaintProperty('water', 'fill-color', '#e0e0e0');

      const setStates = (e) => {
        if(!_.isEmpty(localData)){
          localData.forEach(function (row) {
            map.setFeatureState(
              {
                source: 'admin-0',
                sourceLayer: 'boundaries_admin_0',
                id: lookupData[row.iso].feature_id,
              },
              {
                kind: row.value,
                name: row.iso,
              },
            );
          });
          this.setState({
            isMapReady: true,
          });
        }        
      };

      // Check if `statesData` source is loaded.
      function setAfterLoad(e) {
        if (e.sourceId === 'admin-0' && e.isSourceLoaded) {
          setStates();
          map.off('sourcedata', setAfterLoad);
        }
      }

      // If `statesData` source is loaded, call `setStates()`.
      if (map.isSourceLoaded('admin-0')) {
        setStates();
      } else {
        map.on('sourcedata', setAfterLoad);
      }
    };

    this.setState({
      map,
      geocoder,
    });

    return map;
  }

  async updateMap(mapData, lookupTable, selectedDate) {
    const { daysRange } = this.props;
    const lookupData = filterLookupTable(lookupTable);
    let localData = mapData[selectedDate];
    if (localData === undefined) {
      let { startDate, endDate } = this.props;
      startDate = startDate
        ? format(startDate, 'yyyy-MM-dd')
        : format(addDays(new Date(), -14), 'yyyy-MM-dd');
      endDate = endDate
        ? format(endDate, 'yyyy-MM-dd')
        : format(addDays(new Date(), daysRange - 14), 'yyyy-MM-dd');

      let newMapData = await getSnapShotData(startDate, endDate);
      if (newMapData) {
        localData = newMapData[selectedDate];
        mapData = newMapData.snapshot;
        this.setState({ mapData }, () =>
          this.setMapState(this.state.map,lookupData, localData),
        );
      }
    } else {
      this.setMapState(this.state.map,lookupData, localData);
    }
  }

  updateMapLanguage(language) {
    let iso = language.locale;
    this.state.geocoder.setLanguage(iso);
    if (iso.includes('zh-')) {
      if (iso.includes('-CN')) {
        iso = 'zh-Hans';
      } else {
        iso = 'zh-Hant';
      }
    }
    this.state.map.setLayoutProperty('water-line-label', 'text-field', [
      'get',
      'name_' + iso,
    ]);
    this.state.map.setLayoutProperty('water-point-label', 'text-field', [
      'get',
      'name_' + iso,
    ]);
  }

  onGetResult(results) {
    let { features } = results;

    if (features[0]) {
      let countryName = features[0].text;
      let wikidata = features[0].properties.wikidata;

      router.setLocalStorage({
        iso2: this.state.lastCountry.iso2,
        country: countryName,
        wikidata: wikidata,
      });
    } else {
      router.setLocalStorage({
        iso2: this.state.lastCountry.iso2,
        country: this.state.lastCountry.name,
      });
    }
  }

  onMapClick(e) {
    let { map, lookupTable } = this.state;
    const features = map.queryRenderedFeatures(e.point, {
      layers: ['admin-0-fill'],
    });
    
    let name = lookupTable.adm0.data.all[features[0].properties.iso_3166_1]?.name|| undefined;
    // if the country doesn't exist on this  worldview type  check it from other  type
    if(!name){
      const wordViewList = ["CN", "IN", "JP", "US"]
      for(const view of wordViewList){
        name =lookupTable.adm0.data[view][features[0].properties.iso_3166_1]?.name || undefined; 
        if(name) break;
      }
    }
    const iso = features[0].properties.iso_3166_1;
    this.state.geocoder.query(
      name,
    );
    this.setState(() =>({
      lastCountry: {
        country: name,
        iso2: iso,
      },
    }));
    this.props.onOpen(this.state.lastCountry)
  }

  /**
   * this method will return the color code based on the title 
   * if that tilte is not found in out list it will  return the default color
   * @param {string} title 
   */
  setWorldStyle = (title) => {
    const {mapStyle} = this.state;
    const result =mapStyle.filter(style => style.title === title);
    if(result && result.length ===1){
      return result[0].style;
    }else{
      return "#ccc";
    }
  }
  
  
   initializeMapBox =  async () => {
    let { startDate, endDate, daysRange } = this.props;
    startDate = startDate
      ? format(startDate, 'yyyy-MM-dd')
      : format(addDays(new Date(), -14), 'yyyy-MM-dd');
    endDate = endDate
      ? format(endDate, 'yyyy-MM-dd')
      : format(addDays(new Date(), daysRange - 14), 'yyyy-MM-dd');
    // the world map needs a large data source, lazily fetch them in parallel
    const [mapData, lookupTable] = await Promise.all([
      getSnapShotData(startDate, endDate),
      fetch('./data/boundaries-adm0-v3.json').then((r) => r.json()),
    ]);

    // we need to prepare a static country list not dynamically calculate them
    const countries = Object.values[lookupTable];

    this.setState(
      {
        countries,
        mapData,
        lookupTable,
      },
      () => {
        console.log('STATE', this.state);
      },
    );
      setTimeout(()=> {
        if (mapData && lookupTable) this.initMap(mapData.snapshot, lookupTable);
      },2000)
    };

    async componentDidMount() {
        this.initializeMapBox();
    }

  async componentDidUpdate(previousProps, previousState, snapshot) {
    if (previousProps.selectedDate !== this.props.selectedDate) {
      if (this.state.isMapReady) {
        this.updateMap(
          this.state.mapData,
          this.state.lookupTable,
          this.props.selectedDate,
        );
        if (previousProps.currentLanguage !== this.props.currentLanguage) {
          this.updateMapLanguage(this.props.currentLanguage);
        }
      }
    }
  }

  render() {
   const {isCountrySearchVisible} = this.props;
   
    
    return (
      <>
        <div
          ref = {this.mapContainer}
          id="map"
          className="map-container"
        ></div>
         { isCountrySearchVisible &&  <CountriesSearcher
          dark={this.props.dark}
          i18n={{ locale: 'en, en-US' }}
          map={{
            flyTo: (center, maxDuration) => {
              this.state.map.flyTo({
                center: center,
                essential: true, // this animation is considered essential with respect to prefers-reduced-motion
              });
            },
          }}
        /> }
        <span id="mapBlank" style={{ display: 'none' }}></span>
      </>
    );
  }
}
