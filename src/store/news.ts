import {makeAutoObservable} from "mobx";
import {INew} from "../interfaces/news";
import {IResponse} from "../interfaces/response";
import API from "../api/utils/requests";

export class NewsStore {
    isAddDialogOpen: boolean = false;
    isEditDialogOpen: boolean = false;
    isDeleteDialogOpen: boolean = false;

    newsSelected: number = 0;
    news: INew[] = [];
    newsClient: INew[] = [];
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
        this.newsSelected = ID;
    }

    closeEditDialog = () =>{
        this.isEditDialogOpen = false;
    }

    openDeleteDialog = (ID: number) =>{
        this.isDeleteDialogOpen = true;
        this.newsSelected = ID;
    }

    closeDeleteDialog = () =>{
        this.isDeleteDialogOpen = false;
    }

    // admin
    getAdminNews = () =>{
        this.isLoading = true;
        API.GET('admin/news/get')
            .then(res => {
                this.isLoading = false;
                this.news = res.data.results
            })
            .catch(error =>{
                this.isLoading = false;
                this.response = error.response.data;
            });
    }

    createAdminNews = (values: {}) =>{
        this.isLoading = true;
        API.POST('admin/news/create', values)
            .then(res => {
                this.isLoading = false;
                this.response = res.data;
            })
            .catch(error =>{
                this.isLoading = false;
                this.response = error.response.data;
            });
    }

    deleteAdminNew = () => {
        this.isLoading = true;
        API.DELETE(`admin/news/delete/${this.newsSelected}`)
            .then(res => {
                this.isLoading = false;
                this.response = res.data;
            })
            .catch(error =>{
                this.isLoading = false;
                this.response = error.response.data;
            });
    }

    updateAdminNews = (values: {}) => {
        this.isLoading = true;
        API.PUT(`admin/news/update/${this.newsSelected}`, values)
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
    getNews = () =>{
        this.isLoading = true;
        API.getNoToken('news/get')
            .then(res => {
                this.isLoading = false;
                this.newsClient = res.data.results
            })
            .catch(error =>{
                this.isLoading = false;
                this.response = error.response.data;
            });
    }

}