import { makeAutoObservable } from "mobx";
import { ICourse } from "../interfaces/course";
import { IResponse } from "../interfaces/response";
import API from "../api/utils/requests";

export class CourseStore {
  courseSelected: number = 0;
  courses: ICourse[] = [];
  isLoading: boolean = true;
  response: IResponse = { success: false, message: "" };

  constructor() {
    makeAutoObservable(this);
  }

  // admin
  getAdminCourses = (loading: boolean) => {
    this.isLoading = loading;
    API.GET("admin/courses/get")
      .then((res) => {
        this.isLoading = false;
        this.courses = res.data.results;
      })
      .catch((error) => {
        this.isLoading = false;
        this.response = error.response.data;
      });
  };

  createAdminCourse = (values: {}) => {
    this.isLoading = true;
    API.POST("admin/courses/create", values)
      .then((res) => {
        this.isLoading = false;
        this.response = res.data;
        this.getAdminCourses(false);
      })
      .catch((error) => {
        this.isLoading = false;
        this.response = error.response.data;
      });
  };

  deleteAdminCourse = () => {
    this.isLoading = true;
    API.DELETE(`admin/courses/delete/${this.courseSelected}`)
      .then((res) => {
        this.isLoading = false;
        this.response = res.data;
        this.getAdminCourses(false);
      })
      .catch((error) => {
        this.isLoading = false;
        this.response = error.response.data;
      });
  };

  updateAdminCourse = (values: {}) => {
    this.isLoading = true;
    API.PUT(`admin/courses/update/${this.courseSelected}`, values)
      .then((res) => {
        this.isLoading = false;
        this.response = res.data;
        this.getAdminCourses(false);
      })
      .catch((error) => {
        this.isLoading = false;
        this.response = error.response.data;
      });
  };

  //video
  createAdminVideo = (values: {}) => {
    this.isLoading = true;
    API.POST(`admin/videos/create`, values)
      .then((res) => {
        this.isLoading = false;
        this.response = res.data;
        this.getAdminCourses(false);
      })
      .catch((error) => {
        this.isLoading = false;
        this.response = error.response.data;
      });
  };
  updateAdminVideo = (ID: number, values: {}) => {
    this.isLoading = true;
    API.PUT(`admin/videos/update/${ID}`, values)
      .then((res) => {
        this.isLoading = false;
        this.response = res.data;
        this.getAdminCourses(false);
      })
      .catch((error) => {
        this.isLoading = false;
        this.response = error.response.data;
      });
  };

  deleteAdminVideo = (ID: number) => {
    this.isLoading = true;
    API.DELETE(`admin/videos/delete/${ID}`)
      .then((res) => {
        this.isLoading = false;
        this.response = res.data;
        this.getAdminCourses(false);
      })
      .catch((error) => {
        this.isLoading = false;
        this.response = error.response.data;
      });
  };

  //user
  getCourses = () => {
    this.isLoading = true;
    API.getNoToken("courses/get")
      .then((res) => {
        this.isLoading = false;
        this.courses = res.data.results;
      })
      .catch((error) => {
        this.isLoading = false;
        this.response = error.response.data;
      });
  };
}
