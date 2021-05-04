import React from 'react'
import {Grid, Box, Typography} from "@material-ui/core";
import NoData from "../../components/NoData/NoData";
import EducationalStaffCard from "../../components/user/educationalStaffCard";
import UserLayout from "../../layouts/user/userLayout";
import Footer from "../../components/Footer/Footer";
import {IEducationalStaff} from "../../interfaces/educationalStaff";
import {observer} from "mobx-react-lite";
import {educationalStaffContext} from "../../store/store";
import {useStyles} from "../../assets/styles/admin/pagesStanderdStyle";

const EducationalStaff = observer(() => {
    const classes = useStyles();
    const educationalStaff = React.useContext(educationalStaffContext);

    return (
        <UserLayout>
            <div style={{padding: '10px 20px'}}>
                <Box className={classes.membersBox}>    
                <Typography variant="h3">الطاقم التعليمي</Typography>            
                    {
                        educationalStaff.educationalStaff.length === 0
                        ? <NoData />
                        :  
                        <Box className={classes.membersBox}>
                            {
                                educationalStaff.educationalStaff.length === 0
                                ? <NoData />
                                :
                                <Grid container spacing={2}>
                                    {
                                        educationalStaff.educationalStaff.map((item: IEducationalStaff, index: number) => (
                                            <Grid item xs={12} md={6} lg={3} xl={3} key={index}>
                                                <EducationalStaffCard first_name={item.first_name} last_name={item.last_name} facebook={item.facebook} image={item.image} id={item.id}/>
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
        </UserLayout>
    )
})

export default EducationalStaff
