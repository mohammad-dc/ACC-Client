import { makeAutoObservable } from "mobx";
import { IStudent } from "../interfaces/student";
import { IResponse } from "../interfaces/response";
import API from "../api/utils/requests";

export class StudentHelpClubStore {
  studentHelpClubSelected: number = 0;
  studentHelpClub: IStudent[] = [];
  isLoading: boolean = false;
  response: IResponse = { success: false, message: "" };

  constructor() {
    makeAutoObservable(this);
  }

  // admin
  getAdminStudentHelpClub = (loading: boolean) => {
    this.isLoading = loading;
    API.GET("admin/students-help-club/get")
      .then((res) => {
        this.isLoading = false;
        this.studentHelpClub = res.data.results;
      })
      .catch((error) => {
        this.isLoading = false;
        this.response = error.response.data;
      });
  };

  createAdminStudentHelpClub = (values: {}) => {
    API.POST("admin/students-help-club/create", values)
      .then((res) => {
        this.response = res.data;
        this.getAdminStudentHelpClub(false);
      })
      .catch((error) => {
        this.response = error.response.data;
      });
  };

  deleteAdminStudentHelpClub = () => {
    API.DELETE(
      `admin/students-help-club/delete/${this.studentHelpClubSelected}`
    )
      .then((res) => {
        this.response = res.data;
        this.getAdminStudentHelpClub(false);
      })
      .catch((error) => {
        this.response = error.response.data;
      });
  };

  updateAdminStudentHelpClub = (values: {}) => {
    API.PUT(
      `admin/students-help-club/update/${this.studentHelpClubSelected}`,
      values
    )
      .then((res) => {
        this.response = res.data;
        this.getAdminStudentHelpClub(false);
      })
      .catch((error) => {
        this.response = error.response.data;
      });
  };

  //user
  getStudentHelpClub = () => {
    this.isLoading = true;
    API.getNoToken("students-help-club/get")
      .then((res) => {
        this.isLoading = false;
        this.studentHelpClub = res.data.results;
      })
      .catch((error) => {
        this.isLoading = false;
        this.response = error.response.data;
      });
  };
}
