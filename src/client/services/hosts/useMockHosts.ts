import { Gender, Host } from '../../../types';
import {
  hostDescriptions,
  hostLocationOffsets,
  hostNames,
  hostProfileColors,
  hostProfilePictures,
  hostTags
} from '../../constants';
import { CurrentLocationContainer } from '../../containers';

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
  const { currentLocation } = CurrentLocationContainer.useContainer();

  if (!currentLocation) return null;

  const { latitude, longitude } = currentLocation;

  const hosts = generateMockHosts(latitude, longitude);

  return hosts;
};
