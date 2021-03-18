import {makeAutoObservable} from "mobx";

export class NewsStore {
    isAddDialogOpen: boolean = false;
    isEditDialogOpen: boolean = false;
    isDeleteDialogOpen: boolean = false;

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
}