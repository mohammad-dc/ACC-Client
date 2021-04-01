import React from 'react'
import {Button, Typography, Avatar} from "@material-ui/core";
import {IStudent} from "../../interfaces/student";
import {useStyles} from "../../assets/styles/user/StudentsCard"; 
import {studentsHelpclubContext} from "../../store/store";

const StudentHelpClubCard = (props: IStudent) => {
    const classes = useStyles();
    const studentsHelpClub = React.useContext(studentsHelpclubContext);
    
    return (
        <div className={classes.root}>
            <Avatar className={classes.image} src={`http://localhost:4000/uploads/${props.image.trim()}`} alt={`${props.first_name} ${props.last_name}`}/>
            <Typography variant="h5">{`${props.first_name} ${props.last_name}`}</Typography>
            <Button className={classes.btn} onClick={()=> studentsHelpClub.openViewDialog(props.id)}>المزيد؟</Button>
        </div>
    )
}

export default StudentHelpClubCard
