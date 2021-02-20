import { Card, CardHeader, IconButton } from '@material-ui/core';
import { FilterList } from '@material-ui/icons';
import { HostCard } from './components';
import { MockHostsContainer } from '../../containers';

export const HostsList = () => {
  const { hosts } = MockHostsContainer.useContainer();

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
