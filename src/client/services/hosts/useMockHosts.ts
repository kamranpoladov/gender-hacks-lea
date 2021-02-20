import { LoremIpsum } from 'lorem-ipsum';
import { Gender, Host } from '../../../types';
import { useGetCurrentLocation } from '..';
import {
  hostLocationOffsets,
  hostNames,
  hostProfileColors,
  hostProfilePictures,
  hostTags
} from '../../constants';

const generateMockHosts = (latitude: number, longitude: number) => {
  const lorem = new LoremIpsum({
    sentencesPerParagraph: {
      min: 2,
      max: 4
    },
    wordsPerSentence: {
      min: 4,
      max: 10
    }
  });

  const hosts = Array(10)
    .fill(0)
    .map((_, i) => {
      const index = i % 3;
      const host: Host = {
        name: hostNames[i],
        description: lorem.generateParagraphs(1),
        location: {
          lat: latitude - hostLocationOffsets[i],
          lng: longitude - hostLocationOffsets[i]
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
  const { data: location } = useGetCurrentLocation();

  if (!location) return null;

  const {
    coords: { latitude, longitude }
  } = location;

  const hosts = generateMockHosts(latitude, longitude);

  return hosts;
};
