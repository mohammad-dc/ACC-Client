import React from 'react'
import AdminLayout from "../../layouts/admin/adminLayout";
import NewsItemCard from "../../components/admin/newsItemCard";
import {Box, Typography, Fab, Grid } from "@material-ui/core";
import {CgFileAdd} from "react-icons/cg";
import NoData from "../../components/NoData/NoData";
import AddDialog from "../../components/Dialogs/admin/news/AddDialog";
import EditDialog from "../../components/Dialogs/admin/news/EditDialog";
import DeleteDialog from "../../components/Dialogs/admin/news/DeleteDialog";
import {newsContext} from "../../store/store";
import {observer} from "mobx-react-lite";
import {useStyles} from "../../assets/styles/admin/pagesStanderdStyle";

const DashboardNews = observer(() => {
    const classes = useStyles();
    const news = React.useContext(newsContext);

    return (
        <AdminLayout>
            <div className={classes.root}>
                <Box className={classes.BoxFlex}>
                    <Typography variant="h3">الاخبار</Typography>
                        <Fab aria-label="add" className={classes.floatBtn} onClick={() => news.openAddDialog()}>
                            <CgFileAdd className={classes.floatBtnIcon}/>
                        </Fab>
                </Box>

                <Box className={classes.membersBox}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={6} lg={3} xl={3}>
                                <NewsItemCard title="بداية العام الدراسي" description="احمد" image="https://topmeaning.com/english/images/img/EN/g/guy.jpg" ID={1} />
                        </Grid>
                          <Grid item xs={12} md={6} lg={3} xl={3}>
                                <NewsItemCard title="بداية العام الدراسي" description="احمد" image="https://topmeaning.com/english/images/img/EN/g/guy.jpg" ID={1} />
                        </Grid>
                          <Grid item xs={12} md={6} lg={3} xl={3}>
                                <NewsItemCard title="بداية العام الدراسي" description="احمد" image="https://topmeaning.com/english/images/img/EN/g/guy.jpg" ID={1} />
                        </Grid>
                          <Grid item xs={12} md={6} lg={3} xl={3}>
                                <NewsItemCard title="بداية العام الدراسي" description="احمد" image="https://topmeaning.com/english/images/img/EN/g/guy.jpg" ID={1} />
                        </Grid>
                             
                    </Grid>
                </Box>

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
