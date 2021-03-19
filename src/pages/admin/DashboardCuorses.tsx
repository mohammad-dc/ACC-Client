import React from 'react'
import AdminLayout from "../../layouts/admin/adminLayout";
import {Box, Typography, Fab, Grid, Tabs, Tab   } from "@material-ui/core";
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

    const courses = React.useContext(coursesContext);

    const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
        setValue(newValue);
    };

    const handleChangeIndex = (index: number) => {
        setValue(index);
    };

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
                            <Grid container spacing={2} >
                                <Grid item xs={12} md={6} lg={4} >
                                        <CourseCard />
                                </Grid>
                                <Grid item xs={12} md={6} lg={4} >
                                        <CourseCard />
                                </Grid>
                                <Grid item xs={12} md={6} lg={4} >
                                        <CourseCard />
                                </Grid>
                                <Grid item xs={12} md={6} lg={4} >
                                        <CourseCard />
                                </Grid>
                                
                            </Grid>
                        </TabPanel>
                        <TabPanel value={value} index={1} dir='rtl'>
                            <NoData />
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
           </div>
        </AdminLayout>
    )
})

export default DashboardCuorses
