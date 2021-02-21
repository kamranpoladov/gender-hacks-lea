import { useRef, useEffect } from 'react';
import mapboxgl from 'mapbox-gl';
import { defaultMapViewport } from '../../constants';
import './LocationMaskMap.css';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import MapboxDirections from '@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import MapboxDirectionsMock from './mock-mapbox';
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
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      center: [currentLocation.longitude, currentLocation.latitude],
      zoom: defaultMapViewport.zoom
    });

    // You -> Host directions

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
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
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

    // You -> Fake location directions

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const fakeDirections = new MapboxDirectionsMock({
      accessToken: process.env.REACT_APP_MAPBOX_TOKEN,
      controls: {
        inputs: true,
        instructions: false,
        profileSwitcher: true
      }
    });

    fakeDirections
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      .setOrigin([currentLocation.longitude, currentLocation.latitude]);

    map.addControl(fakeDirections);

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
