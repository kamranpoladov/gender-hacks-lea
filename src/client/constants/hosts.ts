import { HostTags } from '../../types';
import {
  Afro,
  Bun,
  Short
} from '../components/HostsList/components/profilePictures';

export const hostNames = [
  'Kamran',
  'Rafael',
  'Aylin',
  'Laman',
  'Jack',
  'John',
  'Elisabeth',
  'Nicola',
  'Elon',
  'Steve'
];
export const hostProfilePictures = [Bun, Short, Afro];
export const hostProfileColors = ['#BED7AA', '#E0BBE1', '#C0CEFF'];

export const hostTags: HostTags[][] = [
  [HostTags.KID_FRIENDLY, HostTags.PET_FRIENDLY],
  [HostTags.WIFI, HostTags.SINGLE_ROOM],
  [HostTags.KID_FRIENDLY, HostTags.WIFI],
  [HostTags.SINGLE_ROOM, HostTags.PET_FRIENDLY],
  [HostTags.KID_FRIENDLY, HostTags.PET_FRIENDLY],
  [HostTags.KID_FRIENDLY, HostTags.PET_FRIENDLY],
  [HostTags.KID_FRIENDLY, HostTags.PET_FRIENDLY],
  [HostTags.KID_FRIENDLY, HostTags.PET_FRIENDLY],
  [HostTags.KID_FRIENDLY, HostTags.PET_FRIENDLY],
  [HostTags.KID_FRIENDLY, HostTags.PET_FRIENDLY]
];

export const hostLocationOffsets: number[] = [
  0.01,
  0.009,
  0.008,
  -0.01,
  0.01,
  -0.007,
  0.01,
  -0.006,
  0.01,
  0.007
];

export const hostDescriptions: string[] = []; // TODO: fill this in for static descriptions
