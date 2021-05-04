import React from 'react'
import {Dialog, TextField, DialogActions , DialogContent, DialogTitle, Button, Divider, CircularProgress, Box, IconButton, Typography, Tooltip } from "@material-ui/core";
import { TransitionDialog } from '../../../transitionDialog';
import DrpoDownProps from "../../../DropDownList";
import {IVideo} from "../../../../interfaces/video";
import {Formik, Form} from "formik";
import CustomField from "../../../CustomeField";
import {CourseSchema} from "../../../../validations/courses";
import {MdDelete} from "react-icons/md";
import {FiCheck} from "react-icons/fi";
import {coursesContext} from "../../../../store/store";
import {observer} from "mobx-react-lite";

const EditCourse: React.FC = observer(() => {
    const courses = React.useContext(coursesContext);
    const courseItem = courses.courses.find(item => item.id === courses.courseSelected);
    let input_ref = React.useRef<any>([]);
    input_ref.current = [];
    
    let typeList = [
        {key: 'اجباري', value: 'اجباري'},
        {key: 'اختياري', value: 'اختياري'}
    ];

    let initialValues = {
        name: `${courseItem?.name}`,
        type: `${courseItem?.type}`,
        setup: `${courseItem?.setup ? courseItem?.setup : ''}`,
        exams: `${courseItem?.exams ? courseItem?.exams : ''}`,
        summaries: `${courseItem?.summaries ? courseItem?.summaries : ''}`,
        course: `${courseItem?.course ? courseItem?.course : ''}`,
        video_url: '',
        videos: courseItem?.videos? courseItem?.videos : [],
    }
        input_ref.current = initialValues.videos.map(
            (ref, index) => (input_ref.current[index] = React.createRef())  
        );
    
    const handleClose = () => {
        courses.closeEditDialog()
    };
    return (
        <Dialog
        open={courses.isEditDialogOpen}
        TransitionComponent={TransitionDialog}
        keepMounted
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
          <DialogTitle id="alert-dialog-slide-title">تعديل المادة</DialogTitle>
          <DialogContent>
             <Formik
              initialValues={initialValues}
              validationSchema={CourseSchema}
              onSubmit={async (values, {setSubmitting}) => {
                setSubmitting(true); 
                const { 'video_url': _, 'videos': __, ...rest} = values;
                await courses.updateAdminCourse(rest);
                handleClose();
                }}
              >
                {(props) =>(
                    <Form>
                        <CustomField placeholder="اسم المادة" name="name" type="text" label="اسم المادة" />
                        <DrpoDownProps label="نوع المادة" options={typeList} name="type" />
                        <CustomField placeholder="setup" name="setup" type="text" label="setup" />
                        <CustomField placeholder="رابط الامتحانات" name="exams" type="text" label="رابط الامتحانات" />
                        <CustomField placeholder="رابط التلاخيص" name="summaries" type="text" label="رابط التلاخيص" />
                        <CustomField placeholder="رابط المادة" name="course" type="text" label="رابط المادة" />
                        <Divider light/>
                        <Typography variant="h6">
                            روابط الفيديوهات
                        </Typography>
                        {
                            initialValues.videos.length > 0?
                                initialValues.videos.map((item: IVideo, index: number) => (
                                    <Box key={item.id} style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                                        <TextField
                                        ref={input_ref.current[index]}
                                        style={{width: '100%', marginTop: '10px'}}
                                        variant="outlined"
                                        placeholder="رابط فيديو" 
                                        name={`video_url-${item.id}`} 
                                        type="text" 
                                        label="رابط فيديو" 
                                        value={item.url} />
                                        <Box style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                                            <Tooltip title="حذف الفيديو">
                                                <IconButton onClick={() => courses.deleteAdminVideo(item.id)}>
                                                    <MdDelete />
                                                </IconButton>
                                            </Tooltip>

                                            <Tooltip title="حفظ التعديل">
                                                <IconButton onClick={() => {
                                                    let value = {url: input_ref.current[index].current.children[1].children[0].value};
                                                    courses.updateAdminVideo(item.id, value)}}>
                                                    <FiCheck />
                                                </IconButton>
                                            </Tooltip>
                                        </Box>
                                    </Box>
                                )): ''
                        }
                        <Box style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                            <CustomField placeholder="اضافة رابط فيديو " name="video_url" type="text" label="اضافة رابط فيديو " />
                            <Box style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>

                                <Tooltip title="اضافة">
                                    <IconButton onClick={() => {
                                        let value = {
                                            course_id: initialValues.videos[0].course_id,
                                            url: props.values.video_url
                                        }
                                        courses.createAdminVideo(value);
                                    }}>
                                        <FiCheck />
                                    </IconButton>
                                </Tooltip>
                            </Box>
                        </Box>
                    </Form>
                )}
              </Formik>
          </DialogContent>
          <DialogActions>
            <Button color="primary" onClick={handleClose}>
                الغاء
            </Button>
            <Button color="primary" type="submit">
                {
                    courses.isLoading? <CircularProgress size={20}/> : 'حفظ'
                }
            </Button>
          </DialogActions>
      </Dialog>
    )
})

export default EditCourse
