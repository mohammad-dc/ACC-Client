import {makeAutoObservable} from "mobx";
import API from "../api/utils/requests";
import {IClubMember} from "../interfaces/clubMember";
import {IResponse} from "../interfaces/response";

export class ClubMemberStore {
    isAddDialogOpen: boolean = false;
    isEditDialogOpen: boolean = false;
    isDeleteDialogOpen: boolean = false;
    clubMemberSelected: number = 0;

    clubMember: IClubMember[] = [];
    clubMemberClient: IClubMember[] = [];
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

    openEditDialog = (ID: number) =>{
        this.isEditDialogOpen = true;
        this.clubMemberSelected = ID;
    }

    closeEditDialog = () =>{
        this.isEditDialogOpen = false;
    }

    openDeleteDialog = (ID: number) =>{
        this.isDeleteDialogOpen = true;
        this.clubMemberSelected = ID;
    }

    closeDeleteDialog = () =>{
        this.isDeleteDialogOpen = false;
    }

    // admin
    getAdminClubMembers = () =>{
        this.isLoading = true;
        API.GET('admin/club-members/get')
            .then(async res => {
                this.isLoading = false;
                this.clubMember = await res.data.results;
            })
            .catch(async error =>{
                this.isLoading = false;
                this.response = await error.response.data;
            });
    }

    createAdminClubMembers = (values: {}) =>{
        this.isLoading = true;
        API.POST('admin/club-members/create', values)
            .then(async res => {
                this.isLoading = false;
                this.response = await res.data;
            })
            .catch(async error =>{
                this.isLoading = false;
                this.response = await error.response.data;
            });
    }

    deleteAdminClubMember = () => {
        this.isLoading = true;
        API.DELETE(`admin/club-members/delete/${this.clubMemberSelected}`)
            .then(res => {
                this.isLoading = false;
                this.response = res.data;
            })
            .catch(error =>{
                this.isLoading = false;
                this.response = error.response.data;
            });
    }

    updateAdminClubMember = (values: {}) => {
        this.isLoading = true;
        API.PUT(`admin/club-members/update/${this.clubMemberSelected}`, values)
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
    getClubMembers = () =>{
        this.isLoading = true;
        API.getNoToken('club-members/get')
            .then(res => {
                this.isLoading = false;
                this.clubMemberClient = res.data.results
            })
            .catch(error =>{
                this.isLoading = false;
                this.response = error.response.data;
            });
    }
}