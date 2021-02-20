import { useState } from 'react';
import { createContainer } from 'unstated-next';
import { LatLngLiteral } from '../../../types';

export const SelectedHostLocationContainer = createContainer(() => {
  const [
    selectedHostLocation,
    setSelectedHostLocation
  ] = useState<LatLngLiteral>();

  return { selectedHostLocation, setSelectedHostLocation };
});
