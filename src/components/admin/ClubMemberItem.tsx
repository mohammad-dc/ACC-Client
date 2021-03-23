import React from 'react'
import {Box, Avatar, Typography, IconButton, Tooltip} from "@material-ui/core";
import {MdDeleteForever} from "react-icons/md";
import {RiEdit2Fill} from "react-icons/ri";
import {IClubMember} from "../../interfaces/clubMember";
import {clubMembersContext} from "../../store/store";
import {observer} from "mobx-react-lite";
import {useStyles} from "../../assets/styles/admin/ClubMemberItemStyles";

const ClubMemberItem: React.FC<IClubMember> = observer(({first_name, last_name, rank, image, ID}: IClubMember) => {
    const classes = useStyles();
    const clubMembers = React.useContext(clubMembersContext);

    return (
        <div className={classes.root}>
            <Box className={classes.BoxFlex}>
                <Box className={classes.BoxFlexCenter}>
                    <Avatar src={`http://localhost:4000/uploads/${image.trim()}`} alt={`${first_name} ${last_name}`} className={classes.avatar}/>
                    <Box className={classes.BoxFlexBlock}>
                        <Typography variant="h6">{`${first_name} ${last_name}`}</Typography>
                        <Typography className={classes.rankText}>الرتبة: {rank}</Typography>
                    </Box>
                </Box>
                <Box className={classes.BoxFlexCenter}>
                    <Tooltip title="حذف">
                        <IconButton onClick={() => clubMembers.openDeleteDialog()}>
                            <MdDeleteForever />
                        </IconButton>
                    </Tooltip>
                    <Tooltip title='تعديل'>
                        <IconButton onClick={() => clubMembers.openEditDialog()}>
                            <RiEdit2Fill />
                        </IconButton>
                    </Tooltip>
                </Box>
            </Box>

        </div>
        
    )
})

export default ClubMemberItem
