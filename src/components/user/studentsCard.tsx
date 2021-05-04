import React from 'react'
import {Button, Typography, Avatar} from "@material-ui/core";
import {IStudent} from "../../interfaces/student";
import {useStyles} from "../../assets/styles/user/StudentsCard"; 
import {outstandingStudentsContext, outstandingStudentsDialogsContext} from "../../store/store";

const StudentsCard = (props: IStudent) => {
    const classes = useStyles();
    const outstandingStudents = React.useContext(outstandingStudentsContext);
    const outstandingStudentsDialogs = React.useContext(outstandingStudentsDialogsContext);

    return (
        <div className={classes.root}>
            <Avatar className={classes.image} src={`http://localhost:4000/uploads/${props.image.trim()}`} alt={`${props.first_name} ${props.last_name}`}/>
            <Typography variant="h5">{`${props.first_name} ${props.last_name}`}</Typography>
            <Button className={classes.btn} onClick={()=> {
                outstandingStudents.outstandingStudentSelected = props.id;
                outstandingStudentsDialogs.openViewDialog();
                }}>المزيد؟</Button>
        </div>
    )
}

export default StudentsCard
