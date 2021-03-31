import React from 'react';
import {BrowserRouter as Router, Route, Switch}  from "react-router-dom";
import { create } from 'jss';
import rtl from 'jss-rtl';
import { StylesProvider, jssPreset } from '@material-ui/core/styles';
import ProtectedRoute from "./routes/ProtectedRoute";
import './App.css';
// store context
import {
  clubMembersContext,
  newsContext,
  educationalStaffContext,
  outstandingStudentsContext,
  studentsHelpclubContext
 } from "./store/store";

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
import About from "./pages/user/About";
import Courses from "./pages/user/Courses";
import EducationalStaff from "./pages/user/EducationalStaff";
import OutstandingStudents from "./pages/user/OutstandingStudents";
import StudentsHelpClub from "./pages/user/StudentsHelpClub";

// not Found Page
import NotFound from "./pages/NotFound";

// Configure JSS
const jss = create({ plugins: [...jssPreset().plugins, rtl()] });

const App = () =>{
  const clubMembers = React.useContext(clubMembersContext);
  const news = React.useContext(newsContext);
  const educationalStaff = React.useContext(educationalStaffContext);
  const outstandingStudents = React.useContext(outstandingStudentsContext);
  const studentsHelpclub = React.useContext(studentsHelpclubContext);

  clubMembers.getClubMembers();
  news.getNews();
  educationalStaff.getEducationalStaff();
  outstandingStudents.getOutstandingStudent();
  studentsHelpclub.getStudentHelpClub();
  
  return (
    <StylesProvider  jss={jss}>
      <div className="App">
        <Router>
          <Switch>
            <ProtectedRoute exact path="/admin/dashboard/members" Component={DashboardClubMembers} />
            <ProtectedRoute exact path="/admin/dashboard/courses" Component={DashboardCuorses} />
            <ProtectedRoute exact path="/admin/dashboard/educational_staff" Component={DashboardEducationalStaff} />
            <ProtectedRoute exact path="/admin/dashboard/news" Component={DashboardNews} />
            <ProtectedRoute exact path="/admin/dashboard/outstanding_students" Component={DashboardOutstandingStudents} />
            <ProtectedRoute exact path="/admin/dashboard/students_helper" Component={DashboardStudentsHelpClub} />
            <Route exact path="/admin/auth/login" component={Login}/>
            <Route exact path="/" component={Home} />
            <Route exact path="/home" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/courses" component={Courses} />
            <Route exact path="/educational_staff" component={EducationalStaff} />
            <Route exact path="/outstanding_students" component={OutstandingStudents} />
            <Route exact path="/students_helper" component={StudentsHelpClub} />
            <Route exact path="*" component={NotFound} />
          </Switch>
        </Router>
      </div>
    </StylesProvider>
  );
}

export default App;
