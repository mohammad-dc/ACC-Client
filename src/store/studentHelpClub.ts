import {makeAutoObservable} from "mobx";
import {IStudent} from "../interfaces/student";
import {IResponse} from "../interfaces/response";
import API from "../api/utils/requests";

export class StudentHelpClubStore {
    isAddDialogOpen: boolean = false;
    isEditDialogOpen: boolean = false;
    isDeleteDialogOpen: boolean = false;
    isViewDialogOpen: boolean = false;

    studentHelpClubSelected: number = 0;
    studentHelpClub: IStudent[] = [];
    studentHelpClubClient: IStudent[] = [];
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
        this.studentHelpClubSelected = ID;
    }

    closeEditDialog = () =>{
        this.isEditDialogOpen = false;
    }

    openDeleteDialog = (ID: number) =>{
        this.isDeleteDialogOpen = true;
        this.studentHelpClubSelected = ID;
    }

    closeDeleteDialog = () =>{
        this.isDeleteDialogOpen = false;
    }

    openViewDialog = (ID: number) =>{
        this.isViewDialogOpen = true;
        this.studentHelpClubSelected = ID;
    }

    closeViewDialog = () =>{
        this.isViewDialogOpen = false;
    }

    // admin
    getAdminStudentHelpClub = () =>{
        this.isLoading = true;
        API.GET('admin/students-help-club/get')
            .then(res => {
                this.isLoading = false;
                this.studentHelpClub = res.data.results
            })
            .catch(error =>{
                this.isLoading = false;
                this.response = error.response.data;
            });
    }

    createAdminStudentHelpClub = (values: {}) =>{
        this.isLoading = true;
        API.POST('admin/students-help-club/create', values)
            .then(res => {
                this.isLoading = false;
                this.response = res.data;
            })
            .catch(error =>{
                this.isLoading = false;
                this.response = error.response.data;
            });
    }

    deleteAdminStudentHelpClub = () => {
        this.isLoading = true;
        API.DELETE(`admin/students-help-club/delete/${this.studentHelpClubSelected}`)
            .then(res => {
                this.isLoading = false;
                this.response = res.data;
            })
            .catch(error =>{
                this.isLoading = false;
                this.response = error.response.data;
            });
    }

    updateAdminStudentHelpClub = (values: {}) => {
        this.isLoading = true;
        API.PUT(`admin/students-help-club/update/${this.studentHelpClubSelected}`, values)
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
    getStudentHelpClub = () =>{
        this.isLoading = true;
        API.getNoToken('students-help-club/get')
            .then(res => {
                this.isLoading = false;
                this.studentHelpClubClient = res.data.results
            })
            .catch(error =>{
                this.isLoading = false;
                this.response = error.response.data;
            });
    }

}