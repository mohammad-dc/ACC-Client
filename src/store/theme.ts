import {makeAutoObservable} from "mobx";

export class ThemeStore {
    theme: string | null = 'light';
    isLightTheme: boolean = true;

    constructor(){
        makeAutoObservable(this);
    }

    changeTheme = () => {
        localStorage.setItem('theme', this.isLightTheme? 'dark' : 'light');
        this.isLightTheme = !this.isLightTheme;
        this.theme = localStorage.getItem('theme');
    }
}