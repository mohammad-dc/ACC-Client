import React from 'react'
import NavBar from "../../components/NavBar/UserSideBar";
import {ThemeProvider } from '@material-ui/core/styles';
import {theme} from "../../constants/theme";

const UserLayout: React.FC = ({children}) => {
 
    return (
        <ThemeProvider theme={theme}>
            <NavBar>
                {children}
            </NavBar>
        </ThemeProvider>
    )
}

export default UserLayout
