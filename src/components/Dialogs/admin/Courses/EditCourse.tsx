import React from 'react'
import {Dialog , DialogActions , DialogContent, DialogTitle, Button, Divider, 
    FormControl, InputLabel, MenuItem, Select, Box, IconButton, Typography, Tooltip } from "@material-ui/core";
import { TransitionDialog } from '../../../transitionDialog';
import {Formik, Form} from "formik";
import CustomField from "../../../CustomeField";
import {CourseVedioSchema, CourseSchema} from "../../../../validations/courses";
import {MdDelete} from "react-icons/md";
import {FiCheck} from "react-icons/fi";
import {coursesContext} from "../../../../store/store";
import {observer} from "mobx-react-lite";

const EditCourse: React.FC = observer(() => {
    const courses = React.useContext(coursesContext);
    const [type, setType] = React.useState('');
    

    let initialValues = {
        name: '',
        type:'',
        exams_url: '',
        summaries_url: '',
        course_url: '',
        vedios: [],
        video_url: ''
    }

    const handleClose = () => {
        courses.closeEditDialog()
    };

     const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
        setType(event.target.value as string);
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
                }}
              >
                {({isSubmitting}) =>(
                    <Form>
                        <CustomField placeholder="اسم المادة" name="name" type="text" label="اسم المادة" />
                        <FormControl variant="outlined" style={{width: '100%', marginTop: '10px'}}>
                                                <InputLabel id="demo-simple-select-outlined-label">نوع المادة</InputLabel>
                                                <Select
                                                labelId="demo-simple-select-outlined-label"
                                                id="demo-simple-select-outlined"
                                                value={type}
                                                onChange={handleChange}
                                                label="نوع المادة"
                                                >
                                                <MenuItem value="">
                                                    <em>None</em>
                                                </MenuItem>
                                                <MenuItem value="اجباري">
                                                    اجباري
                                                </MenuItem>
                                                <MenuItem value="اختياري">
                                                    اختياري
                                                </MenuItem>
                                                </Select>
                        </FormControl>
                        <CustomField placeholder="رابط الامتحانات" name="exams_url" type="text" label="رابط الامتحانات" />
                        <CustomField placeholder="رابط التلاخيص" name="summaries_url" type="text" label="رابط التلاخيص" />
                        <CustomField placeholder="رابط المادة" name="course_url" type="text" label="رابط المادة" />
                        <Divider light/>
                        <Typography variant="h6">
                            روابط الفيديوهات
                        </Typography>
                        <Box style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                            <CustomField placeholder="رابط فيديو" name="video_url" type="text" label="رابط فيديو" />
                            <Box style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                                <Tooltip title="حذف الفيديو">
                                    <IconButton>
                                        <MdDelete />
                                    </IconButton>
                                </Tooltip>

                                <Tooltip title="حفظ التعديل">
                                    <IconButton>
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
            <Button color="primary" onClick={() => courses.closeEditDialog()}>
                الغاء
            </Button>
            <Button color="primary">
                حفظ
            </Button>
          </DialogActions>
      </Dialog>
    )
})

export default EditCourse
