import React from 'react'
import {Dialog , DialogActions , DialogContent, DialogTitle, Button, Box, CircularProgress } from "@material-ui/core";
import { TransitionDialog } from '../../../transitionDialog';
import {Formik, Form} from "formik";
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import CustomField from "../../../CustomeField";
import {NewsSchema} from "../../../../validations/news";
import {newsContext, newsDialogsContext} from "../../../../store/store";
import {observer} from "mobx-react-lite";
import DefaultImage from "../../../../assets/images/image.png";

let initialValues = {
    title: '',
    description: '',
    image: '',
}

const AddDialog = observer(() => {
    const news = React.useContext(newsContext);
    const newsDialogs = React.useContext(newsDialogsContext);
    const [image, setImage] = React.useState('');

    const handleClose = () => {
        newsDialogs.closeAddDialog()
    };

    return (
        <Dialog
        open={newsDialogs.isAddDialogOpen}
        TransitionComponent={TransitionDialog}
        keepMounted
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="alert-dialog-slide-title">اضافة خبر</DialogTitle>
            <Formik
              initialValues={initialValues}
              validationSchema={NewsSchema}
              onSubmit={async (values, {setSubmitting}) => {
                setSubmitting(true); 
                let data = new FormData();
                data.append('image', values.image);
                data.append('title', values.title);
                data.append('description', values.description);
                await news.createAdminNews(data);
                newsDialogs.isOpen = true;
                handleClose();
                }}
            >
                {(formProps) =>(
                      
                    <Form>
                        <DialogContent>
                            <Box>
                                <img src={image === ''? DefaultImage: image} alt="اضف صورة" style={{display: 'block', margin: '5px auto', width: '100%', maxHeight: '500px', height: '100%'}}/>
                                 <Box>
                                    <input 
                                    accept="image/*"
                                    style={{display: 'none'}}
                                    id="icon-button-file"
                                    type="file"
                                    name="image"
                                    onChange={(e) => {
                                        if (e.target.files && e.target.files[0]) {
                                            const value = e.target.files[0]
                                            setImage(URL.createObjectURL(value));
                                            formProps.setFieldValue('image', e.target.files[0]);
                                        }
                                    }} />
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
                            <Button color="primary" onClick={handleClose}>
                                الغاء
                            </Button>
                            <Button color="primary" type="submit">
                                {
                                    news.isLoading? <CircularProgress size={20}/> : 'اضافة'
                                } 
                            </Button>
                        </DialogActions>
                    </Form>
                )}
            </Formik>
      </Dialog>
    )
})

export default AddDialog
