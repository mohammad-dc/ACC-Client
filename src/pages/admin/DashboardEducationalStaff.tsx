import React from 'react'
import AdminLayout from "../../layouts/admin/adminLayout";
import {Box, Typography, Fab, Grid } from "@material-ui/core";
import {RiUserAddLine} from "react-icons/ri";
import NoData from "../../components/NoData/NoData";
import AddDialog from "../../components/Dialogs/admin/EducationalStaff/AddDialog";
import EditDialog from "../../components/Dialogs/admin/EducationalStaff/EditDialog";
import DeleteDialog from "../../components/Dialogs/admin/EducationalStaff/DeleteDialog";
import EducationalStaffItemCard from "../../components/admin/educationalStaffItemCard";
import {educationalStaffContext} from "../../store/store";
import {observer} from "mobx-react-lite";
import {useStyles} from "../../assets/styles/admin/pagesStanderdStyle";

const DashboardEducationalStaff = observer(() => {
    const classes = useStyles();
    const educationalStaff = React.useContext(educationalStaffContext);

    return (
        <AdminLayout>
            <div className={classes.root}>
                <Box className={classes.BoxFlex}>
                    <Typography variant="h3">الطاقم التعليمي</Typography>
                        <Fab aria-label="add" className={classes.floatBtn} onClick={() => educationalStaff.openAddDialog()}>
                            <RiUserAddLine className={classes.floatBtnIcon}/>
                        </Fab>
                </Box>

                <Box className={classes.membersBox}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={6} lg={3} xl={3}>
                                <EducationalStaffItemCard first_name="محمد" last_name="احمد" facebook="https://www.googl.com" image="https://topmeaning.com/english/images/img/EN/g/guy.jpg" ID={1}/>
                        </Grid>
                          <Grid item xs={12} md={6} lg={3} xl={3}>
                                <EducationalStaffItemCard first_name="محمد" last_name="احمد" facebook="https://www.googl.com" image="https://topmeaning.com/english/images/img/EN/g/guy.jpg" ID={1}/>
                        </Grid>
                          <Grid item xs={12} md={6} lg={3} xl={3}>
                                <EducationalStaffItemCard first_name="محمد" last_name="احمد" facebook="https://www.googl.com" image="https://topmeaning.com/english/images/img/EN/g/guy.jpg" ID={1}/>
                        </Grid>
                          <Grid item xs={12} md={6} lg={3} xl={3}>
                                <EducationalStaffItemCard first_name="محمد" last_name="احمد" facebook="https://www.googl.com" image="https://topmeaning.com/english/images/img/EN/g/guy.jpg" ID={1}/>
                        </Grid>
                             
                    </Grid>
                </Box>

                {
                    educationalStaff.isAddDialogOpen? <AddDialog />: ""
                }
                 {
                    educationalStaff.isEditDialogOpen? <EditDialog />: ""
                }
                 {
                    educationalStaff.isDeleteDialogOpen? <DeleteDialog />: ""
                }
            </div>
        </AdminLayout>
    )
})

export default DashboardEducationalStaff
