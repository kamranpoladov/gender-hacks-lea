import { Box } from '@material-ui/core';
import { HostsList } from '../HostsList';
import { Map } from '../Map';

export const MainPage = () => (
  <Box style={{ position: 'relative' }}>
    <Box style={{ position: 'absolute', top: '0' }}>
      <Map />
    </Box>
    <Box style={{ position: 'absolute', top: '400px' }}>
      <HostsList />
    </Box>
  </Box>
);
