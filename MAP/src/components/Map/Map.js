import React from 'react';
import './map.css';
import mapboxgl from 'mapbox-gl';

/**
 * Primary UI component for user interaction
 */

// @fixme This should not be committed to the repository
export const mapboxToken =
  'pk.eyJ1IjoiamZxdWVyYWx0IiwiYSI6ImNrODcwb29vajBjMDkzbWxqZHh6ZDU5aHUifQ.BjT63Mdh-P2myNvygIhSpw';

export class Map extends React.Component {
  componentDidMount() {
    mapboxgl.accessToken = mapboxToken;

    const map = new mapboxgl.Map({
      container: 'map',
      style:
        'mapbox://styles/jfqueralt/ckavedmnk253z1iphmsy39s3r?optimize=true',
      center: [-74.5, 40], // starting position [lng, lat]
      zoom: 9, // starting zoom
      keyboard: false,
      pitchWithRotate: false,
      hash: true,
    });

    map.on('load', () => this.props.setIsLoading(false));
  }

  render() {
    return <div id="map" className="map-container"></div>;
  }
}
