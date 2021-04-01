import {makeAutoObservable} from "mobx";
import {ICourse} from "../interfaces/course";
import {IResponse} from "../interfaces/response";
import API from "../api/utils/requests";

export class CourseStore {
    isAddDialogOpen: boolean = false;
    isEditDialogOpen: boolean = false;
    isDeleteDialogOpen: boolean = false;

    courseSelected: number = 0;
    courses: ICourse[] = [];
    coursesClient: ICourse[] = [];
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
        this.courseSelected = ID;
    }

    closeEditDialog = () =>{
        this.isEditDialogOpen = false;
    }

    openDeleteDialog = (ID: number) =>{
        this.isDeleteDialogOpen = true;
        this.courseSelected = ID;
    }

    closeDeleteDialog = () =>{
        this.isDeleteDialogOpen = false;
    }

    // admin
    getAdminCourses = () =>{
        this.isLoading = true;
        API.GET('admin/courses/get')
            .then(res => {
                this.isLoading = false;
                this.courses = res.data.results
            })
            .catch(error =>{
                this.isLoading = false;
                this.response = error.response.data;
            });
    }

    createAdminCourse = (values: {}) =>{
        this.isLoading = true;
        API.POST('admin/courses/create', values)
            .then(res => {
                this.isLoading = false;
                this.response = res.data;
            })
            .catch(error =>{
                this.isLoading = false;
                this.response = error.response.data;
            });
    }

    deleteAdminCourse = () => {
        this.isLoading = true;
        API.DELETE(`admin/courses/delete/${this.courseSelected}`)
            .then(res => {
                this.isLoading = false;
                this.response = res.data;
            })
            .catch(error =>{
                this.isLoading = false;
                this.response = error.response.data;
            });
    }

    updateAdminCourse = (values: {}) => {
        this.isLoading = true;
        API.PUT(`admin/courses/update/${this.courseSelected}`, values)
            .then(res => {
                this.isLoading = false;
                this.response = res.data;
            })
            .catch(error =>{
                this.isLoading = false;
                this.response = error.response.data;
            });
    }

    //video
    createAdminVideo = (values: {}) => {
        this.isLoading = true;
        API.POST(`admin/videos/create`, values)
            .then(res => {
                this.isLoading = false;
                this.response = res.data;
            })
            .catch(error =>{
                this.isLoading = false;
                this.response = error.response.data;
            });
    }
    updateAdminVideo = (ID:number, values: {}) => {
        this.isLoading = true;
        API.PUT(`admin/videos/update/${ID}`, values)
            .then(res => {
                this.isLoading = false;
                this.response = res.data;
            })
            .catch(error =>{
                this.isLoading = false;
                this.response = error.response.data;
            });
    }

    deleteAdminVideo = (ID: number) => {
        this.isLoading = true;
        API.DELETE(`admin/videos/delete/${ID}`)
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
    getCourses = () =>{
        this.isLoading = true;
        API.getNoToken('courses/get')
            .then(res => {
                this.isLoading = false;
                this.coursesClient = res.data.results
            })
            .catch(error =>{
                this.isLoading = false;
                this.response = error.response.data;
            });
    }

}