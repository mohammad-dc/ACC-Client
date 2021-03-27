import {makeAutoObservable} from "mobx";
import {IEducationalStaff} from "../interfaces/educationalStaff";
import {IResponse} from "../interfaces/response";
import API from "../api/utils/requests";

export class EducationalStaffStore {
    isAddDialogOpen: boolean = false;
    isEditDialogOpen: boolean = false;
    isDeleteDialogOpen: boolean = false;

    educationalStaffSelected: number = 0;
    educationalStaff: IEducationalStaff[] = [];
    educationalStaffClient: IEducationalStaff[] = [];
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
        this.educationalStaffSelected = ID;
    }

    closeEditDialog = () =>{
        this.isEditDialogOpen = false;
    }

    openDeleteDialog = (ID: number) =>{
        this.isDeleteDialogOpen = true;
        this.educationalStaffSelected = ID;
    }

    closeDeleteDialog = () =>{
        this.isDeleteDialogOpen = false;
    }

     // admin
    getAdminEducationalStaff = () =>{
        this.isLoading = true;
        API.GET('admin/educational-staff/get')
            .then(res => {
                this.isLoading = false;
                this.educationalStaff = res.data.results
            })
            .catch(error =>{
                this.isLoading = false;
                this.response = error.response.data;
            });
    }

    createEducationalStaff = (values: {}) =>{
        this.isLoading = true;
        API.POST('admin/educational-staff/create', values)
            .then(res => {
                this.isLoading = false;
                this.response = res.data;
            })
            .catch(error =>{
                this.isLoading = false;
                this.response = error.response.data;
            });
    }

    deleteEducationalStaff = () => {
        this.isLoading = true;
        API.DELETE(`admin/educational-staff/delete/${this.educationalStaffSelected}`)
            .then(res => {
                this.isLoading = false;
                this.response = res.data;
            })
            .catch(error =>{
                this.isLoading = false;
                this.response = error.response.data;
            });
    }

    updateEducationalStaff = (values: {}) => {
        this.isLoading = true;
        API.PUT(`admin/educational-staff/update/${this.educationalStaffSelected}`, values)
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
    getEducationalStaff = () =>{
        this.isLoading = true;
        API.getNoToken('educational-staff/get')
            .then(res => {
                this.isLoading = false;
                this.educationalStaffClient = res.data.results
            })
            .catch(error =>{
                this.isLoading = false;
                this.response = error.response.data;
            });
    }
}