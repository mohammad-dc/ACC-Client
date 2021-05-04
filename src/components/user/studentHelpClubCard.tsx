import React from 'react'
import {Button, Typography, Avatar} from "@material-ui/core";
import {IStudent} from "../../interfaces/student";
import {useStyles} from "../../assets/styles/user/StudentsCard"; 
import {studentsHelpclubContext, studentsHelpclubDialogsContext} from "../../store/store";

const StudentHelpClubCard = (props: IStudent) => {
    const classes = useStyles();
    const studentsHelpClub = React.useContext(studentsHelpclubContext);
    const studentsHelpClubDialogs = React.useContext(studentsHelpclubDialogsContext);
    
    return (
        <div className={classes.root}>
            <Avatar className={classes.image} src={`http://localhost:4000/uploads/${props.image.trim()}`} alt={`${props.first_name} ${props.last_name}`}/>
            <Typography variant="h5">{`${props.first_name} ${props.last_name}`}</Typography>
            <Button className={classes.btn} onClick={()=> {
                studentsHelpClub.studentHelpClubSelected = props.id;
                studentsHelpClubDialogs.openViewDialog();
                }}>المزيد؟</Button>
        </div>
    )
}

export default StudentHelpClubCard
