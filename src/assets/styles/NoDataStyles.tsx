import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import * as Color from "../../constants/colors";

export const useStyles = makeStyles((theme: Theme) => 
    createStyles({
        root: {
            minHeight: '400px',
            height: '100%',
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
