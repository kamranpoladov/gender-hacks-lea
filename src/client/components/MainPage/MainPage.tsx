import { Box } from '@material-ui/core';
import { useGetSelectedHostLocation } from '../../hooks';
import { HostsList } from '../HostsList';

export const MainPage = () => {
  const {
    selectedHostLocation,
    setSelectedHostLocation
  } = useGetSelectedHostLocation();

  return (
    <Box style={{ position: 'relative' }}>
      <Box style={{ position: 'absolute', top: '400px' }}>
        <HostsList setSelectedHostLocation={setSelectedHostLocation} />
      </Box>
    </Box>
  );
};
