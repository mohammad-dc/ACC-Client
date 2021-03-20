import React from 'react';
import {Box, Avatar, Typography, IconButton, Tooltip} from "@material-ui/core";
import {MdDeleteForever} from "react-icons/md";
import {RiEdit2Fill} from "react-icons/ri";
import {IOutstandinStudents} from "../../interfaces/outstandingStudents";
import {outstandingStudentsContext} from "../../store/store";
import {observer} from "mobx-react-lite";
import {useStyles} from "../../assets/styles/admin/ClubMemberItemStyles";

const OutstandingStudentsItemCard: React.FC<IOutstandinStudents> = observer(({ID, first_name, last_name, image, description}: IOutstandinStudents) => {
    const classes = useStyles();
    const outstandingStudents = React.useContext(outstandingStudentsContext);

    return (
        <div className={classes.root}>
            <Box className={classes.BoxFlex}>
                <Box className={classes.BoxFlexCenter}>
                    <Avatar src={image} alt={`${first_name} ${last_name}`} className={classes.avatar}/>
                    <Typography variant="h6">{first_name} {last_name}</Typography>
                </Box>
                <Box className={classes.BoxFlexCenter}>
                    <Tooltip title="حذف">
                        <IconButton onClick={() => outstandingStudents.openDeleteDialog()}>
                            <MdDeleteForever />
                        </IconButton>
                    </Tooltip>
                    <Tooltip title='تعديل'>
                        <IconButton onClick={() => outstandingStudents.openEditDialog()}>
                            <RiEdit2Fill />
                        </IconButton>
                    </Tooltip>
                </Box>
            </Box>

        </div>
    )
})

export default OutstandingStudentsItemCard
