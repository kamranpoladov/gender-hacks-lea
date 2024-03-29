/* eslint-disable no-nested-ternary */
/* eslint-disable @typescript-eslint/no-unnecessary-condition */
import {
  Box,
  createStyles,
  makeStyles,
  SvgIconTypeMap,
  Typography
} from '@material-ui/core';
import { HostTags } from '../../../../types';
import {
  ChildCare,
  Pets,
  Home,
  Wifi,
  CalendarToday
} from '@material-ui/icons/';
import { OverridableComponent } from '@material-ui/core/OverridableComponent';

type HostTagProps = {
  tag: HostTags;
};

type HostTagInner = {
  text: string;
  Icon: OverridableComponent<SvgIconTypeMap<unknown, 'svg'>>;
};

const useStyles = makeStyles(theme =>
  createStyles({
    root: {
      display: 'flex',
      alignItems: 'center',
      flexWrap: 'wrap'
    },
    icon: {
      fontSize: theme.spacing(1.5)
    },
    text: {
      fontSize: theme.spacing(1.5),
      marginLeft: theme.spacing(1)
    }
  })
);

const HostTagInner = ({ text, Icon }: HostTagInner) => {
  const styles = useStyles();
  return (
    <Box className={styles.root}>
      <Icon className={styles.icon} />
      <Typography className={styles.text}>{text}</Typography>
    </Box>
  );
};

export const HostTag = ({ tag }: HostTagProps) => (
  <Box>
    {tag === HostTags.KID_FRIENDLY ? (
      <HostTagInner text={HostTags.KID_FRIENDLY} Icon={ChildCare} />
    ) : tag === HostTags.PET_FRIENDLY ? (
      <HostTagInner text={HostTags.PET_FRIENDLY} Icon={Pets} />
    ) : tag === HostTags.SINGLE_ROOM ? (
      <HostTagInner text={HostTags.SINGLE_ROOM} Icon={Home} />
    ) : tag === HostTags.WIFI ? (
      <HostTagInner text={HostTags.WIFI} Icon={Wifi} />
    ) : tag === HostTags.ONE_WEEK ? (
      <HostTagInner text={HostTags.ONE_WEEK} Icon={CalendarToday} />
    ) : tag === HostTags.TWO_WEEKS ? (
      <HostTagInner text={HostTags.TWO_WEEKS} Icon={CalendarToday} />
    ) : null}
  </Box>
);
