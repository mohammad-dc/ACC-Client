import React from 'react'
import AdminLayout from "../../layouts/admin/adminLayout";
import {Box, Typography, Fab, Grid, CircularProgress, Snackbar} from "@material-ui/core";
import Alert from "../../components/Alert";
import {RiUserAddLine} from "react-icons/ri";
import NoData from "../../components/NoData/NoData";
import ClubMemberItem from "../../components/admin/ClubMemberItem";
import ClubMemberAddDialog from "../../components/Dialogs/admin/ClubMember/ClubMemberAddDialog";
import ClubMemberEditDialog from "../../components/Dialogs/admin/ClubMember/ClubMemberEditDialog";
import ClubMemberDeleteDialog from "../../components/Dialogs/admin/ClubMember/ClubMemberDeleteDialog";
import {IResponse} from "../../interfaces/response";
import {IClubMember} from "../../interfaces/clubMember";
import {clubMembersContext, clubMembersDialogsContext} from "../../store/store";
import {observer} from "mobx-react-lite";
import {useStyles} from "../../assets/styles/admin/pagesStanderdStyle";

const DashboardClubMembers = observer(() => {
    const classes = useStyles();
    const clubMembers = React.useContext(clubMembersContext);
    const clubMembersDialogs = React.useContext(clubMembersDialogsContext);

    const handleCloseAlert = (event?: React.SyntheticEvent, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }
  
        clubMembersDialogs.isOpen = false;
    };

    React.useEffect(() => {
        clubMembers.getAdminClubMembers(true);
    }, []);

    if(clubMembers.isLoading){
        return (
            <AdminLayout>
            <div className={classes.root}>
                <Box className={classes.BoxFlex}>
                    <Typography variant="h3">اعضاء النادي</Typography>
                        <Fab aria-label="add" className={classes.floatBtn} onClick={() => clubMembersDialogs.openAddDialog()}>
                            <RiUserAddLine className={classes.floatBtnIcon}/>
                        </Fab>
                </Box>
                <CircularProgress />
                </div>
        </AdminLayout>
        )
    }
    else {
    return (
        <AdminLayout>
            <div className={classes.root}>
                <Box className={classes.BoxFlex}>
                    <Typography variant="h3">اعضاء النادي</Typography>
                        <Fab aria-label="add" className={classes.floatBtn} onClick={() => clubMembersDialogs.openAddDialog()}>
                            <RiUserAddLine className={classes.floatBtnIcon}/>
                        </Fab>
                </Box>
                    <Box className={classes.membersBox}>
                        {
                            clubMembers.clubMember.length === 0
                            ? <NoData />
                            :
                            <Grid container spacing={2}>
                                {
                                    clubMembers.clubMember.map((item: IClubMember, index: number) => (
                                        <Grid item xs={12} md={6} lg={3} xl={3} key={index}>
                                            <ClubMemberItem first_name={item.first_name} last_name={item.last_name} rank={item.rank} image={item.image} id={item.id}/>
                                        </Grid>
                                    ))
                                }
                            </Grid>
                        }
                    </Box>
                {
                    clubMembersDialogs.isAddDialogOpen? <ClubMemberAddDialog />: ""
                }
                 {
                    clubMembersDialogs.isEditDialogOpen? <ClubMemberEditDialog />: ""
                }
                 {
                    clubMembersDialogs.isDeleteDialogOpen? <ClubMemberDeleteDialog />: ""
                }

                 {
                    clubMembersDialogs.isOpen
                    ?
                    <Snackbar open={clubMembersDialogs.isOpen} autoHideDuration={3000} onClose={handleCloseAlert}>
                        <Alert onClose={handleCloseAlert} severity={clubMembers.response.success? 'success' : 'error'}>
                            {clubMembers.response.message}
                        </Alert>
                    </Snackbar> : ''
                }
           </div>
        </AdminLayout>
    )
            }
})

export default DashboardClubMembers
