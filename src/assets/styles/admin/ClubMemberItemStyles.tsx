import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import * as Color from "../../../constants/colors";

export const useStyles = makeStyles((theme: Theme) => 
    createStyles({
        root: {
            padding: '10px 20px',
            border: `2px solid ${Color.grayLightColor}`,
            borderRadius: '50px'
        },
        BoxFlex: {
           display: 'flex',
           justifyContent: 'space-between',
           alignItems: 'center'
        },
        BoxFlexCenter: {
            display: 'flex',
           justifyContent: 'center',
           alignItems: 'center'
        },
         BoxFlexBlock: {
            display: 'flex',
            flexDirection: 'column',
           alignItems: 'right'
        },
        avatar:{
            width: theme.spacing(7),
            height: theme.spacing(7),
        },
        rankText: {
            color: Color.grayColor,
            fontSize: '14px'
        },
        floatBtn: {
            background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
            color: Color.wightColor
        },
        floatBtnIcon: {
            fontSize: '20px'
        }
        
    })
)
