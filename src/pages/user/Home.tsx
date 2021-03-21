import React from 'react'
import UserLayout from "../../layouts/user/userLayout";
import {Link} from "react-router-dom";
import Logo from "../../assets/images/accLogo.png";
import ClubMemberCard from "../../components/user/ClubMemberCard";
import {Box, Typography, Grid} from "@material-ui/core";
import SliderShow from "../../components/SliderShow";
import NewsCard from "../../components/user/newCard";
import Footer from "../../components/Footer/Footer";
import {useStyles} from "../../assets/styles/user/HomeStyles";

const Home = () => {
    const classes = useStyles();

    return (
        <UserLayout>
            <div>
                <Box className={classes.headerBox}>
                    <img src={Logo} alt="ACC" className={classes.logo}/>
                    <Typography variant="h4">نادي الحوسبة التطبيقية يرحب بكم</Typography>
                </Box>

                <Box className={classes.newsBox}>
                    <Typography variant="h3">الاخبار</Typography>

                    <Grid container spacing={2}  className={classes.newsCardsContainer}>
                        <Grid item xs={12} md={6} lg={4} > 
                            <NewsCard ID={1} title='بداية العام الدراسي' description="لا يوجد وصف للان" image="https://ptuk.edu.ps/wp-content/uploads/2018/12/xx.jpg" />
                        </Grid>
                        <Grid item xs={12} md={6} lg={4} > 
                            <NewsCard ID={1} title='بداية العام الدراسي' description="لا يوجد وصف للان" image="https://ptuk.edu.ps/wp-content/uploads/2018/12/xx.jpg" />
                        </Grid>
                        <Grid item xs={12} md={6} lg={4} > 
                            <NewsCard ID={1} title='بداية العام الدراسي' description="لا يوجد وصف للان" image="https://ptuk.edu.ps/wp-content/uploads/2018/12/xx.jpg" />
                        </Grid>
                    </Grid>

                    <Link to="/more_news" >استكشف المزيد من الاخبار؟</Link>
                </Box>

                <Box className={classes.ClubMembersBox}>
                    <Typography variant="h3">اعضاء النادي</Typography>
                    <SliderShow>
                        <ClubMemberCard />
                        <ClubMemberCard />
                        <ClubMemberCard />
                        <ClubMemberCard />
                        <ClubMemberCard />
                        <ClubMemberCard />
                        <ClubMemberCard />
                        <ClubMemberCard />
                    </SliderShow>
                </Box>
                <div style={{height: '300px'}}></div>
                <Footer />
            </div>
        </UserLayout>
    )
}

export default Home
