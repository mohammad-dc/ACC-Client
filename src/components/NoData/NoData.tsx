import { Typography, Box } from '@material-ui/core';
import React from 'react'
import NoDataImage from "../../assets/images/no_data.jfif";
import {useStyles} from "../../assets/styles/NoDataStyles";

const NoData = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Box className={classes.Box}>
                <img src={NoDataImage} alt="404" />
                <Typography variant="h4">للاسف, لا يوجد بيانات للان !!! 😓 </Typography>
            </Box>
        </div>
    )
}

export default NoData
