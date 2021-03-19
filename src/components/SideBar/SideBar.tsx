import React from 'react';
import { Drawer, List, Typography, CssBaseline, ListItem, ListItemText, ListItemIcon, IconButton } from "@material-ui/core";
import {NavLink} from "react-router-dom";
//Icons
import {FaUserCircle} from "react-icons/fa";
import {ImBooks} from "react-icons/im";
import {ImUserTie} from "react-icons/im";
import {BiNews} from "react-icons/bi";
import {FaUserCheck} from "react-icons/fa";
import {FaUserShield} from "react-icons/fa";
import {FaArrowRight} from "react-icons/fa";
import {FaBars} from "react-icons/fa";

import clsx from 'clsx';
import { useStyles } from "../../assets/styles/sideBarStyles";

const SideBar: React.FC = ({children}) => {
    const classes = useStyles();
    let sidebar_items: string[] = ['اعضاء النادي', 'المواد', 'الطاقم التعليمي', 'الاخبار', 'الطلاب المتفوقين', 'قائمة الشرف للنادي'];
    let sidebar_links: string[] = ['members', 'courses', 'educational_staff', 'news', 'outstanding_students', 'students_helper'];
    let icons = [<FaUserCircle className={classes.SideBarIcons} />, <ImBooks className={classes.SideBarIcons} />, <ImUserTie className={classes.SideBarIcons} />, <BiNews className={classes.SideBarIcons} />, <FaUserCheck className={classes.SideBarIcons} />, <FaUserShield className={classes.SideBarIcons} />]
    const [open, setOpen] = React.useState(false);
    
    return (
        <div>
            <CssBaseline />
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
              <IconButton onClick={() => setOpen(!open)}>{open? <FaArrowRight /> : <FaBars />}</IconButton>
                </div>
                
                 <List>
          {sidebar_items.map((text, index) => (
            <NavLink key={text} to={`/admin/dashboard/${sidebar_links[index]}`} className={classes.NavLink}>
              <ListItem button className={classes.listItems}>
                <ListItemIcon style={{ width: open? 'fit-content':'100%'}}>{icons[index]}</ListItemIcon>
                <ListItemText className={classes.listItemText}><Typography variant="h6">{text}</Typography> </ListItemText>
              </ListItem>
            </NavLink>
          ))}
        </List>
            </Drawer>
            <div style={{position: 'relative', marginRight: '4%'}}>
                {children}
            </div>
                </div>
    )
}

export default SideBar
