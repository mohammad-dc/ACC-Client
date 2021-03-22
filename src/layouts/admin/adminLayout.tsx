import React from 'react'
import SideBar from "../../components/SideBar/SideBar";
import {ThemeProvider } from '@material-ui/core/styles';
import {theme} from "../../constants/theme";
import {clubMembersContext} from "../../store/store";

const AdminLayout: React.FC = ({children}) => {
    const clubMembers = React.useContext(clubMembersContext);
    
    React.useEffect(() =>{
        clubMembers.getAdminClubMembers();
    }, []);

    return (
        <ThemeProvider theme={theme}>
            <SideBar>
                {children}
            </SideBar>
        </ThemeProvider>
    )
}

export default AdminLayout
