import { Card, CardHeader, IconButton } from '@material-ui/core';
import { FilterList } from '@material-ui/icons';
import { HostCard } from './components';
import { Dispatch, SetStateAction } from 'react';
import { LatLngLiteral } from '@googlemaps/google-maps-services-js';
import { useMockHosts } from '../../services';

type HostsListProps = {
  setSelectedHostLocation: Dispatch<SetStateAction<LatLngLiteral | undefined>>;
};

export const HostsList = ({ setSelectedHostLocation }: HostsListProps) => {
  const hosts = useMockHosts();

  if (!hosts) return null;

  return (
    <Card elevation={1}>
      <CardHeader
        action={
          <IconButton>
            <FilterList />
          </IconButton>
        }
      />
      {hosts.map((host, i) => (
        <HostCard
          key={i}
          host={host}
          setSelectedHostLocation={setSelectedHostLocation}
        />
      ))}
    </Card>
  );
};
