import React from 'react'
import {Dialog, TextField, DialogActions , DialogContent, DialogTitle, CircularProgress, IconButton, Button, Divider, Tooltip, Typography, Box } from "@material-ui/core";
import { TransitionDialog } from '../../../transitionDialog';
import {ICourseInsert} from "../../../../interfaces/courseInsert";
import {FiCheck} from "react-icons/fi";
import {RiDeleteBin2Fill} from "react-icons/ri";
import DrpoDownProps from "../../../DropDownList";
import {Formik, Form} from "formik";
import CustomField from "../../../CustomeField";
import {CourseSchema} from "../../../../validations/courses";
import {coursesContext, coursesDialogsContext} from "../../../../store/store";
import {observer} from "mobx-react-lite";

const AddCourse = observer(() => {
    const courses = React.useContext(coursesContext);
    const coursesDialogs = React.useContext(coursesDialogsContext);
    const [videosList, setVideosList] = React.useState<string[]>([]);

    let typeList = [
        {key: 'اجباري', value: 'اجباري'},
        {key: 'اختياري', value: 'اختياري'}
    ];

    let initialValues: ICourseInsert = {
        name: '',
        type:'',
        setup: '',
        exams: '',
        summaries: '',
        course: '',
        video_url: '',
        videos: [],
    }

    const handleClose = () => {
        coursesDialogs.closeAddDialog()
    };

    return (
         <Dialog
        open={coursesDialogs.isAddDialogOpen}
        TransitionComponent={TransitionDialog}
        keepMounted
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
          <DialogTitle id="alert-dialog-slide-title">اضافة مادة</DialogTitle>

             <Formik
              initialValues={initialValues}
              validationSchema={CourseSchema}
              
              onSubmit={async (values, {setSubmitting}) => {
                setSubmitting(true);
                values.videos = videosList;
                const { 'video_url': _, ...rest} = values;
                console.log(rest)
                await courses.createAdminCourse(rest);
                coursesDialogs.isOpen = true;
                handleClose();
                }}
              >
                {(props) =>(
                    <Form>
                        <DialogContent>
                        <CustomField placeholder="اسم المادة" name="name" type="text" label="اسم المادة" />
                        <DrpoDownProps label="نوع المادة" name="type" options={typeList}/>
                        <CustomField placeholder="setup" name="setup" type="text" label="setup" />
                        <CustomField placeholder="رابط الامتحانات" name="exams" type="text" label="رابط الامتحانات" />
                        <CustomField placeholder="رابط التلاخيص" name="summaries" type="text" label="رابط التلاخيص" />
                        <CustomField placeholder="رابط المادة" name="course" type="text" label="رابط المادة" />
                        <Divider light/>
                        <Typography variant="h6">
                            روابط الفيديوهات
                        </Typography>
                         <Box style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                            <CustomField placeholder="رابط فيديو" name="video_url" type="text" label="رابط فيديو"/>
                            <Tooltip title="حفظ">
                                <IconButton onClick={() => {
                                    setVideosList([...videosList, props.values.video_url]);
                                    }}>
                                    <FiCheck />
                                </IconButton>
                            </Tooltip>
                        </Box>
                        {
                            videosList.length > 0?
                            videosList.map((video: string, index: number) =>(
                                <Box style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                                    <TextField 
                                    style={{width: '100%', marginTop: '10px'}}
                                    variant="outlined"
                                    placeholder="رابط فيديو"
                                    name={`video_url-${index}`}
                                    type="text"
                                    label="رابط فيديو"
                                    value={video}
                                    InputProps={{
                                        readOnly: true,
                                    }}/>
                                    <Tooltip title="حذف">
                                        <IconButton onClick={() => {
                                            let newList = videosList.filter((el: string, indexFliter: number) => indexFliter !== index);
                                            setVideosList([...newList]);
                                            }}>
                                            <RiDeleteBin2Fill />
                                        </IconButton>
                                    </Tooltip>
                                </Box>
                            )): ''
                        }
                        </DialogContent>
                        <DialogActions>
                            <Button color="primary" onClick={handleClose}>
                                الغاء
                            </Button>
                            <Button color="primary" type="submit">
                                {
                                    courses.isLoading? <CircularProgress size={20}/> : 'اضافة'
                                } 
                            </Button>
                        </DialogActions>
                    </Form>
                )}
              </Formik>
      </Dialog>
    )
})

export default AddCourse
