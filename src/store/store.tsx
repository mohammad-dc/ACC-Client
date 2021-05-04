import React from "react";

import {AdminStore} from "./admin";
import {ClubMemberStore} from "./clubMember";
import {CourseStore} from "./course";
import {EducationalStaffStore} from "./educationalStaff";
import {NewsStore} from "./news";
import {OutstandingStudentStore} from "./outstandingStudent";
import {StudentHelpClubStore} from "./studentHelpClub";
import {DialogStore} from "./dialogs";
import {ThemeStore} from "./theme";

export const adminContext = React.createContext(new AdminStore());
export const clubMembersContext = React.createContext(new ClubMemberStore());
export const coursesContext = React.createContext(new CourseStore());
export const educationalStaffContext = React.createContext(new EducationalStaffStore());
export const newsContext = React.createContext(new NewsStore());
export const outstandingStudentsContext = React.createContext(new OutstandingStudentStore());
export const studentsHelpclubContext = React.createContext(new StudentHelpClubStore());
export const themeContext = React.createContext(new ThemeStore());

// dialogs
export const clubMembersDialogsContext = React.createContext(new DialogStore());
export const coursesDialogsContext = React.createContext(new DialogStore());
export const educationalStaffDialogsContext = React.createContext(new DialogStore());
export const newsDialogsContext = React.createContext(new DialogStore());
export const outstandingStudentsDialogsContext = React.createContext(new DialogStore());
export const studentsHelpclubDialogsContext = React.createContext(new DialogStore());
