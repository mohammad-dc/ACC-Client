import React from 'react'
import {Dialog , DialogActions , DialogContent, DialogTitle, Button, Box, CircularProgress } from "@material-ui/core";
import { TransitionDialog } from '../../../transitionDialog';
import {Formik, Form} from "formik";
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import CustomField from "../../../CustomeField";
import {NewsSchema} from "../../../../validations/news";
import {newsContext} from "../../../../store/store";
import {observer} from "mobx-react-lite";


const EditDialog = observer(() => {
    const news = React.useContext(newsContext);
    const [image, setImage] = React.useState('');
    const newsItem = news.news.find(item => item.id === news.newsSelected);

    
    let initialValues = {
        title: `${newsItem?.title}`,
        description: `${newsItem?.description}`,
        image: `http://localhost:4000/uploads/${newsItem?.image?.trim()}`
    }

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
                let data = new FormData();
                data.append('image', values.image);
                data.append('title', values.title);
                data.append('description', values.description);
                await news.updateAdminNews(data);
                }}
            >
                {(formProps) =>(
                      
                    <Form>
                        <DialogContent>
                            <Box>
                                <img src={image === ''? initialValues.image : image} alt="اضف صورة" style={{display: 'block', margin: '5px auto'}}/>
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
                                    news.isLoading? <CircularProgress size={20}/> : 'حفظ'
                                } 
                            </Button>
                        </DialogActions>
                    </Form>
                )}
            </Formik>
      </Dialog>
    )
})

export default EditDialog
