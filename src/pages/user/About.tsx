import React from 'react'
import {Grid, Typography, Box} from "@material-ui/core";
import Footer from "../../components/Footer/Footer";
import UserLayout from "../../layouts/user/userLayout";
import Logo from "../../assets/images/accLogo.png";
import {useStyles} from "../../assets/styles/user/AboutStyles";

const About = () => {
    const classes = useStyles();

    return (
        <UserLayout>
            <div className={classes.root}>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                        <img src={Logo} alt="نادي الحوسبة التطبيقية" className={classes.image}/>
                    </Grid>
                    <Grid item xs={12} md={6} className={classes.typographyGrid}>
                        <Box>
                            <Typography variant="h4">من نحن؟</Typography>
                            <Typography>
                                نحن مجموعة طلاب من تخصص الحوسبة التطبيقية انشأنا هذا النادي لنلبي احتياجات طلاب التخصص من خلال مساعدتهم في موادهم و عمل رحلات علمية ترفيهية في نفس الوقت فيما يفيد الطلاب في تخصصهم و من خلال هذا الموقع سيصبح من السهل علينا فعل ذلك بكل سهولة و سير.
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>
            </div>
            <Footer />
        </UserLayout>
    )
}

export default About
