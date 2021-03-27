import React from 'react';
import {Link} from "react-router-dom";
import {Box, Avatar, Typography} from "@material-ui/core";
import {FaFacebook} from "react-icons/fa";
import {IEducationalStaff} from "../../interfaces/educationalStaff";
import {useStyles} from "../../assets/styles/user/educationalStaffCard";

const EducationalStaffCard = (props: IEducationalStaff) => {
    const classes = useStyles();

    return (
        <div>
            <Box className={classes.root}>
                <Avatar style={{width: '150px', height: '150px'}} src={`http://localhost:4000/uploads/${props.image.trim()}`} alt={`${props.first_name} ${props.last_name}`} />
                <Typography variant="h6">{`${props.first_name} ${props.last_name}`}</Typography>
                <Link to={props.first_name}>
                    <FaFacebook className={classes.icon}/>
                </Link>
            </Box>
        </div>
    )
}

export default EducationalStaffCard
