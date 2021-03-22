import {makeAutoObservable, action} from "mobx";
import API from "../api/utils/requests";
import {IClubMember} from "../interfaces/clubMember";
import {IResponse} from "../interfaces/response";

export class ClubMemberStore {
    isAddDialogOpen: boolean = false;
    isEditDialogOpen: boolean = false;
    isDeleteDialogOpen: boolean = false;

    clubMember: IClubMember[] = [];
    isLoading: boolean = false;
    response: IResponse = {success: false, message: ''};

    constructor(){
        makeAutoObservable(this);
    }

    openAddDialog = () =>{
        this.isAddDialogOpen = true;
    }

    closeAddDialog = () =>{
        this.isAddDialogOpen = false;
    }

    openEditDialog = () =>{
        this.isEditDialogOpen = true;
    }

    closeEditDialog = () =>{
        this.isEditDialogOpen = false;
    }

    openDeleteDialog = () =>{
        this.isDeleteDialogOpen = true;
    }

    closeDeleteDialog = () =>{
        this.isDeleteDialogOpen = false;
    }

    // admin
    @action getAdminClubMembers = () =>{
        this.isLoading = true;
        API.GET('admin/club-members/get')
            .then(res => {
                this.isLoading = false;
                this.clubMember = res.data.results
            })
            .catch(error =>{
                this.isLoading = false;
                this.response = error.response.data;
            });
    }

    @action createAdminClubMembers = (values: {}) =>{
        this.isLoading = true;
        API.POST('admin/club-members/create', values)
            .then(res => {
                this.isLoading = false;
                this.response = res.data;
            })
            .catch(error =>{
                this.isLoading = false;
                this.response = error.response.data;
            });
    }
    //user
}