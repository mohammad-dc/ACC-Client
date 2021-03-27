import React from 'react'
import {Dialog , DialogActions , DialogContent, DialogTitle, Button, Typography, CircularProgress } from "@material-ui/core";
import {clubMembersContext} from "../../../../store/store";
import { TransitionDialog } from '../../../transitionDialog';
import {observer} from "mobx-react-lite";

const ClubMemberDeleteDialog = observer(() => {
    const clubMembers = React.useContext(clubMembersContext);

    const handleClose = () => {
        clubMembers.closeDeleteDialog()
    };

    const deleteClubMember = async () => {
        await clubMembers.deleteAdminClubMember();
        handleClose();
    }
    return (
       <Dialog
        open={clubMembers.isDeleteDialogOpen}
        TransitionComponent={TransitionDialog}
        keepMounted
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
          <DialogTitle id="alert-dialog-slide-title">حذف هذا العضو</DialogTitle>
          <DialogContent>
             <form>
                 <Typography>هل انت متأكد من انك تريد حذف هذا العضو؟</Typography>
             </form>
          </DialogContent>
          <DialogActions>
            <Button color="primary" onClick={handleClose}>
                الغاء
            </Button>
            <Button color="primary" onClick={deleteClubMember}>
                {
                    clubMembers.isLoading? <CircularProgress size={20}/> : 'حذف'
                }
            </Button>
          </DialogActions>
      </Dialog>
    )
})

export default ClubMemberDeleteDialog
