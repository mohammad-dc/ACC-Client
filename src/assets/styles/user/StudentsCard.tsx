import {makeStyles, createStyles, Theme} from "@material-ui/core/styles";
import * as Color from "../../../constants/colors";

export const useStyles = makeStyles((theme: Theme) => 
    createStyles({
        root: {
            border: '1px solid transparent',
            borderRadius: '10px',
            padding: '30px 50px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            width: 'fit-content',
            '&:hover': {
                borderColor: Color.grayColor
            }
        },
        image: {
            width: theme.spacing(15),
            height: theme.spacing(15),
            marginBottom: '5px'
        },
        btn: {
            border: `0.5px solid ${Color.grayColor}`,
            borderRadius: '5px',
            color: Color.grayColor,
            marginTop: '5px'
        }
    })
)