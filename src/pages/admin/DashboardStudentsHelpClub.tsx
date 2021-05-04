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
import {studentsHelpclubContext, outstandingStudentsDialogsContext} from "../../store/store";
import {observer} from "mobx-react-lite";
import {useStyles} from "../../assets/styles/admin/pagesStanderdStyle";

const DashboardStudentsHelpClub = observer(() => {
    const classes = useStyles();
    const studentsHelpClub = React.useContext(studentsHelpclubContext);
    const studentsHelpClubDialogs = React.useContext(outstandingStudentsDialogsContext);

    const handleCloseAlert = (event?: React.SyntheticEvent, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }
        studentsHelpClubDialogs.isOpen = false;
    };

    React.useEffect(() => {
        studentsHelpClub.getAdminStudentHelpClub(true);
    }, []);

    if(studentsHelpClub.isLoading){
        return (
            <AdminLayout>
                <div className={classes.root}>
                    <Box className={classes.BoxFlex}>
                        <Typography variant="h3">طلاب النادي المساعدون</Typography>
                            <Fab aria-label="add" className={classes.floatBtn}>
                                <RiUserAddLine className={classes.floatBtnIcon}/>
                            </Fab>
                    </Box>
                    <Box className={classes.membersBox}>
                        <CircularProgress />
                    </Box>
                </div>
            </AdminLayout>
        )
    }

    return (
        <AdminLayout>
            <div className={classes.root}>
                <Box className={classes.BoxFlex}>
                    <Typography variant="h3">طلاب النادي المساعدون</Typography>
                        <Fab aria-label="add" className={classes.floatBtn} onClick={() => studentsHelpClubDialogs.openAddDialog()}>
                            <RiUserAddLine className={classes.floatBtnIcon}/>
                        </Fab>
                </Box>
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
                {
                    studentsHelpClubDialogs.isAddDialogOpen? <AddDialog />: ""
                }
                 {
                    studentsHelpClubDialogs.isEditDialogOpen? <EditDialog />: ""
                }
                 {
                    studentsHelpClubDialogs.isDeleteDialogOpen? <DeleteDialog />: ""
                }
                <Snackbar open={studentsHelpClubDialogs.isOpen} autoHideDuration={3000} onClose={handleCloseAlert}>
                    <Alert onClose={handleCloseAlert} severity={studentsHelpClub.response.success? 'success' : 'error'}>
                        {studentsHelpClub.response.message}
                    </Alert>
                </Snackbar>
            </div>
        </AdminLayout>
    )
})

export default DashboardStudentsHelpClub
