import { makeAutoObservable } from "mobx";
import API from "../api/utils/requests";
import { IClubMember } from "../interfaces/clubMember";
import { IResponse } from "../interfaces/response";

export class ClubMemberStore {
  clubMemberSelected: number = 0;

  clubMember: IClubMember[] = [];
  clubMemberClient: IClubMember[] = [];
  isLoading: boolean = true;
  response: IResponse = { success: false, message: "" };

  constructor() {
    makeAutoObservable(this);
  }

  // admin
  getAdminClubMembers = (loading: boolean) => {
    this.isLoading = loading;
    API.GET("admin/club-members/get")
      .then(async (res) => {
        this.isLoading = false;
        this.clubMember = await res.data.results;
      })
      .catch(async (error) => {
        this.isLoading = false;
        this.response = await error.response.data;
      });
  };

  createAdminClubMembers = (values: {}) => {
    API.POST("admin/club-members/create", values)
      .then(async (res) => {
        this.response = await res.data;
        this.getAdminClubMembers(false);
      })
      .catch(async (error) => {
        this.response = await error.response.data;
      });
  };

  deleteAdminClubMember = () => {
    API.DELETE(`admin/club-members/delete/${this.clubMemberSelected}`)
      .then((res) => {
        this.response = res.data;
        this.getAdminClubMembers(false);
      })
      .catch((error) => {
        this.response = error.response.data;
      });
  };

  updateAdminClubMember = (values: {}) => {
    API.PUT(`admin/club-members/update/${this.clubMemberSelected}`, values)
      .then((res) => {
        this.response = res.data;
        this.getAdminClubMembers(false);
      })
      .catch((error) => {
        this.response = error.response.data;
      });
  };
  //user
  getClubMembers = () => {
    API.getNoToken("club-members/get")
      .then((res) => {
        this.clubMemberClient = res.data.results;
      })
      .catch((error) => {
        this.response = error.response.data;
      });
  };
}
