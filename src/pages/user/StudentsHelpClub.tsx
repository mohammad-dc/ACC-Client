import React from 'react'
import UserLayout from "../../layouts/user/userLayout";
import {Box, Typography, Grid} from "@material-ui/core";
import {IStudent} from "../../interfaces/student";
import ViewDialog from "../../components/Dialogs/admin/studentsHelpClub/ViewDialog";
import NoData from "../../components/NoData/NoData";
import Footer from "../../components/Footer/Footer";
import StudentHelpClubCard from "../../components/user/studentHelpClubCard";
import {observer} from "mobx-react-lite";
import {studentsHelpclubContext} from "../../store/store";
import {useStyles} from "../../assets/styles/admin/pagesStanderdStyle";

const StudentsHelpClub = observer(() => {
    const classes = useStyles();
    const studentsHelpclub = React.useContext(studentsHelpclubContext);

    return (
        <UserLayout>
            <div style={{padding: '10px 20px'}}>
                <Box className={classes.membersBox}>    
                <Typography variant="h3">الطلاب المساعدين للنادي</Typography>            
                    {
                        studentsHelpclub.studentHelpClubClient.length === 0
                        ? <NoData />
                        :  
                        <Box className={classes.membersBox}>
                            {
                                studentsHelpclub.studentHelpClubClient.length === 0
                                ? <NoData />
                                :
                                <Grid container spacing={2}>
                                    {
                                        studentsHelpclub.studentHelpClubClient.map((item: IStudent, index: number) => (
                                            <Grid item xs={12} md={6} lg={3} xl={3} key={index}>
                                                <StudentHelpClubCard first_name={item.first_name} last_name={item.last_name} description={item.description} image={item.image} id={item.id}/>
                                            </Grid>
                                        ))
                                    }
                                </Grid>
                            }
                        </Box>
                    }
                </Box>
            </div>      
            <Footer />
            {
                studentsHelpclub.isViewDialogOpen? <ViewDialog />: ""
            }
        </UserLayout>
    )
})

export default StudentsHelpClub
