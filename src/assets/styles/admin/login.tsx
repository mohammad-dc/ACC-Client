import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import * as Color from "../../../constants/colors";

export const useStyles = makeStyles((theme: Theme) => 
    createStyles({
        root: {
            textAlign:'right',
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)'
        },
        headLine: {
            textAlign: 'center',
            marginBottom: '20px'
        },
        Button: {
            width: '100%',
            color: Color.wightColor,
           background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
           margin: '30px 0',
        },
        backdrop: {
            zIndex: theme.zIndex.drawer + 1,
            color: '#fff',
        },
    })
);