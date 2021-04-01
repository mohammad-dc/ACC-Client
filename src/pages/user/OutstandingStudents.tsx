import React from 'react'
import UserLayout from "../../layouts/user/userLayout";
import {Box, Typography, Grid} from "@material-ui/core";
import ViewDialog from "../../components/Dialogs/admin/outstandingStudents/ViewDialog";
import NoData from "../../components/NoData/NoData";
import Footer from "../../components/Footer/Footer";
import StudentsCard from "../../components/user/studentsCard";
import {IOutstandinStudents} from "../../interfaces/outstandingStudents";
import {observer} from "mobx-react-lite";
import {outstandingStudentsContext} from "../../store/store";
import {useStyles} from "../../assets/styles/admin/pagesStanderdStyle";

const OutstandingStudents = observer(() => {
    const classes = useStyles();
    const outstandingStudents = React.useContext(outstandingStudentsContext);

    return (
        <UserLayout>
            <div style={{padding: '10px 20px'}}>
                <Box className={classes.membersBox}>    
                <Typography variant="h3">الطلاب المتفوقين</Typography>            
                    {
                        outstandingStudents.outstandingStudentsClient.length === 0
                        ? <NoData />
                        :  
                        <Box className={classes.membersBox}>
                            {
                                outstandingStudents.outstandingStudentsClient.length === 0
                                ? <NoData />
                                :
                                <Grid container spacing={2}>
                                    {
                                        outstandingStudents.outstandingStudentsClient.map((item: IOutstandinStudents, index: number) => (
                                            <Grid item xs={12} md={6} lg={3} xl={3} key={index}>
                                                <StudentsCard first_name={item.first_name} last_name={item.last_name} description={item.description} image={item.image} id={item.id}/>
                                            </Grid>
                                        ))
                                    }
                                </Grid>
                            }
                        </Box>
                    }
                </Box>
            </div>    
            {
                outstandingStudents.isViewDialogOpen? <ViewDialog />: ""
            }   
            <Footer />   
        </UserLayout>
    )
})

export default OutstandingStudents
