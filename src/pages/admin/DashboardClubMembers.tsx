import React from 'react'
import AdminLayout from "../../layouts/admin/adminLayout";
import {Box, Typography, Fab, Grid, CircularProgress} from "@material-ui/core";
import Alert from "../../components/Alert";
import {RiUserAddLine} from "react-icons/ri";
import NoData from "../../components/NoData/NoData";
import ClubMemberItem from "../../components/admin/ClubMemberItem";
import ClubMemberAddDialog from "../../components/Dialogs/admin/ClubMember/ClubMemberAddDialog";
import ClubMemberEditDialog from "../../components/Dialogs/admin/ClubMember/ClubMemberEditDialog";
import ClubMemberDeleteDialog from "../../components/Dialogs/admin/ClubMember/ClubMemberDeleteDialog";
import {IClubMember} from "../../interfaces/clubMember";
import {clubMembersContext} from "../../store/store";
import {observer} from "mobx-react-lite";
import {useStyles} from "../../assets/styles/admin/pagesStanderdStyle";

const DashboardClubMembers = observer(() => {
    const classes = useStyles();
    const clubMembers = React.useContext(clubMembersContext);

    return (
        <AdminLayout>
            <div className={classes.root}>
                <Box className={classes.BoxFlex}>
                    <Typography variant="h3">اعضاء النادي</Typography>
                        <Fab aria-label="add" className={classes.floatBtn} onClick={() => clubMembers.openAddDialog()}>
                            <RiUserAddLine className={classes.floatBtnIcon}/>
                        </Fab>
                </Box>
                {
                    clubMembers.isLoading
                    ? <CircularProgress />
                    : 
                    <Box className={classes.membersBox}>
                        {
                            clubMembers.clubMember.length === 0
                            ? <NoData />
                            :
                            <Grid container spacing={2}>
                                {
                                    clubMembers.clubMember.map((item: IClubMember, index: number) => (
                                        <Grid item xs={12} md={6} lg={3} xl={3} key={index}>
                                            <ClubMemberItem first_name={item.first_name} last_name={item.last_name} rank={item.rank} image={item.image} ID={item.ID}/>
                                        </Grid>
                                    ))
                                }
                            </Grid>
                        }
                    </Box>
                }

                {
                    clubMembers.isAddDialogOpen? <ClubMemberAddDialog />: ""
                }
                 {
                    clubMembers.isEditDialogOpen? <ClubMemberEditDialog />: ""
                }
                 {
                    clubMembers.isDeleteDialogOpen? <ClubMemberDeleteDialog />: ""
                }
           </div>
        </AdminLayout>
    )
})

export default DashboardClubMembers
