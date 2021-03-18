import React from 'react'
import SideBar from "../../components/SideBar/SideBar";
import {ThemeProvider } from '@material-ui/core/styles';
import {theme} from "../../constants/theme";

const AdminLayout: React.FC = ({children}) => {
 
    return (
        <ThemeProvider theme={theme}>
            <SideBar>
                {children}
            </SideBar>
        </ThemeProvider>
    )
}

export default AdminLayout
