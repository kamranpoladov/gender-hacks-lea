import * as React from 'react';
import { useState } from 'react';
import MapGL, { GeolocateControl, Marker, ViewportProps } from 'react-map-gl';

import { useMockHosts } from '../../services';
import { viewportFlyTo } from './viewportFlyTo';

const geolocateStyle = {
  top: 0,
  left: 0,
  margin: 10
};

const positionOptions = { enableHighAccuracy: true };

const ICON = `M20.2,15.7L20.2,15.7c1.1-1.6,1.8-3.6,1.8-5.7c0-5.6-4.5-10-10-10S2,4.5,2,10c0,2,0.6,3.9,1.6,5.4c0,0.1,0.1,0.2,0.2,0.3
  c0,0,0.1,0.1,0.1,0.2c0.2,0.3,0.4,0.6,0.7,0.9c2.6,3.1,7.4,7.6,7.4,7.6s4.8-4.5,7.4-7.5c0.2-0.3,0.5-0.6,0.7-0.9
  C20.1,15.8,20.2,15.8,20.2,15.7z`;

const SIZE = 20;

const Map = ({ children }: { children?: React.ReactNode }) => {
  // eslint-disable-next-line @typescript-eslint/ban-types
  const [viewport, setViewport] = useState<ViewportProps>({
    latitude: 37.8,
    longitude: 96,
    zoom: 3,
    bearing: 0,
    pitch: 0
  });

  const hosts = useMockHosts();

  return (
    <MapGL
      {...viewport}
      width="350px"
      height="400px"
      mapStyle="mapbox://styles/rafasofizada/ckldphltm2udo17ql8m94lfaz"
      onViewportChange={setViewport}
      mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
    >
      <GeolocateControl
        style={geolocateStyle}
        positionOptions={positionOptions}
        trackUserLocation
        auto
      />

      {hosts?.map((host, i) => (
        <Marker
          key={`location-market--${i}`}
          latitude={host.location.latitude}
          longitude={host.location.longitude}
        >
          <svg
            height={SIZE}
            viewBox="0 0 24 24"
            style={{
              cursor: 'pointer',
              fill: '#d00',
              stroke: 'none',
              transform: `translate(${-SIZE / 2}px,${-SIZE}px)`
            }}
            onClick={() => {
              viewportFlyTo(viewport, setViewport, host.location);
            }}
          >
            <path d={ICON} />
          </svg>
        </Marker>
      ))}
    </MapGL>
  );
};

export default React.memo(Map);
