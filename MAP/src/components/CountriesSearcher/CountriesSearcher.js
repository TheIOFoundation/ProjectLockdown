import { useState, useEffect } from 'react';
import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';
import '@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css';
import './countriesSearcher.css';

import { magnify } from '../../assets/icons/icons.js';
// @fixme uncomment after implementing router
//import { router } from "../router.js";
import { mapboxToken } from '../Map/Map';

function CountriesSearcher({ i18n, map, dark, initialState }) {
  const [showSearchInput, setShowSearchInput] = useState(
    (initialState && initialState.showSearchInput) || false
  );
  const [geocoder, setGeocoder] = useState({});
  const [results, setResults] = useState('');
  const [geoResult, setGeoResult] = useState({});
  const [parsedText, setParsedText] = useState('');
  const [mouseHover, setMouseHover] = useState(false);

  useGeocoderHook(i18n, map, setGeocoder, setResults, setGeoResult);
  useSearch(
    map,
    mouseHover,
    showSearchInput,
    setShowSearchInput,
    geoResult,
    setGeoResult,
    setResults,
    setParsedText
  );

  function onClick() {
    if (!showSearchInput) setShowSearchInput(!showSearchInput);
  }

  function onSearch(e) {
    let searchInput = e.target.value;
    geocoder.query(searchInput);
    setParsedText(searchInput.toUpperCase());
  }

  return (
    <div
      onMouseOver={() => setMouseHover(true)}
      onMouseOut={() => setMouseHover(false)}
      onClick={onClick}
      className={`countriesSearcher 
      ${showSearchInput ? 'show' : ''}
      ${dark ? 'dark' : ''}`}
    >
      <span className="icon-provider"> {magnify} </span>
      <div>
        <input className="placeholder" value={results} disabled />
        <input className="countryInput" onInput={onSearch} value={parsedText} />
      </div>
      <span id="blank"></span>
    </div>
  );
}

function useGeocoderHook(i18n, map, setGeocoder, setResults, setGeoResult) {
  useEffect(() => {
    let geocoder = new MapboxGeocoder({
      accessToken: mapboxToken,
      language: i18n ? i18n.locale : 'en, en-US',
      mapboxgl: window.mapboxgl,
      types: 'country',
    });
    window.geoCoder = geocoder;
    geocoder.on('results', onGetResult);
    geocoder.addTo('#blank');
    geocoder.setLanguage(i18n.locale);
    setGeocoder(geocoder);

    function onGetResult(results) {
      let { features } = results;
      if (features[0]) {
        let countryName = features[0].text.toUpperCase();
        setResults(countryName);
        setGeoResult(features[0]);
      } else {
        setResults('');
        setGeoResult({});
      }
    }
  }, [i18n, map, setGeocoder, setResults, setGeoResult]);
}

function useSearch(
  map,
  mouseHover,
  showSearchInput,
  setShowSearchInput,
  geoResult,
  setGeoResult,
  setResults,
  setParsedText
) {
  useEffect(() => {
    window.addEventListener('keydown', onPressKey);
    document.addEventListener('click', closeComponent);

    return () => {
      window.removeEventListener('keydown', onPressKey);
      document.removeEventListener('click', closeComponent);
    };

    function closeComponent() {
      if (mouseHover || !showSearchInput) {
      } else if (showSearchInput) {
        setShowSearchInput(!showSearchInput);
      }
    }

    function onPressKey(e) {
      if (e.code === 'Enter' && showSearchInput) {
        e.preventDefault();
        onConfirm();
      } else if (e.code === 'Escape' && showSearchInput) {
        e.preventDefault();
        setShowSearchInput(!showSearchInput);
      }

      function onConfirm() {
        if (geoResult.center) {
          setShowSearchInput(!showSearchInput);
          setResults('');
          setGeoResult({});
          setParsedText('');
          setGeoResult()
          try {
            map.flyTo(geoResult.center, 500 );
            // map.flyTo()
          } catch (error) {
            console.log('geoResult.center: ', geoResult.center);
            console.error(error);
          }

          // --------------
          // @fixme: uncomment after implementing router
          // --------------
          // setTimeout(() => {
          //   router.setSearchParam("country", geoResult.place_name);
          //   router.setSearchParam(
          //     "iso2",
          //     geoResult.properties.short_code.toUpperCase()
          //   );
          //   router.setSearchParam("wikidata", geoResult.properties.wikidata);
          // }, 501);
        }
      }
    }
  }, []);
}

export default CountriesSearcher;
