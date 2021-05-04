import { makeAutoObservable } from "mobx";
import { IOutstandinStudents } from "../interfaces/outstandingStudents";
import { IResponse } from "../interfaces/response";
import API from "../api/utils/requests";

export class OutstandingStudentStore {
  outstandingStudentSelected: number = 0;
  outstandingStudents: IOutstandinStudents[] = [];
  isLoading: boolean = false;
  response: IResponse = { success: false, message: "" };

  constructor() {
    makeAutoObservable(this);
  }

  // admin
  getAdminOutstandingStudent = (loading: boolean) => {
    this.isLoading = loading;
    API.GET("admin/outstanding-students/get")
      .then((res) => {
        this.isLoading = false;
        this.outstandingStudents = res.data.results;
      })
      .catch((error) => {
        this.isLoading = false;
        this.response = error.response.data;
      });
  };

  createAdminOutstandingStudent = (values: {}) => {
    API.POST("admin/outstanding-students/create", values)
      .then((res) => {
        this.response = res.data;
        this.getAdminOutstandingStudent(false);
      })
      .catch((error) => {
        this.response = error.response.data;
      });
  };

  deleteAdminOutstandingStudent = () => {
    API.DELETE(
      `admin/outstanding-students/delete/${this.outstandingStudentSelected}`
    )
      .then((res) => {
        this.response = res.data;
        this.getAdminOutstandingStudent(false);
      })
      .catch((error) => {
        this.response = error.response.data;
      });
  };

  updateAdminOutstandingStudent = (values: {}) => {
    API.PUT(
      `admin/outstanding-students/update/${this.outstandingStudentSelected}`,
      values
    )
      .then((res) => {
        this.response = res.data;
        this.getAdminOutstandingStudent(false);
      })
      .catch((error) => {
        this.response = error.response.data;
      });
  };

  //user
  getOutstandingStudent = () => {
    this.isLoading = true;
    API.getNoToken("outstanding-students/get")
      .then((res) => {
        this.isLoading = false;
        this.outstandingStudents = res.data.results;
      })
      .catch((error) => {
        this.isLoading = false;
        this.response = error.response.data;
      });
  };
}
