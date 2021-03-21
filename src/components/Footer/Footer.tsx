import React from 'react'
import {Grid, Box, Typography, Avatar, List, ListItem, ListItemText} from "@material-ui/core";
import {Link} from "react-router-dom";
import Logo from "../../assets/images/accLogo.png";
import {FaFacebook} from "react-icons/fa";
import {useStyles} from "../../assets/styles/FooterStyles";

const Footer = () => {
    const classes= useStyles();

    return (
        <div className={classes.root}>
            <Box>
                <Typography variant="h4" className={classes.headLine}>
                    للمزيد عن الموقع
                </Typography>
            </Box>
            <Grid container spacing={2} >
                <Grid item xs={12} lg={4} className={classes.flex}>
                    <Avatar src={Logo} alt='نادي الحوسبة التطبيقية' className={classes.Avatar}/>
                    <Typography component="p" className={classes.title}>نادي الحسوبة التطبيقية</Typography>
                    <Link to='https://www.facebook.com/groups/709766402779835/'>
                        <FaFacebook className={classes.icon} />
                    </Link>
                </Grid>
                 <Grid item xs={12} lg={4} className={classes.flex}>
                    <Typography variant="h6">المساعدة</Typography>
                    <List >
                        <ListItem>
                            <Link to="https://ptuk.edu.ps/wp-content/uploads/academic-files/applied-computing-guidance-plan-ar.pdf">
                                <ListItemText primary="الخطة الاسترشادية"/>
                            </Link>
                         </ListItem>
                         <ListItem>
                            <Link to="https://ptuk.edu.ps/wp-content/uploads/academic-files/applied-computing-course-description-ar.pdf">
                                <ListItemText primary="وصف المساقات"/>
                             </Link>
                        </ListItem>
                    </List>
                </Grid>
                 <Grid item xs={12} lg={4} className={classes.flex}>
                    <Avatar src={Logo} alt='نادي الحوسبة التطبيقية' className={classes.Avatar}/>
                    <Typography component="p" className={classes.title}>Ultra Code</Typography>
                    <Link to='https://www.facebook.com/groups/709766402779835/'>
                        <FaFacebook className={classes.icon}/>
                    </Link>
                </Grid>
            </Grid>
            <Box className={classes.allSavedTextBox}>
                <Typography>جميع حقوق الطبع و النشر محفوظة لدى ACC |© {new Date().getFullYear()}</Typography>
            </Box>
        </div>
    )
}

export default Footer
