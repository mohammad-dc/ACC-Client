import React from 'react'
import UserLayout from "../../layouts/user/userLayout";
import {Box, Typography, Grid} from "@material-ui/core";
import ViewDialog from "../../components/Dialogs/admin/news/ViewDialog";
import NewsCard from "../../components/user/newCard";
import Footer from "../../components/Footer/Footer";
import {observer} from "mobx-react-lite";
import { newsContext } from "../../store/store";
import {useStyles} from "../../assets/styles/user/HomeStyles";
import { INew } from '../../interfaces/news';

const MoreNews = observer(() => {
    const classes = useStyles();
    const news = React.useContext(newsContext);

    return (
        <UserLayout>
           <div>

                    <Box className={classes.newsBox}>
                        <Typography variant="h3">الاخبار</Typography>

                        <Grid container spacing={2}  className={classes.newsCardsContainer}>
                            {
                                news.newsClient.map((item: INew) => (
                                    <Grid item xs={12} md={6} lg={4} key={item.id}>
                                        <NewsCard id={item.id} title={item.title} description={item.description} image={`http://localhost:4000/uploads/${item.image?.trim()}`} date_time={item.date_time} />
                                    </Grid>
                                ))
                            }   
                        
                        </Grid>
                    </Box>
                    <div style={{height: '300px'}}></div>
                    <Footer />
                </div>
                {
                    news.isViewDialogOpen? <ViewDialog />: ""
                }
        </UserLayout>
    )
})

export default MoreNews
