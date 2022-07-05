import { __awaiter } from "tslib";
import { Injectable } from '@angular/core';
import * as auth0 from 'auth0-js';
import { BehaviorSubject, throwError } from 'rxjs';
import { PropertiesService } from './properties.service';
import * as i0 from "@angular/core";
export class Auth0AuthService {
    constructor() {
    }
    get webAuth() {
        if (this.innerwebAuth == null) {
            this.innerwebAuth = new auth0.WebAuth({
                clientID: PropertiesService.properties.auth0.clientId,
                domain: PropertiesService.properties.auth0.domain,
                scope: 'openid profile email current_user',
                responseType: 'token id_token code',
                redirectUri: PropertiesService.properties.auth0.redirectUri + (this.extraRedirectUri ? this.extraRedirectUri : '')
            });
        }
        return this.innerwebAuth;
    }
    authenticate(username, password, redirectUri) {
        this.extraRedirectUri = redirectUri;
        let behaviorSubject = new BehaviorSubject(false);
        this.webAuth.login({
            realm: PropertiesService.properties.auth0.realm,
            username: username,
            password: password
        }, (err, res) => {
            if (err != null) {
                console.error('Usuário e/ou senha errados.');
                throwError('Usuário e/ou senha errados.');
            }
            this.user = res;
            console.log(res);
            behaviorSubject.next(true);
        });
        return behaviorSubject;
    }
    forgotPassword(email) {
        let behaviorSubject = new BehaviorSubject(false);
        this.webAuth.changePassword({
            connection: PropertiesService.properties.auth0.realm,
            email
        }, (err, resp) => {
            if (err) {
                console.error(err);
                throwError(JSON.stringify(err));
            }
            behaviorSubject.next(true);
        });
        return behaviorSubject;
    }
    handleAuthentication() {
        return __awaiter(this, void 0, void 0, function* () {
            //this.setIsOnHandleAuthenticationCallback(true);
            yield new Promise((resolve, reject) => {
                this.webAuth.parseHash((err, authResult) => {
                    console.log(authResult);
                    if (err) {
                        console.error(err);
                        reject(err);
                    }
                    else {
                        resolve(authResult);
                    }
                });
            }).then((authResult) => {
                console.log(authResult);
                if (authResult && authResult.accessToken && authResult.idToken) {
                    this.setUser(authResult);
                }
            })
                .catch((err) => {
                console.error(err);
                /* this.loaderService.hideLoader();
                this.router.navigate(['/']);
                this.alertService.showMessage(err.errorDescription);
                return Promise.reject(err); */
            });
        });
    }
    setUser(user) {
        this.user = user;
        sessionStorage.setItem('user', JSON.stringify(user));
    }
    getUser() {
        let userJSON = sessionStorage.getItem('user');
        if (userJSON != null && userJSON != '') {
            this.user = JSON.parse(userJSON);
        }
        return this.user;
    }
    isUserLoggedIn() {
        let user = this.getUser();
        return user != null;
    }
    logout() {
        this.user = null;
        sessionStorage.removeItem('user');
    }
}
Auth0AuthService.ɵfac = function Auth0AuthService_Factory(t) { return new (t || Auth0AuthService)(); };
Auth0AuthService.ɵprov = i0.ɵɵdefineInjectable({ token: Auth0AuthService, factory: Auth0AuthService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(Auth0AuthService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aDAtYXV0aC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvbmctYmFzZS1saWIvc3JjL2xpYi9hdXRoMC1hdXRoLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxLQUFLLEtBQUssTUFBTSxVQUFVLENBQUM7QUFDbEMsT0FBTyxFQUFFLGVBQWUsRUFBYyxVQUFVLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDL0QsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7O0FBS3pELE1BQU0sT0FBTyxnQkFBZ0I7SUFNM0I7SUFDQSxDQUFDO0lBRUQsSUFBWSxPQUFPO1FBQ2pCLElBQUksSUFBSSxDQUFDLFlBQVksSUFBSSxJQUFJLEVBQUU7WUFDN0IsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUM7Z0JBQ3BDLFFBQVEsRUFBRSxpQkFBaUIsQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLFFBQVE7Z0JBQ3JELE1BQU0sRUFBRSxpQkFBaUIsQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLE1BQU07Z0JBQ2pELEtBQUssRUFBRSxtQ0FBbUM7Z0JBQzFDLFlBQVksRUFBRSxxQkFBcUI7Z0JBQ25DLFdBQVcsRUFBRSxpQkFBaUIsQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLFdBQVcsR0FBRyxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7YUFDbkgsQ0FBQyxDQUFDO1NBQ0o7UUFDRCxPQUFPLElBQUksQ0FBQyxZQUFZLENBQUM7SUFDM0IsQ0FBQztJQUVELFlBQVksQ0FBQyxRQUFnQixFQUFFLFFBQWdCLEVBQUUsV0FBb0I7UUFDbkUsSUFBSSxDQUFDLGdCQUFn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LE9BQU87UUFDTCxJQUFJLFFBQVEsR0FBRyxjQUFjLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzlDLElBQUksUUFBUSxJQUFJLElBQUksSUFBSSxRQUFRLElBQUksRUFBRSxFQUFFO1lBQ3RDLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQztTQUNsQztRQUNELE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQztJQUNuQixDQUFDO0lBRUQsY0FBYztRQUNaLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUMxQixPQUFPLElBQUksSUFBSSxJQUFJLENBQUM7SUFDdEIsQ0FBQztJQUVELE1BQU07UUFDSixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNqQixjQUFjLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3BDLENBQUM7O2dGQXpHVSxnQkFBZ0I7d0RBQWhCLGdCQUFnQixXQUFoQixnQkFBZ0IsbUJBRmYsTUFBTTtrREFFUCxnQkFBZ0I7Y0FINUIsVUFBVTtlQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0ICogYXMgYXV0aDAgZnJvbSAnYXV0aDAtanMnO1xuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0LCBPYnNlcnZhYmxlLCB0aHJvd0Vycm9yIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBQcm9wZXJ0aWVzU2VydmljZSB9IGZyb20gJy4vcHJvcGVydGllcy5zZXJ2aWNlJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgQXV0aDBBdXRoU2VydmljZSB7XG4gIGlubmVyd2ViQXV0aDogYXV0aDAuV2ViQXV0aDtcbiAgdXNlcjtcblxuICBleHRyYVJlZGlyZWN0VXJpO1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICB9XG5cbiAgcHJpdmF0ZSBnZXQgd2ViQXV0aCgpOiBhdXRoMC5XZWJBdXRoIHtcbiAgICBpZiAodGhpcy5pbm5lcndlYkF1dGggPT0gbnVsbCkge1xuICAgICAgdGhpcy5pbm5lcndlYkF1dGggPSBuZXcgYXV0aDAuV2ViQXV0aCh7XG4gICAgICAgIGNsaWVudElEOiBQcm9wZXJ0aWVzU2VydmljZS5wcm9wZXJ0aWVzLmF1dGgwLmNsaWVudElkLFxuICAgICAgICBkb21haW46IFByb3BlcnRpZXNTZXJ2aWNlLnByb3BlcnRpZXMuYXV0aDAuZG9tYWluLFxuICAgICAgICBzY29wZTogJ29wZW5pZCBwcm9maWxlIGVtYWlsIGN1cnJlbnRfdXNlcicsXG4gICAgICAgIHJlc3BvbnNlVHlwZTogJ3Rva2VuIGlkX3Rva2VuIGNvZGUnLFxuICAgICAgICByZWRpcmVjdFVyaTogUHJvcGVydGllc1NlcnZpY2UucHJvcGVydGllcy5hdXRoMC5yZWRpcmVjdFVyaSArICh0aGlzLmV4dHJhUmVkaXJlY3RVcmkgPyB0aGlzLmV4dHJhUmVkaXJlY3RVcmkgOiAnJylcbiAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5pbm5lcndlYkF1dGg7XG4gIH1cblxuICBhdXRoZW50aWNhdGUodXNlcm5hbWU6IHN0cmluZywgcGFzc3dvcmQ6IHN0cmluZywgcmVkaXJlY3RVcmk/OiBzdHJpbmcpOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcbiAgICB0aGlzLmV4dHJhUmVkaXJlY3RVcmkgPSByZWRpcmVjdFVyaTtcbiAgICBsZXQgYmVoYXZpb3JTdWJqZWN0ID0gbmV3IEJlaGF2aW9yU3ViamVjdDxib29sZWFuPihmYWxzZSk7XG4gICAgdGhpcy53ZWJBdXRoLmxvZ2luKHtcbiAgICAgIHJlYWxtOiBQcm9wZXJ0aWVzU2VydmljZS5wcm9wZXJ0aWVzLmF1dGgwLnJlYWxtLFxuICAgICAgdXNlcm5hbWU6IHVzZXJuYW1lLFxuICAgICAgcGFzc3dvcmQ6IHBhc3N3b3JkXG4gICAgfSwgKGVyciwgcmVzKSA9PiB7XG4gICAgICBpZiAoZXJyICE9IG51bGwpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcignVXN1w6FyaW8gZS9vdSBzZW5oYSBlcnJhZG9zLicpO1xuICAgICAgICB0aHJvd0Vycm9yKCdVc3XDoXJpbyBlL291IHNlbmhhIGVycmFkb3MuJyk7XG4gICAgICB9XG4gICAgICB0aGlzLnVzZXIgPSByZXM7XG4gICAgICBjb25zb2xlLmxvZyhyZXMpO1xuICAgICAgYmVoYXZpb3JTdWJqZWN0Lm5leHQodHJ1ZSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIGJlaGF2aW9yU3ViamVjdDtcbiAgfVxuXG4gIHB1YmxpYyBmb3Jnb3RQYXNzd29yZChlbWFpbDogc3RyaW5nKTogT2JzZXJ2YWJsZTxib29sZWFuPiB7XG4gICAgbGV0IGJlaGF2aW9yU3ViamVjdCA9IG5ldyBCZWhhdmlvclN1YmplY3Q8Ym9vbGVhbj4oZmFsc2UpO1xuICAgIHRoaXMud2ViQXV0aC5jaGFuZ2VQYXNzd29yZCh7XG4gICAgICBjb25uZWN0aW9uOiBQcm9wZXJ0aWVzU2VydmljZS5wcm9wZXJ0aWVzLmF1dGgwLnJlYWxtLFxuICAgICAgZW1haWxcbiAgICB9LCAoZXJyLCByZXNwKSA9PiB7XG4gICAgICBpZiAoZXJyKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgICAgICAgdGhyb3dFcnJvcihKU09OLnN0cmluZ2lmeShlcnIpKTtcbiAgICAgIH1cbiAgICAgIGJlaGF2aW9yU3ViamVjdC5uZXh0KHRydWUpO1xuICAgIH0pO1xuICAgIHJldHVybiBiZWhhdmlvclN1YmplY3Q7XG4gIH1cblxuICBwdWJsaWMgYXN5bmMgaGFuZGxlQXV0aGVudGljYXRpb24oKTogUHJvbWlzZTxhbnk+IHtcbiAgICAvL3RoaXMuc2V0SXNPbkhhbmRsZUF1dGhlbnRpY2F0aW9uQ2FsbGJhY2sodHJ1ZSk7XG5cbiAgICBhd2FpdCBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICB0aGlzLndlYkF1dGgucGFyc2VIYXNoKChlcnIsIGF1dGhSZXN1bHQpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coYXV0aFJlc3VsdCk7XG4gICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKGVycilcbiAgICAgICAgICByZWplY3QoZXJyKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXNvbHZlKGF1dGhSZXN1bHQpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KS50aGVuKChhdXRoUmVzdWx0OiBhbnkpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKGF1dGhSZXN1bHQpXG4gICAgICBpZiAoYXV0aFJlc3VsdCAmJiBhdXRoUmVzdWx0LmFjY2Vzc1Rva2VuICYmIGF1dGhSZXN1bHQuaWRUb2tlbikge1xuICAgICAgICB0aGlzLnNldFVzZXIoYXV0aFJlc3VsdClcbiAgICAgIH1cbiAgICB9KVxuICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xuICAgICAgICAvKiB0aGlzLmxvYWRlclNlcnZpY2UuaGlkZUxvYWRlcigpO1xuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy8nXSk7XG4gICAgICAgIHRoaXMuYWxlcnRTZXJ2aWNlLnNob3dNZXNzYWdlKGVyci5lcnJvckRlc2NyaXB0aW9uKTtcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KGVycik7ICovXG4gICAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgc2V0VXNlcih1c2VyKSB7XG4gICAgdGhpcy51c2VyID0gdXNlcjtcbiAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKCd1c2VyJywgSlNPTi5zdHJpbmdpZnkodXNlcikpO1xuICB9XG5cbiAgZ2V0VXNlcigpIHtcbiAgICBsZXQgdXNlckpTT04gPSBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCd1c2VyJyk7XG4gICAgaWYgKHVzZXJKU09OICE9IG51bGwgJiYgdXNlckpTT04gIT0gJycpIHtcbiAgICAgIHRoaXMudXNlciA9IEpTT04ucGFyc2UodXNlckpTT04pO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy51c2VyO1xuICB9XG5cbiAgaXNVc2VyTG9nZ2VkSW4oKTogYm9vbGVhbiB7XG4gICAgbGV0IHVzZXIgPSB0aGlzLmdldFVzZXIoKTtcbiAgICByZXR1cm4gdXNlciAhPSBudWxsO1xuICB9XG5cbiAgbG9nb3V0KCkge1xuICAgIHRoaXMudXNlciA9IG51bGw7XG4gICAgc2Vzc2lvblN0b3JhZ2UucmVtb3ZlSXRlbSgndXNlcicpO1xuICB9XG5cbn0iXX0=