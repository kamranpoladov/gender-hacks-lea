import { useEffect, useState } from 'react';
import { createContainer } from 'unstated-next';
import { LatLngLiteral } from '../../../types';
import { getCurrentGeolocation } from '../../services';

export const CurrentLocationContainer = createContainer(() => {
  const [currentLocation, setCurrentLocation] = useState<LatLngLiteral>();

  useEffect(() => {
    (async () => {
      try {
        const location = await getCurrentGeolocation();

        const { latitude, longitude } = location.coords;
        setCurrentLocation({ latitude, longitude });
      } catch (err) {
        setCurrentLocation({ latitude: 50, longitude: 7 });
      }
    })();
  }, []);

  return { currentLocation, setCurrentLocation };
});
