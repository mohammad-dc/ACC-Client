import React from 'react'
import {Box, Typography, Avatar} from "@material-ui/core";
import {useStyles} from "../../assets/styles/user/ClubMemberCardStyles";

const ClubMemberCard = () => {
    const classes = useStyles();

    return (
        <Box className={classes.root}>
            <Avatar style={{width: '150px', height: '150px'}} src="https://ptuk.edu.ps/wp-content/uploads/2018/12/xx.jpg" alt="محمد احمد"/>
            <Typography variant="h5" component="h2">محمد قبالة</Typography>
            <Typography variant="inherit" component="p">الرتبة: {`مشارك`}</Typography>
        </Box>
    )
}

export default ClubMemberCard
