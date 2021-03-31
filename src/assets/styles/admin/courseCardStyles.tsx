import {makeStyles, createStyles, Theme} from "@material-ui/core/styles";
import * as Color from "../../../constants/colors";
import CourseImg from "../../images/course.jfif";

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
        root: {
            border: `0.5px solid ${Color.blackColor}`,
            borderRadius: '5px'
        },
        imageSide: {
            background: `linear-gradient(${colors[Math.floor(Math.random() * colors.length)]}, ${colors[Math.floor(Math.random() * colors.length)]}), url(${CourseImg})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no=repeat',
            backgroundPosition: 'center',
            height: '150px'
        },
        flexBox: {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
        },
        infoSide: {
            padding: "10px 5px"
        },
        tags: {
            marginTop: '10px',
            textAlign: 'left'
        },
        chip: {
            margin: '5px',
            cursor: 'pointer'
        }
    })
);