import {makeStyles, createStyles, Theme} from "@material-ui/core/styles";
import * as Color from "../../../constants/colors";
import ClubMemberBG from "../../images/member.jfif";

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
                boxShadow: '1px 1px 10px rgb(0,0,0,0.5)',
                background: `linear-gradient(${colors[Math.floor(Math.random() * colors.length)]}, ${colors[Math.floor(Math.random() * colors.length)]}), url(${ClubMemberBG})`,
                backgroundPosition: 'bottom',
                color: Color.wightColor
            }
        }
    })
);