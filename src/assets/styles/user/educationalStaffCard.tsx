import {makeStyles, createStyles, Theme} from "@material-ui/core/styles";
import * as Color from "../../../constants/colors";
import EducationalStaffBG from "../../images/educationalStaff.jfif";

let colors: string[] = [
    Color.gradient1,
    Color.gradient2,
    Color.gradient3,
    Color.gradient4,
    Color.gradient5,
    Color.gradient6,
    Color.gradient7,
    Color.gradient8
]

export const useStyles = makeStyles((theme: Theme) => 
    createStyles({
        icon:{
            fontSize: '20px',
            color: Color.grayColor
        },
        root: {
            border: `1px solid ${Color.grayColor}`,
            transitionDuration: '.3s',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '20px 50px',
            borderRadius: '10px',
            width: 'fit-content',
            margin: '10px auto',
            '&:hover': {
                borderColor: 'transparent',
                boxShadow: '1px 1px 10px rgb(0,0,0,0.5)',
                background: `linear-gradient(${colors[Math.floor(Math.random() * colors.length)]}, ${colors[Math.floor(Math.random() * colors.length)]}), url(${EducationalStaffBG})`,
                backgroundPosition: 'center',
                color: Color.wightColor
            },
            '&:hover $icon': {
                color: Color.wightColor
            }
        }
    })
);