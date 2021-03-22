import React from "react";

import {AdminStore} from "./admin";
import {ClubMemberStore} from "./clubMember";
import {CourseStore} from "./course";
import {EducationalStaffStore} from "./educationalStaff";
import {NewsStore} from "./news";
import {OutstandingStudentStore} from "./outstandingStudent";
import {StudentHelpClubStore} from "./studentHelpClub";
import {ThemeStore} from "./theme";

export const adminContext = React.createContext(new AdminStore());

export const clubMembersContext = React.createContext(new ClubMemberStore());

export const coursesContext = React.createContext(new CourseStore());

export const educationalStaffContext = React.createContext(new EducationalStaffStore());

export const newsContext = React.createContext(new NewsStore());

export const outstandingStudentsContext = React.createContext(new OutstandingStudentStore());

export const studentsHelpclubContext = React.createContext(new StudentHelpClubStore());

export const themeContext = React.createContext(new ThemeStore());
