import { observable } from "mobx";

export class AdminStore {
    @observable isLogin: boolean = false;
}