import React from 'react';
import Logo from "../assets/images/accLogo.png";
import {Link} from "react-router-dom";
import {Typography, Box} from "@material-ui/core";
import {theme} from "../constants/theme";
import {ThemeProvider } from '@material-ui/core/styles';
import {useStyles} from "../assets/styles/NotFound";

const NotFound = () => {
    const classes = useStyles();

    return (
        <ThemeProvider theme={theme}>
            <div className={classes.root}>
                <Box className={classes.BoxRoot}>
                    <Box className={classes.BoxFlex}>
                        <Box>
                            <img src={Logo} alt="ACC" className={classes.logo}/>
                        </Box>
                        <Box className={classes.BoxText}>
                            <Typography variant='h1'>أوبس!!!</Typography>
                            <Typography variant='h5'>هذه الصفحة غير موجودة, يمكنك الذهاب لل <Link className={classes.goHome} to="/"> الصفحة الرئيسية </Link></Typography>
                        </Box>
                    </Box>
                    <img className={classes.img} src="https://cdn.dribbble.com/users/2407/screenshots/9801395/media/4a2354a5096cedef063233d5c0b45a8c.png" alt="404" />
                </Box>
            </div>
        </ThemeProvider>
    )
}

export default NotFound
