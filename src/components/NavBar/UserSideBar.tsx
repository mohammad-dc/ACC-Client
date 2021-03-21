import React, { ChangeEvent } from 'react';
import { AppBar , Toolbar , Grid, Switch, Drawer, List, Typography, CssBaseline, ListItem, ListItemText, ListItemIcon, IconButton } from "@material-ui/core";
import {NavLink} from "react-router-dom";
//Icons
import {FaHome} from "react-icons/fa";
import {ImBooks} from "react-icons/im";
import {ImUserTie} from "react-icons/im";
import {BsFillInfoCircleFill} from "react-icons/bs";
import {FaUserCheck} from "react-icons/fa";
import {FaUserShield} from "react-icons/fa";
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import {theme} from "../../constants/theme";
import Logo from "../../assets/images/accLogo.png";
import clsx from 'clsx';
import { useStyles } from "../../assets/styles/NavBar";

const NavBar: React.FC = ({children}) => {
    const [lightTheme, setLightTheme] = React.useState<boolean>(true);
    const classes = useStyles();
    let sidebar_items: string[] = ['الرئيسية', 'من نحن', 'المواد', 'الطاقم التعليمي', 'الطلاب المتفوقين', 'الطلاب المساعدين'];
    let sidebar_links: string[] = ['home', 'about', 'courses', 'educational_staff', 'outstanding_students', 'students_helper'];
    let icons = [<FaHome className={classes.SideBarIcons} />, <BsFillInfoCircleFill className={classes.SideBarIcons} />, <ImBooks className={classes.SideBarIcons} />, <ImUserTie className={classes.SideBarIcons} />, <FaUserCheck className={classes.SideBarIcons} />, <FaUserShield className={classes.SideBarIcons} />]
    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };
    
    const changeTheme = () => {
        setLightTheme(!lightTheme);
        localStorage.setItem('theme', lightTheme? 'dark' : 'light');
    }

    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, {
              [classes.hide]: open,
            })}
          >
            <MenuIcon />
          </IconButton>
          <img src={Logo} alt="ACC" style={{width: '50px', height: '70px'}}/>
          <Typography variant="h6" noWrap>
           نادي الحوسبة التطبيقية
          </Typography>
        </Toolbar>
      </AppBar>
        <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}>
             <div className={classes.toolbar}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </div>
                
                 <List>
          {sidebar_items.map((text, index) => (
            <NavLink key={text} to={`/${sidebar_links[index]}`} className={classes.NavLink}>
              <ListItem button className={classes.listItems}>
                <ListItemIcon style={{ width: open? 'fit-content':'100%'}}>{icons[index]}</ListItemIcon>
                <ListItemText className={classes.listItemText}><Typography variant="h6">{text}</Typography> </ListItemText>
              </ListItem>
            </NavLink>
          ))}
        </List>
        <Typography component="div">
        <Grid component="label" container alignItems="center" spacing={1}>
          <Grid item style={{display: open? 'inline' : 'none'}}>Off</Grid>
          <Grid item style={{ margin: '0 auto'}}>
            <Switch disableRipple name="theme" onChange={changeTheme} checked={lightTheme}/>
          </Grid>
          <Grid item style={{display: open? 'inline' : 'none'}}>On</Grid>
        </Grid>
      </Typography>
            </Drawer>
            <main className={classes.content}>
        <div className={classes.toolbar} />
                {children}
            </main>
                </div>
    )
}

export default NavBar