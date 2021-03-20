import React from 'react';
import {Box, Avatar, Typography, IconButton, Tooltip} from "@material-ui/core";
import {MdDeleteForever} from "react-icons/md";
import {RiEdit2Fill} from "react-icons/ri";
import {IStudentsHelpClub} from "../../interfaces/studentsHelpClub";
import {studentsHelpclubContext} from "../../store/store";
import {observer} from "mobx-react-lite";
import {useStyles} from "../../assets/styles/admin/ClubMemberItemStyles";

const StudentsHelpClubItemCard: React.FC<IStudentsHelpClub> = observer(({ID, first_name, last_name, image, description}: IStudentsHelpClub) => {
    const classes = useStyles();
    const studentsHelpClub = React.useContext(studentsHelpclubContext);

    return (
        <div className={classes.root}>
            <Box className={classes.BoxFlex}>
                <Box className={classes.BoxFlexCenter}>
                    <Avatar src={image} alt={`${first_name} ${last_name}`} className={classes.avatar}/>
                    <Typography variant="h6">{first_name} {last_name}</Typography>
                </Box>
                <Box className={classes.BoxFlexCenter}>
                    <Tooltip title="حذف">
                        <IconButton onClick={() => studentsHelpClub.openDeleteDialog()}>
                            <MdDeleteForever />
                        </IconButton>
                    </Tooltip>
                    <Tooltip title='تعديل'>
                        <IconButton onClick={() => studentsHelpClub.openEditDialog()}>
                            <RiEdit2Fill />
                        </IconButton>
                    </Tooltip>
                </Box>
            </Box>

        </div>
    )
})

export default StudentsHelpClubItemCard
