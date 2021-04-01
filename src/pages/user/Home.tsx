import React from 'react'
import UserLayout from "../../layouts/user/userLayout";
import {Link} from "react-router-dom";
import Logo from "../../assets/images/accLogo.png";
import ClubMemberCard from "../../components/user/ClubMemberCard";
import {Box, Typography, Grid} from "@material-ui/core";
import ViewDialog from "../../components/Dialogs/admin/news/ViewDialog";
import SliderShow from "../../components/SliderShow";
import NewsCard from "../../components/user/newCard";
import Footer from "../../components/Footer/Footer";
import {IClubMember} from "../../interfaces/clubMember";
import {observer} from "mobx-react-lite";
import { clubMembersContext } from "../../store/store";
import { newsContext } from "../../store/store";
import {useStyles} from "../../assets/styles/user/HomeStyles";
import { INew } from '../../interfaces/news';
import UserTheme from "../../constants/userTheme";

const Home = observer(() => {
    const classes = useStyles();
    const clubMembers = React.useContext(clubMembersContext);
    const news = React.useContext(newsContext);
    let newsList = [
        news.newsClient[news.newsClient.length - 1],
        news.newsClient[news.newsClient.length - 2],
        news.newsClient[news.newsClient.length - 3]
    ];

    if(news.newsClient.length <= 3){
        newsList = news.newsClient;
    } else {
        newsList = [
            news.newsClient[news.newsClient.length - 1],
            news.newsClient[news.newsClient.length - 2],
            news.newsClient[news.newsClient.length - 3]
        ]
    }

    return (
        <UserTheme>
            <UserLayout>
                <div>
                    <Box className={classes.headerBox}>
                        <img src={Logo} alt="ACC" className={classes.logo}/>
                        <Typography variant="h4">نادي الحوسبة التطبيقية يرحب بكم</Typography>
                    </Box>

                    <Box className={classes.newsBox}>
                        <Typography variant="h3">الاخبار</Typography>

                        <Grid container spacing={2}  className={classes.newsCardsContainer}>
                            {
                                newsList.map((item: INew) => (
                                    <Grid item xs={12} md={6} lg={4} key={item.id}>
                                        <NewsCard id={item.id} title={item.title} description={item.description} image={`http://localhost:4000/uploads/${item.image?.trim()}`} date_time={item.date_time} />
                                    </Grid>
                                ))
                            }   
                        
                        </Grid>

                        <Link to="/more_news" >استكشف المزيد من الاخبار؟</Link>
                    </Box>

                    <Box className={classes.ClubMembersBox}>
                        <Typography variant="h3">اعضاء النادي</Typography>
                        <SliderShow>
                            {
                                clubMembers.clubMemberClient.map((item: IClubMember) => (
                                    <div key={item.id}>
                                        <ClubMemberCard id={item.id} first_name={item.first_name} last_name={item.last_name} image={`http://localhost:4000/uploads/${item.image.trim()}`} rank={item.rank}/>
                                    </div>
                                ))
                            }
                        </SliderShow>
                    </Box>
                    <div style={{height: '300px'}}></div>
                    <Footer />
                </div>
                {
                    news.isViewDialogOpen? <ViewDialog />: ""
                }
            </UserLayout>
        </UserTheme>
    )
})

export default Home
