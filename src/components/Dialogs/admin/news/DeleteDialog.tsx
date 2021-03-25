import React from 'react'
import {Dialog , DialogActions , DialogContent, DialogTitle, Button, Typography } from "@material-ui/core";
import {newsContext} from "../../../../store/store";
import { TransitionDialog } from '../../../transitionDialog';
import {observer} from "mobx-react-lite";

const DeleteDialog = observer(() => {
    const news = React.useContext(newsContext);

    const handleClose = () => {
        news.closeDeleteDialog()
    };

    return (
        <Dialog
        open={news.isDeleteDialogOpen}
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
            <Button color="primary" onClick={handleClose}>
                الغاء
            </Button>
            <Button color="primary" onClick={news.deleteAdminNew}>
                حذف
            </Button>
          </DialogActions>
      </Dialog>
    )
})

export default DeleteDialog
