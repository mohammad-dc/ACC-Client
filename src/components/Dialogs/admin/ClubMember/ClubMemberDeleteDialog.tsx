import React from 'react'
import {Dialog , DialogActions , DialogContent, DialogTitle, Button, Typography } from "@material-ui/core";
import {clubMembersContext} from "../../../../store/store";
import { TransitionDialog } from '../../../transitionDialog';

const ClubMemberDeleteDialog = () => {
    const clubMembers = React.useContext(clubMembersContext);

    const handleClose = () => {
        clubMembers.closeDeleteDialog()
    };
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
            <Button color="primary">
                الغاء
            </Button>
            <Button color="primary">
                حذف
            </Button>
          </DialogActions>
      </Dialog>
    )
}

export default ClubMemberDeleteDialog
