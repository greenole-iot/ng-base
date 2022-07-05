import * as auth0 from 'auth0-js';
import { Observable } from 'rxjs';
import * as i0 from "@angular/core";
export declare class Auth0AuthService {
    innerwebAuth: auth0.WebAuth;
    user: any;
    extraRedirectUri: any;
    constructor();
    private get webAuth();
    authenticate(username: string, password: string, redirectUri?: string): Observable<boolean>;
    forgotPassword(email: string): Observable<boolean>;
    handleAuthentication(): Promise<any>;
    private setUser;
    getUser(): any;
    isUserLoggedIn(): boolean;
    logout(): void;
    static ɵfac: i0.ɵɵFactoryDef<Auth0AuthService, never>;
    static ɵprov: i0.ɵɵInjectableDef<Auth0AuthService>;
}
