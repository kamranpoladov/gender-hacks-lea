import { Card, CardHeader, IconButton } from '@material-ui/core';
import { FilterList } from '@material-ui/icons';
import { HostCard } from './components';
import { useMockHosts } from '../../services';

export const HostsList = () => {
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
        <HostCard key={i} host={host} />
      ))}
    </Card>
  );
};
