import React from 'react'
import AdminLayout from "../../layouts/admin/adminLayout";
import {Box, Typography, Fab, Grid, CircularProgress, Snackbar } from "@material-ui/core";
import Alert from "../../components/Alert";
import {RiUserAddLine} from "react-icons/ri";
import NoData from "../../components/NoData/NoData";
import AddDialog from "../../components/Dialogs/admin/studentsHelpClub/AddDialog";
import EditDialog from "../../components/Dialogs/admin/studentsHelpClub/EditDialog";
import DeleteDialog from "../../components/Dialogs/admin/studentsHelpClub/DeleteDialog";
import StudentsHelpClubItemCard from "../../components/admin/studentsHelpClubItemCard";
import {IStudent} from "../../interfaces/student"
import {studentsHelpclubContext} from "../../store/store";
import {observer} from "mobx-react-lite";
import {useStyles} from "../../assets/styles/admin/pagesStanderdStyle";

const DashboardStudentsHelpClub = observer(() => {
    const classes = useStyles();
    const studentsHelpClub = React.useContext(studentsHelpclubContext);
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
        studentsHelpClub.getAdminStudentHelpClub();
        setSuccess(studentsHelpClub.response.success);
        setOpen(true);
    }, [studentsHelpClub.response]);


    return (
        <AdminLayout>
            <div className={classes.root}>
                <Box className={classes.BoxFlex}>
                    <Typography variant="h3">طلاب النادي المساعدون</Typography>
                        <Fab aria-label="add" className={classes.floatBtn} onClick={() => studentsHelpClub.openAddDialog()}>
                            <RiUserAddLine className={classes.floatBtnIcon}/>
                        </Fab>
                </Box>

                {
                    studentsHelpClub.isLoading
                    ? <CircularProgress />
                    : 
                    <Box className={classes.membersBox}>
                        {
                            studentsHelpClub.studentHelpClub.length === 0
                            ? <NoData />
                            :
                            <Grid container spacing={2}>
                                {
                                    studentsHelpClub.studentHelpClub.map((item: IStudent, index: number) => (
                                        <Grid item xs={12} md={6} lg={3} xl={3} key={index}>
                                            <StudentsHelpClubItemCard first_name={item.first_name} description={item.description} image={`http://localhost:4000/uploads/${item.image?.trim()}`} id={item.id} last_name={item.last_name} />
                                        </Grid>
                                    ))
                                }
                            </Grid>
                        }
                    </Box>
                }

                {
                    studentsHelpClub.isAddDialogOpen? <AddDialog />: ""
                }
                 {
                    studentsHelpClub.isEditDialogOpen? <EditDialog />: ""
                }
                 {
                    studentsHelpClub.isDeleteDialogOpen? <DeleteDialog />: ""
                }
                {
                    success
                    ?
                    <Snackbar open={open} autoHideDuration={3000} onClose={handleCloseAlert}>
                        <Alert onClose={handleCloseAlert} severity={studentsHelpClub.response.success? 'success' : 'error'}>
                            {studentsHelpClub.response.message}
                        </Alert>
                    </Snackbar> : ''
                }
            </div>
        </AdminLayout>
    )
})

export default DashboardStudentsHelpClub
