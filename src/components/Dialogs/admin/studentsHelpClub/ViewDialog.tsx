import React from 'react'
import {Dialog , DialogActions , DialogContent, DialogTitle, Button, Typography } from "@material-ui/core";
import {studentsHelpclubContext} from "../../../../store/store";
import { TransitionDialog } from '../../../transitionDialog';
import {observer} from "mobx-react-lite";

const ViewDialog = observer(() => {
    const studentsHelpClub = React.useContext(studentsHelpclubContext);
    let item = studentsHelpClub.studentHelpClubClient.find(el => el.id === studentsHelpClub.studentHelpClubSelected);

    const handleClose = () => {
        studentsHelpClub.closeViewDialog()
    };

    return (
        <Dialog
        open={studentsHelpClub.isViewDialogOpen}
        TransitionComponent={TransitionDialog}
        keepMounted
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
          <DialogTitle id="alert-dialog-slide-title">عن الطالب</DialogTitle>
          <DialogContent>
             <form>
                 <Typography>{item?.description}</Typography>
             </form>
          </DialogContent>
          <DialogActions>
            <Button color="primary" onClick={handleClose}>
                الغاء
            </Button>
          </DialogActions>
      </Dialog>
    )
})

export default ViewDialog
