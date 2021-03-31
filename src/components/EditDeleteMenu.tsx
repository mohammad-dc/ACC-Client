import React from 'react'
import {Menu, MenuItem, IconButton, Tooltip} from "@material-ui/core";
import {FiMoreVertical} from "react-icons/fi";
import {MdDelete} from "react-icons/md";
import {RiEdit2Fill} from "react-icons/ri";
import {coursesContext} from "../store/store";
import {observer} from "mobx-react-lite";

interface IdProps{
    id: number
};

const EditDeleteMenu: React.FC<IdProps> = observer(({id}: IdProps) => {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const courses = React.useContext(coursesContext);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
            <Tooltip title="المزيد">
                <IconButton aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                    <FiMoreVertical />
                </IconButton>
            </Tooltip>

            <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
            <MenuItem onClick={() => courses.openEditDialog(id)}><RiEdit2Fill /> تعديل</MenuItem>
            <MenuItem onClick={() => courses.openDeleteDialog(id)}><MdDelete /> حذف</MenuItem>
            </Menu>
        </div>
    )
})

export default EditDeleteMenu
