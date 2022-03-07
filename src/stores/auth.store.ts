import { makeAutoObservable } from "mobx";

export class AuthStore {
    private authenticated = false;

    constructor() {
        makeAutoObservable(this);
    }

    isAuthenticated() {
        return this.authenticated;
    }
}