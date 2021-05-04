import { makeAutoObservable } from "mobx";
import { IEducationalStaff } from "../interfaces/educationalStaff";
import { IResponse } from "../interfaces/response";
import API from "../api/utils/requests";

export class EducationalStaffStore {
  educationalStaffSelected: number = 0;
  educationalStaff: IEducationalStaff[] = [];
  isLoading: boolean = false;
  response: IResponse = { success: false, message: "" };

  constructor() {
    makeAutoObservable(this);
  }

  // admin
  getAdminEducationalStaff = (loading: boolean) => {
    this.isLoading = loading;
    API.GET("admin/educational-staff/get")
      .then((res) => {
        this.isLoading = false;
        this.educationalStaff = res.data.results;
      })
      .catch((error) => {
        this.isLoading = false;
        this.response = error.response.data;
      });
  };

  createEducationalStaff = (values: {}) => {
    API.POST("admin/educational-staff/create", values)
      .then((res) => {
        this.response = res.data;
        this.getAdminEducationalStaff(false);
      })
      .catch((error) => {
        this.response = error.response.data;
      });
  };

  deleteEducationalStaff = () => {
    API.DELETE(
      `admin/educational-staff/delete/${this.educationalStaffSelected}`
    )
      .then((res) => {
        this.response = res.data;
        this.getAdminEducationalStaff(false);
      })
      .catch((error) => {
        this.response = error.response.data;
      });
  };

  updateEducationalStaff = (values: {}) => {
    API.PUT(
      `admin/educational-staff/update/${this.educationalStaffSelected}`,
      values
    )
      .then((res) => {
        this.response = res.data;
        this.getAdminEducationalStaff(false);
      })
      .catch((error) => {
        this.response = error.response.data;
      });
  };

  //user
  getEducationalStaff = () => {
    this.isLoading = true;
    API.getNoToken("educational-staff/get")
      .then((res) => {
        this.isLoading = false;
        this.educationalStaff = res.data.results;
      })
      .catch((error) => {
        this.isLoading = false;
        this.response = error.response.data;
      });
  };
}
