import { Dispatch, SetStateAction } from 'react';
import { FlyToInterpolator, ViewportProps } from 'react-map-gl';
import { LatLngLiteral } from '../../../types';
import { easeCubic } from 'd3-ease';

export function viewportFlyTo(
  viewport: ViewportProps,
  setViewport: Dispatch<SetStateAction<ViewportProps>>,
  { longitude, latitude }: LatLngLiteral
) {
  setViewport({
    ...viewport,
    longitude,
    latitude,
    transitionDuration: 1000,
    transitionInterpolator: new FlyToInterpolator(),
    transitionEasing: easeCubic
  });
}
