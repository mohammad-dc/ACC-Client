import { createStyles, makeStyles, useTheme, Theme } from '@material-ui/core/styles';
import * as Color from "../../constants/colors";

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
        position: 'relative',
        padding: '10px',
        backgroundColor: '#eee',
    },
    headLine: {
        margin: '30px 0'
    },
    flex: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    Avatar: {
        width: theme.spacing(15),
        height: theme.spacing(15),
        border: '1px solid #000',
        borderRadius: '50%'
    },
    icon: {
        fontSize: '25px',
        color: Color.grayColor
    },
    title: {
        margin: '10px 0'
    },
    allSavedTextBox: {
        marginTop: '40px'
    }
  }),
);