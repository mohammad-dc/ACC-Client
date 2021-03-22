import {makeStyles, createStyles, Theme} from "@material-ui/core/styles";
import * as Color from "../../../constants/colors";


export const useStyles = makeStyles((theme: Theme) => 
    createStyles({
        root: {
            padding: '10px 20px',
        },
        image: {
            width:'50%',
            height: '100%'
        },
        typographyGrid: {
           display: 'flex',
           justifyContent: 'center',
           alignItems: 'center',
        }
    })
);