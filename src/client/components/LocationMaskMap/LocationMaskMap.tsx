import { useRef, useEffect } from 'react';
import mapboxgl from 'mapbox-gl';
import { defaultMapViewport } from '../../constants';
import './LocationMaskMap.css';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import MapboxDirections from '@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions';

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_TOKEN!;

function LocationMaskMap() {
  const mapContainerRef = useRef(null);

  // Initialize map when component mounts
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: (mapContainerRef.current as unknown) as HTMLElement,
      style: process.env.REACT_APP_MAPBOX_STYLE,
      center: [defaultMapViewport.longitude, defaultMapViewport.latitude],
      zoom: defaultMapViewport.zoom
    });

    const directions = new MapboxDirections({
      accessToken: process.env.REACT_APP_MAPBOX_TOKEN,
      controls: {
        inputs: true,
        instructions: false,
        profileSwitcher: true
      },
      interactive: false
    });

    map.addControl(directions);

    directions
      .setOrigin([defaultMapViewport.longitude, defaultMapViewport.latitude])
      .setDestination([
        defaultMapViewport.longitude - 0.1,
        defaultMapViewport.latitude - 0.1
      ]);

    (document.querySelector(
      '#root > div > div > div > div > div.mapboxgl-control-container > div.mapboxgl-ctrl-top-right > div'
    ) as HTMLElement).style.opacity = '0';

    directions._map.on('load', () => {
      (document.querySelector(
        '#root > div > div > div > div > div.mapboxgl-control-container > div.mapboxgl-ctrl-top-right > div > div > div > div.mapbox-directions-profile.mapbox-directions-component-keyline.mapbox-directions-clearfix > label:nth-child(6)'
      ) as HTMLElement).click();
    });

    // Clean up on unmount
    return () => map.remove();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div>
      <div className="map-container" ref={mapContainerRef} />
    </div>
  );
}

export default LocationMaskMap;
