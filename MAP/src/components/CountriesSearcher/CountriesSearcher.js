import { useState, useEffect, useCallback } from 'react';
import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';
import '@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css';
import './countriesSearcher.css';
import { toBool } from '../../utils/utils';
import { magnify } from '../../assets/icons/icons.js';
import { mapboxToken } from '../Map/Map';

function CountriesSearcher({ i18n, map, dark, initialState }) {
  dark  = toBool(dark);
  const [showSearchInput, setShowSearchInput] = useState(
    (initialState && initialState.showSearchInput) || false,
  );
  const [geocoder, setGeocoder] = useState({});
  const [results, setResults] = useState('');
  const [geoResult, setGeoResult] = useState({});
  const [parsedText, setParsedText] = useState('');

  const onClick = () => {
    setShowSearchInput(!showSearchInput);
  };

  const onSearch = (e) => {
    const searchInput = e.target.value;
    geocoder.query(searchInput);
    setParsedText(searchInput.toUpperCase());
  };

  const searchHook = useCallback(() => {
    window.addEventListener('keydown', onPressKey);
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
          try {
            map.flyTo(geoResult.center, 500);
          } catch (error) {
            console.log('geoResult.center: ', geoResult.center);
            console.error(error);
          }
        }
      }
    }
    return () => {
      window.removeEventListener('keydown', onPressKey);
    };
  }, [geoResult.center, map, showSearchInput]);
  const geocoderHook = useCallback(() => {
    const mapGeocoder = new MapboxGeocoder({
      accessToken: mapboxToken,
      language: i18n ? i18n.locale : 'en, en-US',
      mapboxgl: window.mapboxgl,
      types: 'country',
    });
    window.geoCoder = mapGeocoder;
    mapGeocoder.on('results', onGetResult);
    mapGeocoder.addTo('#blank');
    mapGeocoder.setLanguage(i18n.locale);
    setGeocoder(mapGeocoder);

    function onGetResult(result) {
      const { features } = result;
      if (features[0]) {
        const countryName = features[0].text.toUpperCase();
        setResults(countryName);
        setGeoResult(features[0]);
      } else {
        setResults('');
        setGeoResult({});
      }
    }
  }, [i18n]);

  useEffect(() => {
    geocoderHook();
    searchHook();
  }, [geocoderHook, searchHook]);

  return (
    <div
      className={`countriesSearcher 
      ${showSearchInput ? 'show' : ''}
      ${dark ? 'dark' : ''}`}
    >
      <span
          className="icon-provider"
          onClick={onClick}>
        {magnify}
      </span>
      <div>
        <input className="placeholder" value={results} disabled />
        <input className="countryInput" onInput={onSearch} value={parsedText} />
      </div>
      <span id="blank" />
    </div>
  );
}

export default CountriesSearcher;
