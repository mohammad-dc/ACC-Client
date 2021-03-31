import React from 'react'
import {Dialog , DialogActions , DialogContent, DialogTitle, Button, Typography, CircularProgress } from "@material-ui/core";
import { TransitionDialog } from '../../../transitionDialog';
import {coursesContext} from "../../../../store/store";

const DeleteCourse = () => {
    const courses = React.useContext(coursesContext);
    
    const handleClose = () => {
        courses.closeDeleteDialog()
    };
    
    const deleteCourse = async () => {
        await courses.deleteAdminCourse();
        handleClose();
    }

    return (
        <Dialog
        open={courses.isDeleteDialogOpen}
        TransitionComponent={TransitionDialog}
        keepMounted
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
          <DialogTitle id="alert-dialog-slide-title">حذف مادة</DialogTitle>
          <DialogContent>
             <form>
                 <Typography>هل انت متأكد من انك تريد حذف هذه المادة؟</Typography>
             </form>
          </DialogContent>
          <DialogActions>
            <Button color="primary" onClick={handleClose}>
                الغاء
            </Button>
            <Button color="primary" onClick={deleteCourse}>
                {
                    courses.isLoading? <CircularProgress size={20}/> : 'حذف'
                }
            </Button>
          </DialogActions>
      </Dialog>
    )
}

export default DeleteCourse
