import { Gender, Host } from '../../../types';
import { useGetCurrentLocation } from '..';
import {
  hostDescriptions,
  hostLocationOffsets,
  hostNames,
  hostProfileColors,
  hostProfilePictures,
  hostTags
} from '../../constants';

const generateMockHosts = (latitude: number, longitude: number) => {
  const hosts = Array(5)
    .fill(0)
    .map((_, i) => {
      const index = i % 3;
      const host: Host = {
        name: hostNames[i],
        description: hostDescriptions[i],
        location: {
          latitude: latitude - hostLocationOffsets[i],
          longitude: longitude - hostLocationOffsets[i]
        },
        tags: hostTags[index],
        gender: Math.random() > 0.5 ? Gender.M : Gender.F,
        Icon: hostProfilePictures[index],
        profileColor: hostProfileColors[index]
      };

      return host;
    });

  return hosts;
};

export const useMockHosts = () => {
  const { data: geolocation } = useGetCurrentLocation();

  if (!geolocation) return null;

  const {
    coords: { latitude, longitude }
  } = geolocation;

  const hosts = generateMockHosts(latitude, longitude);

  return hosts;
};
