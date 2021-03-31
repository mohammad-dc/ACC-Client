import React from 'react'
import AdminLayout from "../../layouts/admin/adminLayout";
import {Box, Typography, Fab, Grid, Tabs, Tab, CircularProgress, Snackbar} from "@material-ui/core";
import Alert from "../../components/Alert";
import {ICourse} from "../../interfaces/course"
import {useTheme} from "@material-ui/core/styles";
import {RiAddFill} from "react-icons/ri";
import TabPanel from "../../components/TabPanel";
import AllyProps from "../../components/AllyProps";
import SwipeableViews from 'react-swipeable-views';
import NoData from "../../components/NoData/NoData";
import CourseCard from "../../components/CourseCard/CourseCard";
import CoursesAddDialog from "../../components/Dialogs/admin/Courses/AddCourse";
import CoursesEditDialog from "../../components/Dialogs/admin/Courses/EditCourse";
import DeleteCourse from "../../components/Dialogs/admin/Courses/DeleteCourse";
import {coursesContext} from "../../store/store";
import {observer} from "mobx-react-lite";
import {useStyles} from "../../assets/styles/admin/pagesStanderdStyle";

const DashboardCuorses = observer(() => {
    const classes = useStyles();
    const theme = useTheme();
    const [value, setValue] = React.useState(0);
    const [open, setOpen] = React.useState(false);
    const [success, setSuccess] = React.useState(false);

    const courses = React.useContext(coursesContext);
    console.log(courses.courses)
    let reqiuredCourses = [];
    let optinalCourses = [];

    reqiuredCourses = courses.courses.filter (el => el.type === 'اجباري');
    optinalCourses = courses.courses.filter (el => el.type === 'اختياري');

    console.log(reqiuredCourses);
    const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
        setValue(newValue);
    };

    const handleChangeIndex = (index: number) => {
        setValue(index);
    };

    const handleCloseAlert = (event?: React.SyntheticEvent, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }
  
        setOpen(false);
        setSuccess(false);
    };

    React.useEffect(() => {
        courses.getAdminCourses();
        setSuccess(courses.response.success);
        setOpen(true);
    }, [courses.response]);

    return (
        <AdminLayout>
            <div className={classes.root}>
                <Box className={classes.BoxFlex}>
                    <Typography variant="h3">المواد</Typography>
                        <Fab aria-label="add" className={classes.floatBtn} onClick={() => courses.openAddDialog()}>
                            <RiAddFill className={classes.floatBtnIcon}/>
                        </Fab>
                </Box>

                <Box className={classes.membersBox}>
                    <Tabs
                        value={value}
                        onChange={handleChange}
                        indicatorColor="primary"
                        textColor="primary"
                        aria-label="full width tabs example"
                    >
                        <Tab label="اجباري تخصص" {...AllyProps(0)} />
                        <Tab label="اختياري تخصص" {...AllyProps(1)} />
                    </Tabs>
                    <SwipeableViews
                        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                        index={value}
                        onChangeIndex={handleChangeIndex}
                    >
                        <TabPanel value={value} index={0} dir='rtl'>
                            {
                                courses.isLoading
                                ? <CircularProgress />
                                :
                                <Box>
                                    {
                                        reqiuredCourses.length === 0
                                        ? <NoData />
                                        :
                                        <Grid container spacing={2} >
                                            {
                                                reqiuredCourses.map((item: ICourse) =>(
                                                    <Grid item xs={12} md={6} lg={4} key={item.id}>
                                                        <CourseCard courseData={item}/>
                                                    </Grid>
                                                ))
                                            }
                                        </Grid>
                                    }
                                </Box>
                            }
                            
                        </TabPanel>
                        <TabPanel value={value} index={1} dir='rtl'>
                            {
                                courses.isLoading
                                ? <CircularProgress />
                                :
                                <Box>
                                    {
                                        optinalCourses.length === 0
                                        ? <NoData />
                                        :
                                        <Grid container spacing={2} >
                                            {
                                                optinalCourses.map((item: ICourse) =>(
                                                    <Grid item xs={12} md={6} lg={4} key={item.id}>
                                                        <CourseCard courseData={item}/>
                                                    </Grid>
                                                ))
                                            }
                                        </Grid>
                                    }
                                </Box>
                            }
                        </TabPanel>
                    </SwipeableViews>
                </Box>

                {
                    courses.isAddDialogOpen? <CoursesAddDialog />: ""
                }
                 {
                    courses.isEditDialogOpen? <CoursesEditDialog />: ""
                }
                 {
                    courses.isDeleteDialogOpen? <DeleteCourse />: ""
                }

                {
                    success
                    ?
                    <Snackbar open={open} autoHideDuration={3000} onClose={handleCloseAlert}>
                        <Alert onClose={handleCloseAlert} severity={courses.response.success? 'success' : 'error'}>
                            {courses.response.message}
                        </Alert>
                    </Snackbar> : ''
                }
           </div>
        </AdminLayout>
    )
})

export default DashboardCuorses
