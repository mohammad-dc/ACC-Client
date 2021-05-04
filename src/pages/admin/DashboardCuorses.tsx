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
import {coursesContext, coursesDialogsContext} from "../../store/store";
import {observer} from "mobx-react-lite";
import {useStyles} from "../../assets/styles/admin/pagesStanderdStyle";

const DashboardCuorses = observer(() => {
    const classes = useStyles();
    const theme = useTheme();
    const [value, setValue] = React.useState(0);

    const courses = React.useContext(coursesContext);
    const coursesDialogs = React.useContext(coursesDialogsContext);

    let reqiuredCourses = [];
    let optinalCourses = [];

    reqiuredCourses = courses.courses.filter (el => el.type === 'اجباري');
    optinalCourses = courses.courses.filter (el => el.type === 'اختياري');

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
  
        coursesDialogs.isOpen = false;
    };

    React.useEffect(() => {
        courses.getAdminCourses(true);
    }, []);

    if(courses.isLoading){
        return (
            <AdminLayout>
            <div className={classes.root}>
                <Box className={classes.BoxFlex}>
                    <Typography variant="h3">المواد</Typography>
                    <Fab aria-label="add" className={classes.floatBtn} onClick={() => coursesDialogs.openAddDialog()}>
                        <RiAddFill className={classes.floatBtnIcon}/>
                    </Fab>
                </Box>
                <CircularProgress />
                </div>
        </AdminLayout>
        )
    }
    else {
    return (
        <AdminLayout>
            <div className={classes.root}>
                <Box className={classes.BoxFlex}>
                    <Typography variant="h3">المواد</Typography>
                    <Fab aria-label="add" className={classes.floatBtn} onClick={() => coursesDialogs.openAddDialog()}>
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
                        </TabPanel>
                        <TabPanel value={value} index={1} dir='rtl'>
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
                        </TabPanel>
                    </SwipeableViews>
                </Box>

                {
                    coursesDialogs.isAddDialogOpen? <CoursesAddDialog />: ""
                }
                 {
                    coursesDialogs.isEditDialogOpen? <CoursesEditDialog />: ""
                }
                 {
                    coursesDialogs.isDeleteDialogOpen? <DeleteCourse />: ""
                }
                <Snackbar open={coursesDialogs.isOpen} autoHideDuration={3000} onClose={handleCloseAlert}>
                    <Alert onClose={handleCloseAlert} severity={courses.response.success? 'success' : 'error'}>
                        {courses.response.message}
                    </Alert>
                </Snackbar>
           </div>
        </AdminLayout>
    )
            }
})

export default DashboardCuorses
