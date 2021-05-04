import React from 'react'
import UserLayout from "../../layouts/user/userLayout";
import Footer from "../../components/Footer/Footer";
import {Box, Grid, Tabs, Tab, CircularProgress} from "@material-ui/core";
import {ICourse} from "../../interfaces/course";
import {useTheme} from "@material-ui/core/styles";
import TabPanel from "../../components/TabPanel";
import AllyProps from "../../components/AllyProps";
import SwipeableViews from 'react-swipeable-views';
import NoData from "../../components/NoData/NoData";
import UserCourseCard from "../../components/CourseCard/UserCourseCard";
import {coursesContext, coursesDialogsContext} from "../../store/store";
import {observer} from "mobx-react-lite";
import {useStyles} from "../../assets/styles/admin/pagesStanderdStyle";

const Courses = observer(() => {
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

    return (
        <UserLayout>
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
                                                        <UserCourseCard courseData={item}/>
                                                    </Grid>
                                                ))
                                            }
                                        </Grid>
                                    }
                                </Box>
                            }
                        </Box>
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
                                                    <UserCourseCard courseData={item}/>
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
                <Footer />
        </UserLayout>
    )
});

export default Courses
