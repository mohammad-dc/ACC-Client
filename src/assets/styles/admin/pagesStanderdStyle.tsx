import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import * as Color from "../../../constants/colors";

export const useStyles = makeStyles((theme: Theme) => 
    createStyles({
        root: {
            padding: '10px 20px',
            backgroundColor: Color.wightColor,
            position: 'relative',
            height: '100vh'
        },
        BoxFlex: {
           display: 'flex',
           justifyContent: 'space-between',
           alignItems: 'center'
        },
        floatBtn: {
            background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
            color: Color.wightColor
        },
        floatBtnIcon: {
            fontSize: '20px'
        },
        membersBox: {
            margin: '30px 0'
        }
    })
)
