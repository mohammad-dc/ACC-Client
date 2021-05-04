import React from 'react'
import {Dialog , DialogActions , DialogContent, DialogTitle, Button, Typography } from "@material-ui/core";
import {newsContext, newsDialogsContext} from "../../../../store/store";
import { TransitionDialog } from '../../../transitionDialog';
import {observer} from "mobx-react-lite";

const ViewDialog = observer(() => {
    const news = React.useContext(newsContext);
    const newsDialogs = React.useContext(newsDialogsContext);
    let item = news.news.find(el => el.id === news.newsSelected);

    const handleClose = () => {
        newsDialogs.closeViewDialog()
    };

    return (
        <Dialog
        open={newsDialogs.isViewDialogOpen}
        TransitionComponent={TransitionDialog}
        keepMounted
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
          <DialogTitle id="alert-dialog-slide-title">عن الخبر</DialogTitle>
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
