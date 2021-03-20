import React from 'react'
import {Dialog , DialogActions , DialogContent, DialogTitle, Button, Box } from "@material-ui/core";
import { TransitionDialog } from '../../../transitionDialog';
import {Formik, Form} from "formik";
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import CustomField from "../../../CustomeField";
import {NewsSchema} from "../../../../validations/news";
import {newsContext} from "../../../../store/store";
import {observer} from "mobx-react-lite";
import DefaultImage from "../../../../assets/images/image.png";

let initialValues = {
    title: '',
    description: ''
}

const EditDialog = observer(() => {
    const news = React.useContext(newsContext);
    
    const handleClose = () => {
        news.closeEditDialog()
    };

    return (
        <Dialog
        open={news.isEditDialogOpen}
        TransitionComponent={TransitionDialog}
        keepMounted
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="alert-dialog-slide-title">تعديل الخبر</DialogTitle>
            <Formik
              initialValues={initialValues}
              validationSchema={NewsSchema}
              onSubmit={async (values, {setSubmitting}) => {
                setSubmitting(true); 
                }}
            >
                {({isSubmitting}) =>(
                      
                    <Form>
                        <DialogContent>
                            <Box>
                                <img src={DefaultImage} alt="اضف صورة" style={{display: 'block', margin: '5px auto'}}/>
                                 <Box>
                                    <input accept="image/*" style={{display: 'none'}} id="icon-button-file" type="file" />
                                    <label htmlFor="icon-button-file">
                                        <Button color="primary" style={{background: '#eee'}} aria-label="upload picture" component="span">
                                            <PhotoCamera style={{color: '#aaa'}}/> اضف صورة
                                        </Button>
                                    </label>
                                </Box>
                            </Box>
                            <CustomField placeholder="العنوان" name="title" type="text" label="العنوان" />
                            <CustomField placeholder="الوصف" name="description" type="text" label="الوصف" multiline={true}/>
                        </DialogContent>
                        <DialogActions>
                            <Button color="primary">
                                الغاء
                            </Button>
                            <Button color="primary">
                                حفظ
                            </Button>
                        </DialogActions>
                    </Form>
                )}
            </Formik>
      </Dialog>
    )
})

export default EditDialog
