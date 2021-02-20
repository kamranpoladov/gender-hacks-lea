import { LatLngLiteral } from '../../types';
import { useState } from 'react';

export const useGetSelectedHostLocation = () => {
  const [
    selectedHostLocation,
    setSelectedHostLocation
  ] = useState<LatLngLiteral>();

  return { selectedHostLocation, setSelectedHostLocation };
};
