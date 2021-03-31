import React from 'react'
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import {themeContext} from "../store/store";

const UserTheme: React.FC = ({children}) => {
    const theme = React.useContext(themeContext);
    const usertheme = createMuiTheme({
        palette: {
            type: theme.theme === 'light'? 'light' : 'dark',
        }
    });

    return (
        <MuiThemeProvider theme={usertheme}>
            {children}
        </MuiThemeProvider>
    )
}

export default UserTheme
