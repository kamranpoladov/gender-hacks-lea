import { LatLngLiteral } from '@googlemaps/google-maps-services-js';
import { useState } from 'react';
import { createContainer } from 'unstated-next';

export const SelectedHostLocationContainer = createContainer(() => {
  const [
    selectedHostLocation,
    setSelectedHostLocation
  ] = useState<LatLngLiteral>();

  return { selectedHostLocation, setSelectedHostLocation };
});
