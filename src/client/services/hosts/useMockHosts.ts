import { useMemo } from 'react';
import { Gender, Host } from '../../../types';
import {
  hostDescriptions,
  hostNames,
  hostProfileColors,
  hostProfilePictures,
  hostsRefs,
  HOSTS_AMOUNT,
  hostTags
} from '../../constants';
import { CurrentLocationContainer } from '../../containers';
import { rand } from '../../../utils';

const generateMockHosts = (latitude: number, longitude: number) => {
  const hosts = Array(HOSTS_AMOUNT)
    .fill(0)
    .map((_, i) => {
      const index = i % 3;
      const host: Host = {
        name: hostNames[i],
        description: hostDescriptions[i],
        location: {
          latitude: latitude + rand(-0.01, 0.01),
          longitude: longitude + rand(-0.01, 0.01)
        },
        tags: hostTags[index],
        gender: Math.random() > 0.5 ? Gender.M : Gender.F,
        Icon: hostProfilePictures[index],
        profileColor: hostProfileColors[index],
        ref: hostsRefs[i]
      };

      return host;
    });

  return hosts;
};

export const useMockHosts = () => {
  const { currentLocation } = CurrentLocationContainer.useContainer();

  const hosts = useMemo(() => {
    if (!currentLocation) return [];
    return generateMockHosts(
      currentLocation.latitude,
      currentLocation.longitude
    );
  }, [currentLocation]);

  return hosts;
};
