import { Box } from '@material-ui/core';
import { HostsList } from '../HostsList';

export const MainPage = () => (
  <Box style={{ position: 'relative' }}>
    <Box style={{ position: 'absolute', top: '400px' }}>
      <HostsList />
    </Box>
  </Box>
);
