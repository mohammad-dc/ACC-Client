import React from 'react'
import {Grid} from "@material-ui/core";
import EducationalStaffCard from "../../components/user/educationalStaffCard";
import UserLayout from "../../layouts/user/userLayout";
import Footer from "../../components/Footer/Footer";

const EducationalStaff = () => {
    return (
        <UserLayout>
            <div style={{padding: '10px 20px'}}>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6} lg={3}>
                        <EducationalStaffCard ID={1} first_name="محمد" last_name="احمد" facebook="https://www.facebook.com" image="https://topmeaning.com/english/images/img/EN/g/guy.jpg"/>
                    </Grid>
                </Grid>  
            </div>       
            <Footer />   
        </UserLayout>
    )
}

export default EducationalStaff
