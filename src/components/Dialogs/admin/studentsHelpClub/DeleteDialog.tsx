import React from 'react'
import {Dialog , DialogActions , DialogContent, DialogTitle, Button, Typography } from "@material-ui/core";
import {studentsHelpclubContext} from "../../../../store/store";
import { TransitionDialog } from '../../../transitionDialog';

const DeleteDialog = () => {
    const studentsHelpClub = React.useContext(studentsHelpclubContext);

    const handleClose = () => {
        studentsHelpClub.closeDeleteDialog()
    };

    return (
        <Dialog
        open={studentsHelpClub.isDeleteDialogOpen}
        TransitionComponent={TransitionDialog}
        keepMounted
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
          <DialogTitle id="alert-dialog-slide-title">تأكيد الحذف</DialogTitle>
          <DialogContent>
             <form>
                 <Typography>هل انت متأكد من انك تريد الحذف؟</Typography>
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

export default DeleteDialog
