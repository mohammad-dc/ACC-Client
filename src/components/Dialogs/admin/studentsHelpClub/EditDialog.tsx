import React from 'react'
import {Dialog , DialogActions , DialogContent, DialogTitle, Button, Box, IconButton, Avatar } from "@material-ui/core";
import { TransitionDialog } from '../../../transitionDialog';
import {Formik, Form} from "formik";
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import CustomField from "../../../CustomeField";
import {StudentsHelpClubSchema} from "../../../../validations/studentsHelpClub";
import {studentsHelpclubContext} from "../../../../store/store";
import {observer} from "mobx-react-lite";


let initialValues = {
    first_name: '',
    last_name: '',
    description: ''
}

const EditDialog = observer(() => {
    const studentsHelpClub = React.useContext(studentsHelpclubContext);
    
    const handleClose = () => {
        studentsHelpClub.closeEditDialog()
    };

    return (
        <Dialog
        open={studentsHelpClub.isEditDialogOpen}
        TransitionComponent={TransitionDialog}
        keepMounted
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="alert-dialog-slide-title">اضافة طالب مساعد</DialogTitle>
            <Formik
              initialValues={initialValues}
              validationSchema={StudentsHelpClubSchema}
              onSubmit={async (values, {setSubmitting}) => {
                setSubmitting(true); 
                }}
            >
                {({isSubmitting}) =>(
                      
                    <Form>
                        <DialogContent>
                            <Box style={{position: 'relative', width: 'fit-content', margin: '0 auto'}}>
                                <Avatar style={{width: '200px', height: '200px', position: 'relative'}}/>
                                <Box style={{position: 'absolute', bottom: 0, left: 0}}>
                                    <input accept="image/*" style={{display: 'none'}} id="icon-button-file" type="file" />
                                    <label htmlFor="icon-button-file">
                                        <IconButton color="primary" style={{background: '#eee'}} aria-label="upload picture" component="span">
                                            <PhotoCamera style={{color: '#aaa'}}/>
                                        </IconButton>
                                    </label>
                                </Box>
                            </Box>
                            <CustomField placeholder="الاسم الأول" name="first_name" type="text" label="الاسم الأول" />
                            <CustomField placeholder="الاسم الأخير" name="last_name" type="text" label="الاسم الأخير" />
                            <CustomField placeholder="عن الطالب" name="description" type="text" label="عن الطالب"  multiline={true} />
                        </DialogContent>
                        <DialogActions>
                            <Button color="primary">
                                الغاء
                            </Button>
                            <Button color="primary">
                                اضافة
                            </Button>
                        </DialogActions>
                    </Form>
                )}
            </Formik>
      </Dialog>
    )
})

export default EditDialog
