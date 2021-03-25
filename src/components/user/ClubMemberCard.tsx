import React from 'react'
import {Box, Typography, Avatar} from "@material-ui/core";
import { IClubMember } from "../../interfaces/clubMember";
import {useStyles} from "../../assets/styles/user/ClubMemberCardStyles";

const ClubMemberCard: React.FC<IClubMember> = ({id, first_name, last_name, rank, image}: IClubMember) => {
    const classes = useStyles();

    return (
        <Box className={classes.root}>
            <Avatar style={{width: '150px', height: '150px'}} src={image} alt={`${first_name} ${last_name}`}/>
            <Typography variant="h5" component="h2">{`${first_name} ${last_name}`}</Typography>
            <Typography variant="inherit" component="p">الرتبة: {`${rank}`}</Typography>
        </Box>
    )
}

export default ClubMemberCard
