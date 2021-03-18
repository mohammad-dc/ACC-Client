import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import * as Color from "../../constants/colors";

export const useStyles = makeStyles((theme: Theme) => 
    createStyles({
        root: {
            height: '100vh',
            backgroundColor: Color.wightColor,
            position: 'relative',
        },
        Box: {
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)'
        }
        
    })
)
