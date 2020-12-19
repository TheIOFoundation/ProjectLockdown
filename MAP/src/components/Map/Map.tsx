import React from 'react';
import './map.css';
import mapboxgl from "mapbox-gl";

/**
 * Primary UI component for user interaction
 */
export class Map extends React.Component {

  public componentDidMount() {
    // @fixme This should not be committed to the repository
    mapboxgl.accessToken = 'pk.eyJ1IjoiamZxdWVyYWx0IiwiYSI6ImNrODcwb29vajBjMDkzbWxqZHh6ZDU5aHUifQ.BjT63Mdh-P2myNvygIhSpw';

    new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/jfqueralt/ckavedmnk253z1iphmsy39s3r?optimize=true',
      center: [-74.5, 40], // starting position [lng, lat]
      zoom: 9, // starting zoom
      keyboard: false,
      pitchWithRotate: false,
      hash: true,
    });
  }

  render() {
    return (
        <div
            id="map"
            className="map-container"
        >

        </div>
    );
  }
}
