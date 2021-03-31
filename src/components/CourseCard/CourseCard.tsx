import React from 'react'
import {Link} from "@material-ui/core";
import{ Grid, Box, Typography, Chip } from "@material-ui/core";
import EditDeleteMenu from "../EditDeleteMenu";
import {CgHashtag} from "react-icons/cg";
import {BsCameraVideoFill} from "react-icons/bs";
import {FaCloudDownloadAlt} from "react-icons/fa";
import {RiFilePaper2Fill} from "react-icons/ri"
import {useStyles} from "../../assets/styles/admin/courseCardStyles";
import {ICourse} from "../../interfaces/course";
import {IVideo} from "../../interfaces/video";


interface ICourseData{
    courseData: ICourse
}
const CourseCard: React.FC<ICourseData> = ({courseData}: ICourseData) => {
    const classes = useStyles();
    
    return (
        <div className={classes.root}>
            <Grid container>
                <Grid item xs={12} md={4} className={classes.imageSide}>

                </Grid>
                <Grid item xs={12} md={8} className={classes.infoSide}>
                    <Box className={classes.flexBox}>
                        <Typography variant="h5">{courseData.name}</Typography>
                        <EditDeleteMenu id={courseData.id}/>
                    </Box>
                    <Box className={classes.tags}>
                        <Link style={{display: !courseData.summaries? 'none' : '', textDecoration: 'none', color: '#434343'}} href={`${courseData.summaries}`}>
                            <Chip className={classes.chip} size="small" label="تلاخيص" icon={<RiFilePaper2Fill />}/>
                        </Link>
                        <Link style={{display: !courseData.course? 'none' : '', textDecoration: 'none', color: '#434343'}} href={`${courseData.course}`}>
                            <Chip className={classes.chip} size="small" label="المادة" icon={<RiFilePaper2Fill />}/>
                        </Link>
                        <Link style={{display: !courseData.exams? 'none' : '', textDecoration: 'none', color: '#434343'}} href={`${courseData.exams}`}>
                            <Chip className={classes.chip} size="small" label="الامتحانات" icon={<CgHashtag />}/>
                        </Link>
                        <Link style={{display: !courseData.setup? 'none' : '', textDecoration: 'none', color: '#434343'}} href={`${courseData.setup}`}>
                            <Chip className={classes.chip} size="small" label="setup" icon={<FaCloudDownloadAlt />}/>
                        </Link>
                           {
                                courseData.videos !== undefined && courseData.videos.length > 0?
                                courseData.videos.map((item: IVideo, index: number) =>(
                                    <Link href={`${item.url}`} key={item.id}>
                                        <Chip  className={classes.chip} size="small" label={`فيديو شرح ${++index}`} icon={<BsCameraVideoFill />}/>
                                    </Link>
                                )): ''
                           }
                    </Box>
                </Grid>
            </Grid>
        </div>
    )
}

export default CourseCard
