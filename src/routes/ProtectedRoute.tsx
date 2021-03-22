import React from 'react'
import {Route, Redirect, RouteComponentProps} from "react-router-dom";
import { observer } from "mobx-react-lite";
import { adminContext } from "../store/store";

interface IProtectdRouteAdminProps {
    Component: React.FC<RouteComponentProps>;
    path: string;
    exact?: boolean;
}
const ProtectedRoute = observer(({ Component, path, exact}: IProtectdRouteAdminProps) => {
    const admin = React.useContext(adminContext);
    return (
        <Route
            exact={exact}
            path={path}
            render={(props: RouteComponentProps) => {
                return (
                    admin.isLogin
                        ? <Component {...props} />
                        : <Redirect to="/admin/auth/login" />
                );
            }} />
    )
})

export default ProtectedRoute;
