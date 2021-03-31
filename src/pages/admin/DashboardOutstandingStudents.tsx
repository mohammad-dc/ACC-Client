import React from 'react'
import AdminLayout from "../../layouts/admin/adminLayout";
import {Box, Typography, Fab, Grid, CircularProgress, Snackbar } from "@material-ui/core";
import Alert from "../../components/Alert";
import {RiUserAddLine} from "react-icons/ri";
import NoData from "../../components/NoData/NoData";
import AddDialog from "../../components/Dialogs/admin/outstandingStudents/AddDialog";
import EditDialog from "../../components/Dialogs/admin/outstandingStudents/EditDialog";
import DeleteDialog from "../../components/Dialogs/admin/outstandingStudents/DeleteDialog";
import {IStudent} from "../../interfaces/student"
import OutstandingStudentsItemCard from "../../components/admin/outstandingStudentsItemCard";
import {outstandingStudentsContext} from "../../store/store";
import {observer} from "mobx-react-lite";
import {useStyles} from "../../assets/styles/admin/pagesStanderdStyle";

const DashboardOutstandingStudents = observer(() => {
    const classes = useStyles();
    const outstandingStudents = React.useContext(outstandingStudentsContext);
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
        outstandingStudents.getAdminOutstandingStudent();
        setSuccess(outstandingStudents.response.success);
        setOpen(true);
    }, [outstandingStudents.response]);

    return (
        <AdminLayout>
            <div className={classes.root}>
                <Box className={classes.BoxFlex}>
                    <Typography variant="h3">طلاب التخصص المتفوقين</Typography>
                        <Fab aria-label="add" className={classes.floatBtn} onClick={() => outstandingStudents.openAddDialog()}>
                            <RiUserAddLine className={classes.floatBtnIcon}/>
                        </Fab>
                </Box>

                {
                    outstandingStudents.isLoading
                    ? <CircularProgress />
                    : 
                    <Box className={classes.membersBox}>
                        {
                            outstandingStudents.outstandingStudents.length === 0
                            ? <NoData />
                            :
                            <Grid container spacing={2}>
                                {
                                    outstandingStudents.outstandingStudents.map((item: IStudent, index: number) => (
                                        <Grid item xs={12} md={6} lg={3} xl={3} key={index}>
                                            <OutstandingStudentsItemCard first_name={item.first_name} description={item.description} image={`http://localhost:4000/uploads/${item.image?.trim()}`} id={item.id} last_name={item.last_name} />
                                        </Grid>
                                    ))
                                }
                            </Grid>
                        }
                    </Box>
                }

                {
                    outstandingStudents.isAddDialogOpen? <AddDialog />: ""
                }
                 {
                    outstandingStudents.isEditDialogOpen? <EditDialog />: ""
                }
                 {
                    outstandingStudents.isDeleteDialogOpen? <DeleteDialog />: ""
                }
                {
                    success
                    ?
                    <Snackbar open={open} autoHideDuration={3000} onClose={handleCloseAlert}>
                        <Alert onClose={handleCloseAlert} severity={outstandingStudents.response.success? 'success' : 'error'}>
                            {outstandingStudents.response.message}
                        </Alert>
                    </Snackbar> : ''
                }

            </div>
        </AdminLayout>
    )
})

export default DashboardOutstandingStudents
