import React from 'react'
import AdminLayout from "../../layouts/admin/adminLayout";
import NewsItemCard from "../../components/admin/newsItemCard";
import {Box, Typography, Fab, Grid, CircularProgress } from "@material-ui/core";
import NoData from "../../components/NoData/NoData";
import {CgFileAdd} from "react-icons/cg";
import {INew} from "../../interfaces/news";
import AddDialog from "../../components/Dialogs/admin/news/AddDialog";
import EditDialog from "../../components/Dialogs/admin/news/EditDialog";
import DeleteDialog from "../../components/Dialogs/admin/news/DeleteDialog";
import {newsContext} from "../../store/store";
import {observer} from "mobx-react-lite";
import {useStyles} from "../../assets/styles/admin/pagesStanderdStyle";

const DashboardNews = observer(() => {
    const classes = useStyles();
    const news = React.useContext(newsContext);
    React.useEffect(() => {
        news.getAdminNews();
    }, [])
    return (
        <AdminLayout>
            <div className={classes.root}>
                <Box className={classes.BoxFlex}>
                    <Typography variant="h3">الاخبار</Typography>
                        <Fab aria-label="add" className={classes.floatBtn} onClick={() => news.openAddDialog()}>
                            <CgFileAdd className={classes.floatBtnIcon}/>
                        </Fab>
                </Box>

                 {
                    news.isLoading
                    ? <CircularProgress />
                    : 
                    <Box className={classes.membersBox}>
                        {
                            news.news.length === 0
                            ? <NoData />
                            :
                            <Grid container spacing={2}>
                                {
                                    news.news.map((item: INew, index: number) => (
                                        <Grid item xs={12} md={6} lg={3} xl={3} key={index}>
                                            <NewsItemCard title={item.title} description={item.description} image={`http://localhost:4000/uploads/${item.image?.trim()}`} id={item.id} date_time={item.date_time} />
                                        </Grid>
                                    ))
                                }
                            </Grid>
                        }
                    </Box>
                }

                {
                    news.isAddDialogOpen? <AddDialog />: ""
                }
                 {
                    news.isEditDialogOpen? <EditDialog />: ""
                }
                 {
                    news.isDeleteDialogOpen? <DeleteDialog />: ""
                }
            </div>
        </AdminLayout>
    )
})

export default DashboardNews
