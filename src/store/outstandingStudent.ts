import {makeAutoObservable} from "mobx";
import {IOutstandinStudents} from "../interfaces/outstandingStudents";
import {IResponse} from "../interfaces/response";
import API from "../api/utils/requests";

export class OutstandingStudentStore {
    isAddDialogOpen: boolean = false;
    isEditDialogOpen: boolean = false;
    isDeleteDialogOpen: boolean = false;
    isViewDialogOpen: boolean = false;

    outstandingStudentSelected: number = 0;
    outstandingStudents: IOutstandinStudents[] = [];
    outstandingStudentsClient: IOutstandinStudents[] = [];
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
        this.outstandingStudentSelected = ID;
    }

    closeEditDialog = () =>{
        this.isEditDialogOpen = false;
    }

    openDeleteDialog = (ID: number) =>{
        this.isDeleteDialogOpen = true;
        this.outstandingStudentSelected = ID;
    }

    closeDeleteDialog = () =>{
        this.isDeleteDialogOpen = false;
    }

    openViewDialog = (ID: number) =>{
        this.isViewDialogOpen = true;
        this.outstandingStudentSelected = ID;
    }

    closeViewDialog = () =>{
        this.isViewDialogOpen = false;
    }

    // admin
    getAdminOutstandingStudent = () =>{
        this.isLoading = true;
        API.GET('admin/outstanding-students/get')
            .then(res => {
                this.isLoading = false;
                this.outstandingStudents = res.data.results
            })
            .catch(error =>{
                this.isLoading = false;
                this.response = error.response.data;
            });
    }

    createAdminOutstandingStudent = (values: {}) =>{
        this.isLoading = true;
        API.POST('admin/outstanding-students/create', values)
            .then(res => {
                this.isLoading = false;
                this.response = res.data;
            })
            .catch(error =>{
                this.isLoading = false;
                this.response = error.response.data;
            });
    }

    deleteAdminOutstandingStudent = () => {
        this.isLoading = true;
        API.DELETE(`admin/outstanding-students/delete/${this.outstandingStudentSelected}`)
            .then(res => {
                this.isLoading = false;
                this.response = res.data;
            })
            .catch(error =>{
                this.isLoading = false;
                this.response = error.response.data;
            });
    }

    updateAdminOutstandingStudent = (values: {}) => {
        this.isLoading = true;
        API.PUT(`admin/outstanding-students/update/${this.outstandingStudentSelected}`, values)
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
    getOutstandingStudent = () =>{
        this.isLoading = true;
        API.getNoToken('outstanding-students/get')
            .then(res => {
                this.isLoading = false;
                this.outstandingStudentsClient = res.data.results
            })
            .catch(error =>{
                this.isLoading = false;
                this.response = error.response.data;
            });
    }

}