import {
  Box,
  CircularProgress,
  createStyles,
  makeStyles
} from '@material-ui/core';
import { CurrentLocationContainer } from '../../containers';
import { HostsList } from '../HostsList';
import { Map } from '../Map';

const useStyles = makeStyles(theme =>
  createStyles({
    root: {
      position: 'relative'
    },
    loader: {
      marginTop: theme.spacing(10)
    }
  })
);
export const MainPage = () => {
  const { currentLocation } = CurrentLocationContainer.useContainer();
  const classes = useStyles();

  return currentLocation ? (
    <Box className={classes.root}>
      <Map />
      <HostsList />
    </Box>
  ) : (
    <CircularProgress className={classes.loader} size={200} />
  );
};
