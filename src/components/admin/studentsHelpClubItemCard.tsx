import React from 'react';
import {Box, Avatar, Typography, IconButton, Tooltip} from "@material-ui/core";
import {MdDeleteForever} from "react-icons/md";
import {RiEdit2Fill} from "react-icons/ri";
import {IStudent} from "../../interfaces/student";
import {studentsHelpclubContext, studentsHelpclubDialogsContext} from "../../store/store";
import {observer} from "mobx-react-lite";
import {useStyles} from "../../assets/styles/admin/ClubMemberItemStyles";

const StudentsHelpClubItemCard: React.FC<IStudent> = observer(({id, first_name, last_name, image, description}: IStudent) => {
    const classes = useStyles();
    const studentsHelpClub = React.useContext(studentsHelpclubContext);
    const studentsHelpClubDialogs = React.useContext(studentsHelpclubDialogsContext);
    
    return (
        <div className={classes.root}>
            <Box className={classes.BoxFlex}>
                <Box className={classes.BoxFlexCenter}>
                    <Avatar src={image} alt={`${first_name} ${last_name}`} className={classes.avatar}/>
                    <Typography variant="h6">{first_name} {last_name}</Typography>
                </Box>
                <Box className={classes.BoxFlexCenter}>
                    <Tooltip title="حذف">
                        <IconButton onClick={() => {
                            studentsHelpClub.studentHelpClubSelected = id;
                            studentsHelpClubDialogs.openDeleteDialog();
                            }}>
                            <MdDeleteForever />
                        </IconButton>
                    </Tooltip>
                    <Tooltip title='تعديل'>
                        <IconButton onClick={() => {
                            studentsHelpClub.studentHelpClubSelected = id;
                            studentsHelpClubDialogs.openEditDialog();
                            }}>
                            <RiEdit2Fill />
                        </IconButton>
                    </Tooltip>
                </Box>
            </Box>

        </div>
    )
})

export default StudentsHelpClubItemCard
