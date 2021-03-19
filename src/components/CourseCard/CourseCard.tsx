import React from 'react'
import{ Grid, Box, Typography, Chip } from "@material-ui/core";
import EditDeleteMenu from "../EditDeleteMenu";
import {CgHashtag} from "react-icons/cg";
import {useStyles} from "../../assets/styles/admin/courseCardStyles";

const CourseCard = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container>
                <Grid item xs={12} md={4} className={classes.imageSide}>

                </Grid>
                <Grid item xs={12} md={8} className={classes.infoSide}>
                    <Box className={classes.flexBox}>
                        <Typography variant="h5">خوارزميات</Typography>
                        <EditDeleteMenu />
                    </Box>
                    <Box className={classes.tags}>
                        <Chip  className={classes.chip} size="small" label="تلاخيص" icon={<CgHashtag />}/>
                         <Chip  className={classes.chip} size="small" label="تلاخيص" icon={<CgHashtag />}/>
                          <Chip  className={classes.chip} size="small" label="تلاخيص" icon={<CgHashtag />}/>
                           <Chip  className={classes.chip} size="small" label="تلاخيص" icon={<CgHashtag />}/>
                            <Chip  className={classes.chip} size="small" label="تلاخيص" icon={<CgHashtag />}/>
                    </Box>
                </Grid>
            </Grid>
        </div>
    )
}

export default CourseCard
