import React from 'react'
import UserLayout from "../../layouts/user/userLayout";
import {Box, Typography, Grid} from "@material-ui/core";
import Footer from "../../components/Footer/Footer";
import StudentsCard from "../../components/user/studentsCard";

const StudentsHelpClub = () => {
    return (
        <UserLayout>
            <Box style={{padding: '50px'}}>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6} lg={3}>
                        <StudentsCard ID={1} first_name="محمد" last_name="احمد" description="لا يوجد شيء للان" image="https://topmeaning.com/english/images/img/EN/g/guy.jpg" />
                    </Grid>
                </Grid>
            </Box>
            <Footer />
        </UserLayout>
    )
}

export default StudentsHelpClub
