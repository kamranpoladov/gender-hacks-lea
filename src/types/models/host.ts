import { RefObject } from 'react';
import { LatLngLiteral } from './location';

export enum HostTags {
  KID_FRIENDLY = 'Uşaqlar',
  SINGLE_ROOM = 'Tək otaq',
  PET_FRIENDLY = 'Ev heyvani',
  ONE_WEEK = '1 həftəyədək',
  TWO_WEEKS = '2 həftəyədək',
  WIFI = 'WiFi'
}

export enum Gender {
  M,
  F
}

export type Host = {
  id: string;
  name: string;
  description: string;
  tags: HostTags[];
  location: LatLngLiteral;
  gender: Gender;
  Icon: () => JSX.Element;
  profileColor: string;
  ref: RefObject<HTMLInputElement>;
};
