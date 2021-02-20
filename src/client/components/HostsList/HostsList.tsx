import {
  Card,
  CardHeader,
  createStyles,
  IconButton,
  makeStyles
} from '@material-ui/core';
import { FilterList } from '@material-ui/icons';
import { HostCard } from './components';
import { MockHostsContainer } from '../../containers';

const useStyles = makeStyles(theme =>
  createStyles({
    root: {
      position: 'absolute',
      top: theme.spacing(400 / 8)
    }
  })
);

export const HostsList = () => {
  const classes = useStyles();
  const { hosts } = MockHostsContainer.useContainer();

  return (
    <Card className={classes.root} elevation={1}>
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
