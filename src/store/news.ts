import { makeAutoObservable } from "mobx";
import { INew } from "../interfaces/news";
import { IResponse } from "../interfaces/response";
import API from "../api/utils/requests";

export class NewsStore {
  newsSelected: number = 0;
  news: INew[] = [];
  isLoading: boolean = false;
  response: IResponse = { success: false, message: "" };

  constructor() {
    makeAutoObservable(this);
  }

  // admin
  getAdminNews = (loading: boolean) => {
    this.isLoading = loading;
    API.GET("admin/news/get")
      .then((res) => {
        this.news = res.data.results;
        this.isLoading = false;
      })
      .catch((error) => {
        this.isLoading = false;
        this.response = error.response.data;
      });
  };

  createAdminNews = (values: {}) => {
    API.POST("admin/news/create", values)
      .then((res) => {
        this.response = res.data;
        this.getAdminNews(false);
      })
      .catch((error) => {
        this.response = error.response.data;
      });
  };

  deleteAdminNew = () => {
    API.DELETE(`admin/news/delete/${this.newsSelected}`)
      .then((res) => {
        this.response = res.data;
        this.getAdminNews(false);
      })
      .catch((error) => {
        this.response = error.response.data;
      });
  };

  updateAdminNews = (values: {}) => {
    API.PUT(`admin/news/update/${this.newsSelected}`, values)
      .then((res) => {
        this.response = res.data;
        this.getAdminNews(false);
      })
      .catch((error) => {
        this.response = error.response.data;
      });
  };
  //user
  getNews = () => {
    API.getNoToken("news/get")
      .then((res) => {
        this.news = res.data.results;
      })
      .catch((error) => {
        this.response = error.response.data;
      });
  };
}
