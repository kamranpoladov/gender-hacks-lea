import { CurrentLocationContainer } from '../../../containers';
import { LatLngLiteral } from '../../../../types';

const calculateDistance = (
  location1: LatLngLiteral,
  location2: LatLngLiteral
) => {
  const { longitude: lng1, latitude: lat1 } = location1;
  const { longitude: lng2, latitude: lat2 } = location2;
  const R = 6371e3;
  const alpha1 = (lat1 * Math.PI) / 180;
  const alpha2 = (lat2 * Math.PI) / 180;
  const deltaAlpha = ((lat2 - lat1) * Math.PI) / 180;
  const deltaLambda = ((lng2 - lng1) * Math.PI) / 180;

  const a =
    Math.sin(deltaAlpha / 2) * Math.sin(deltaAlpha / 2) +
    Math.cos(alpha1) *
      Math.cos(alpha2) *
      Math.sin(deltaLambda / 2) *
      Math.sin(deltaLambda / 2);

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  return R * c;
};

const metersToWords = (meters: number) => {
  if (meters < 1000) {
    return `${meters} m`;
  } else {
    return `${meters / 1000} km`;
  }
};

export const useCalculateDistance = (hostLocation: LatLngLiteral) => {
  const { currentLocation } = CurrentLocationContainer.useContainer();

  if (!currentLocation) return null;

  const { latitude, longitude } = currentLocation;

  const distance = calculateDistance(hostLocation, { latitude, longitude });

  const distanceInHundreds = Math.ceil(distance / 100) * 100;

  return metersToWords(distanceInHundreds);
};
