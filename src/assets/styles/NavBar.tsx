import { createStyles, makeStyles, useTheme, Theme } from '@material-ui/core/styles';
import {themeContext} from "../../store/store";
import * as Color from "../../constants/colors";

const drawerWidth = 240;

export const useStyles = makeStyles((theme: Theme) => 
  createStyles({
    root: {
      display: 'flex'
    },
    palette: {
      background: Color.wightColor
    },
    appBar: {
        background:  "#fff",
        color: '#121212',
      zIndex: theme.zIndex.drawer + 1,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    },
    appBarShift: {
      marginLeft: drawerWidth,
      width: `calc(100% - ${drawerWidth}px)`,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    menuButton: {
      marginRight: 36,
    },
    hide: {
      display: 'none',
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
      whiteSpace: 'nowrap',
    },
    drawerOpen: {
      width: drawerWidth,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    drawerClose: {
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      overflowX: 'hidden',
      width: theme.spacing(7) + 1,
      [theme.breakpoints.up('sm')]: {
        width: theme.spacing(9) + 1,
      },
    },
    toolbar: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      padding: theme.spacing(0, 1),
      // necessary for content to be below app bar
      ...theme.mixins.toolbar,
    },
    content: {
        flexGrow: 1,
    },
    listItems: {
      padding: '10px 0',
      margin: '10px 0'
    },
    listItemText: {
      fontFamily: "'Tajawal', sans-serif", fontSize: '30px'
    },
    SideBarIcons: {
      margin: '0 auto', fontSize: '25px'
    },
    NavLink: {
      textDecoration: 'none',
      color: "#434343",
      transitionDuration: '.3s',
      '&:hover, &.active, &.active $SideBarIcons, &:hover $SideBarIcons': {
        color: '#fff'
      },
      '&:hover $listItems, &.active $listItems': {
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)'
      }
    }
  })
);