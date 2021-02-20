import { Box } from '@material-ui/core';
import { useEffect } from 'react';
import { useGetSelectedHostLocation } from '../../hooks';
import { HostsList } from '../HostsList';
import { Map } from '../Map';

export const MainPage = () => {
  const {
    selectedHostLocation,
    setSelectedHostLocation
  } = useGetSelectedHostLocation();

  useEffect(() => {
    console.log(selectedHostLocation);
  }, [selectedHostLocation]);

  return (
    <Box style={{ position: 'relative' }}>
      <Box style={{ position: 'fixed', zIndex: 100 }}>
        <Map />
      </Box>
      <Box style={{ position: 'absolute', top: '400px' }}>
        <HostsList setSelectedHostLocation={setSelectedHostLocation} />
      </Box>
    </Box>
  );
};
