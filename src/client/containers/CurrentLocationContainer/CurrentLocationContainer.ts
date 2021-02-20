import { LatLngLiteral } from '@googlemaps/google-maps-services-js';
import { useEffect, useState } from 'react';
import { createContainer } from 'unstated-next';
import { getCurrentGeolocation } from '../../services';

export const CurrentLocationContainer = createContainer(() => {
  const [currentLocation, setCurrentLocation] = useState<LatLngLiteral>();

  useEffect(() => {
    (async () => {
      const location = await getCurrentGeolocation();

      const { latitude: lat, longitude: lng } = location.coords;

      setCurrentLocation({ lat, lng });
    })();
  }, []);

  return { currentLocation, setCurrentLocation };
});
