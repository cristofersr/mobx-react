import { makeAutoObservable } from "mobx";
import { AuthService } from './auth.service';
import { LoginRequest } from '../dto/request/login-request.dto';

export class AuthStore {
    private authenticated = false;

    constructor(private readonly AuthService: AuthService) {
        makeAutoObservable(this);
        this.authenticated = !!this.getAccessToken();
    }

    async login(loginRequest: LoginRequest) {
        try {
            const tokenPayloadDto = await this.AuthService.login(loginRequest);
            localStorage.setItem('access_token', tokenPayloadDto.access_token);
            this.setAuthenticated(true);
        } catch (err) {
            this.setAuthenticated(false);
        }
    }

    private setAuthenticated(authenticated: boolean) {
        this.authenticated = authenticated;
    }

    getAccessToken() {
        return localStorage.getItem('access_token');
    }

    isAuthenticated() {
        return this.authenticated;
    }
}