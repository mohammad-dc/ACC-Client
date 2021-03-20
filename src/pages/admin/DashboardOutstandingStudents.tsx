import React from 'react'
import AdminLayout from "../../layouts/admin/adminLayout";
import {Box, Typography, Fab, Grid } from "@material-ui/core";
import {RiUserAddLine} from "react-icons/ri";
import NoData from "../../components/NoData/NoData";
import AddDialog from "../../components/Dialogs/admin/outstandingStudents/AddDialog";
import EditDialog from "../../components/Dialogs/admin/outstandingStudents/EditDialog";
import DeleteDialog from "../../components/Dialogs/admin/outstandingStudents/DeleteDialog";
import OutstandingStudentsItemCard from "../../components/admin/outstandingStudentsItemCard";
import {outstandingStudentsContext} from "../../store/store";
import {observer} from "mobx-react-lite";
import {useStyles} from "../../assets/styles/admin/pagesStanderdStyle";

const DashboardOutstandingStudents = observer(() => {
    const classes = useStyles();
    const outstandingStudents = React.useContext(outstandingStudentsContext);

    return (
        <AdminLayout>
            <div className={classes.root}>
                <Box className={classes.BoxFlex}>
                    <Typography variant="h3">طلاب التخصص المتفوقين</Typography>
                        <Fab aria-label="add" className={classes.floatBtn} onClick={() => outstandingStudents.openAddDialog()}>
                            <RiUserAddLine className={classes.floatBtnIcon}/>
                        </Fab>
                </Box>

                <Box className={classes.membersBox}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={6} lg={3} xl={3}>
                                <OutstandingStudentsItemCard first_name="محمد" last_name="احمد" description="https://www.googl.com" image="https://topmeaning.com/english/images/img/EN/g/guy.jpg" ID={1}/>
                        </Grid>
                          <Grid item xs={12} md={6} lg={3} xl={3}>
                                <OutstandingStudentsItemCard first_name="محمد" last_name="احمد" description="https://www.googl.com" image="https://topmeaning.com/english/images/img/EN/g/guy.jpg" ID={1}/>
                        </Grid>
                          <Grid item xs={12} md={6} lg={3} xl={3}>
                                <OutstandingStudentsItemCard first_name="محمد" last_name="احمد" description="https://www.googl.com" image="https://topmeaning.com/english/images/img/EN/g/guy.jpg" ID={1}/>
                        </Grid>
                          <Grid item xs={12} md={6} lg={3} xl={3}>
                                <OutstandingStudentsItemCard first_name="محمد" last_name="احمد" description="https://www.googl.com" image="https://topmeaning.com/english/images/img/EN/g/guy.jpg" ID={1}/>
                        </Grid>
                             
                    </Grid>
                </Box>

                {
                    outstandingStudents.isAddDialogOpen? <AddDialog />: ""
                }
                 {
                    outstandingStudents.isEditDialogOpen? <EditDialog />: ""
                }
                 {
                    outstandingStudents.isDeleteDialogOpen? <DeleteDialog />: ""
                }
            </div>
        </AdminLayout>
    )
})

export default DashboardOutstandingStudents
