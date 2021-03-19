import React from 'react'
import AdminLayout from "../../layouts/admin/adminLayout";
import {Box, Typography, Fab, Grid } from "@material-ui/core";
import {RiUserAddLine} from "react-icons/ri";
import NoData from "../../components/NoData/NoData";
import ClubMemberItem from "../../components/admin/ClubMemberItem";
import ClubMemberAddDialog from "../../components/Dialogs/admin/ClubMember/ClubMemberAddDialog";
import ClubMemberEditDialog from "../../components/Dialogs/admin/ClubMember/ClubMemberEditDialog";
import ClubMemberDeleteDialog from "../../components/Dialogs/admin/ClubMember/ClubMemberDeleteDialog";
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

                <Box className={classes.membersBox}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={6} lg={3} xl={3}>
                                <ClubMemberItem name="محمد أحمد" rank="مشارك" image="https://topmeaning.com/english/images/img/EN/g/guy.jpg" ID={1}/>
                        </Grid>
                          <Grid item xs={12} md={6} lg={3} xl={3}>
                                <ClubMemberItem name="محمد أحمد" rank="مشارك" image="https://topmeaning.com/english/images/img/EN/g/guy.jpg" ID={1}/>
                        </Grid>
                          <Grid item xs={12} md={6} lg={3} xl={3}>
                                <ClubMemberItem name="محمد أحمد" rank="مشارك" image="https://topmeaning.com/english/images/img/EN/g/guy.jpg" ID={1}/>
                        </Grid>
                          <Grid item xs={12} md={6} lg={3} xl={3}>
                                <ClubMemberItem name="محمد أحمد" rank="مشارك" image="https://topmeaning.com/english/images/img/EN/g/guy.jpg" ID={1}/>
                        </Grid>
                             
                    </Grid>
                </Box>

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
