import { createMuiTheme } from '@material-ui/core/styles';

export const theme = createMuiTheme({
        palette:{
            type: 'light',
            background: {
                default: '#fff'
            }
        },
        direction: 'rtl',
        typography: {
            fontFamily: "'Tajawal', sans-serif"
        }
    });