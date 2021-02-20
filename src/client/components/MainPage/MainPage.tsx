import { Box } from '@material-ui/core';
import { HostsList } from '../HostsList';
import { Map } from '../Map';

export const MainPage = () => (
  <Box style={{ position: 'relative' }}>
    <Map />
    <HostsList />
  </Box>
);
