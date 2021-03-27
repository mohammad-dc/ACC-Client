import React from 'react'
import AdminLayout from "../../layouts/admin/adminLayout";
import {Box, Typography, Fab, Grid, CircularProgress, Snackbar} from "@material-ui/core";
import Alert from "../../components/Alert";
import {RiUserAddLine} from "react-icons/ri";
import NoData from "../../components/NoData/NoData";
import {IEducationalStaff} from "../../interfaces/educationalStaff";
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
    const [open, setOpen] = React.useState(false);
    const [success, setSuccess] = React.useState(false);

    const handleCloseAlert = (event?: React.SyntheticEvent, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }
  
        setOpen(false);
        setSuccess(false);
    };

    React.useEffect(() => {
        educationalStaff.getAdminEducationalStaff();
        setSuccess(educationalStaff.response.success);
        setOpen(true);
    }, [educationalStaff.response]);

    return (
        <AdminLayout>
            <div className={classes.root}>
                <Box className={classes.BoxFlex}>
                    <Typography variant="h3">الطاقم التعليمي</Typography>
                        <Fab aria-label="add" className={classes.floatBtn} onClick={() => educationalStaff.openAddDialog()}>
                            <RiUserAddLine className={classes.floatBtnIcon}/>
                        </Fab>
                </Box>
                {
                    educationalStaff.isLoading
                    ? <CircularProgress />
                    : 
                    <Box className={classes.membersBox}>
                        {
                            educationalStaff.educationalStaff.length === 0
                            ? <NoData />
                            :
                            <Grid container spacing={2}>
                                {
                                    educationalStaff.educationalStaff.map((item: IEducationalStaff, index: number) => (
                                        <Grid item xs={12} md={6} lg={3} xl={3} key={index}>
                                            <EducationalStaffItemCard first_name={item.first_name} last_name={item.last_name} facebook={item.facebook} image={item.image} id={item.id}/>
                                        </Grid>
                                    ))
                                }
                            </Grid>
                        }
                    </Box>
                }

                {
                    educationalStaff.isAddDialogOpen? <AddDialog />: ""
                }
                 {
                    educationalStaff.isEditDialogOpen? <EditDialog />: ""
                }
                 {
                    educationalStaff.isDeleteDialogOpen? <DeleteDialog />: ""
                }

                 {
                    success
                    ?
                    <Snackbar open={open} autoHideDuration={3000} onClose={handleCloseAlert}>
                        <Alert onClose={handleCloseAlert} severity={educationalStaff.response.success? 'success' : 'error'}>
                            {educationalStaff.response.message}
                        </Alert>
                    </Snackbar> : ''
                }
            </div>
        </AdminLayout>
    )
})

export default DashboardEducationalStaff
