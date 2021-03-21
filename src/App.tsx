import React from 'react';
import {BrowserRouter as Router, Route, Switch}  from "react-router-dom";
import { create } from 'jss';
import rtl from 'jss-rtl';
import { StylesProvider, jssPreset } from '@material-ui/core/styles';
import './App.css';
// Admin pages
import DashboardNews from "./pages/admin/DashboardNews";
import DashboardClubMembers from "./pages/admin/DashboardClubMembers";
import DashboardCuorses from "./pages/admin/DashboardCuorses";
import DashboardEducationalStaff from "./pages/admin/DashboardEducationalStaff";
import DashboardOutstandingStudents from "./pages/admin/DashboardOutstandingStudents";
import DashboardStudentsHelpClub from "./pages/admin/DashboardStudentsHelpClub";
import Login from "./pages/admin/login";

// User pages
import Home from "./pages/user/Home";

import NotFound from "./pages/NotFound";
// Configure JSS
const jss = create({ plugins: [...jssPreset().plugins, rtl()] });

const App = () =>{
  return (
    <StylesProvider  jss={jss}>
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/admin/dashboard/members" component={DashboardClubMembers} />
            <Route exact path="/admin/dashboard/courses" component={DashboardCuorses} />
            <Route exact path="/admin/dashboard/educational_staff" component={DashboardEducationalStaff} />
            <Route exact path="/admin/dashboard/news" component={DashboardNews} />
            <Route exact path="/admin/dashboard/outstanding_students" component={DashboardOutstandingStudents} />
            <Route exact path="/admin/dashboard/students_helper" component={DashboardStudentsHelpClub} />
            <Route exact path="/admin/auth/login" component={Login}/>
            <Route exact path="/" component={Home} />
            <Route exact path="/home" component={Home} />
            <Route exact path="*" component={NotFound} />
          </Switch>
        </Router>
      </div>
    </StylesProvider>
  );
}

export default App;
