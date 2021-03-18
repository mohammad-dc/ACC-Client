import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import * as Color from "../../constants/colors";

export const useStyles = makeStyles((theme: Theme) => 
    createStyles({
        root: {
            height: '100vh',
            backgroundColor: Color.blackColorBG,
            position: 'relative',
            color: Color.wightColor,
        },
        BoxRoot: {
            width: '50%',
            position: 'absolute',
            bottom: 0,
            left: '50%',
            transform: 'translateX(-50%)',
        },
        BoxFlex: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        },
         BoxText: {
            margin: '10px 0',
            width: '100%',
            '& *': {
                margin: '15px 0'
            }
        },
        logo: {
            width: '40%'
        },
        img: {
            width: '100%',
            height: '100%'
        },
        goHome: {
           textDecoration: 'underline',
           color: Color.wightColor
        }
    })
)
