import { useRef, useEffect } from 'react';
import mapboxgl from 'mapbox-gl';
import { defaultMapViewport } from '../../constants';
import './LocationMaskMap.css';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import MapboxDirections from '@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions';
import { LatLngLiteral } from '../../../types';
import { CurrentLocationContainer } from '../../containers';

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_TOKEN!;

type LocationMaskMapProps = {
  destination: LatLngLiteral;
};

function LocationMaskMap({ destination }: LocationMaskMapProps) {
  const mapContainerRef = useRef(null);
  const { currentLocation } = CurrentLocationContainer.useContainer();

  // Initialize map when component mounts
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: (mapContainerRef.current as unknown) as HTMLElement,
      style: process.env.REACT_APP_MAPBOX_STYLE,
      center: [currentLocation.longitude, currentLocation.latitude],
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
      .setOrigin([currentLocation.longitude, currentLocation.latitude])
      .setDestination([destination.longitude, destination.latitude]);

    (document.querySelector(
      '.mapboxgl-ctrl-directions.mapboxgl-ctrl'
    ) as HTMLElement).style.opacity = '0';

    directions._map.on('load', () => {
      (document.querySelector(
        'label[for=mapbox-directions-profile-walking]'
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
