import { ɵɵinject, ɵɵdefineInjectable, ɵsetClassMetadata, Injectable, Optional, Inject, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope, NgModule } from '@angular/core';
import { throwError, of, BehaviorSubject } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { webSocket } from 'rxjs/webSocket';
import { groupBy } from 'lodash-es';
import { __awaiter } from 'tslib';
import { WebAuth } from 'auth0-js';

class Trace {
}

class Event {
}

class PropertiesService {
    constructor(propertiesUrl, http) {
        this.propertiesUrl = propertiesUrl;
        this.http = http;
        if (this.propertiesUrl == null) {
            this.propertiesUrl = PropertiesService.DEFAULT_APP_CONFIG_PATH;
            console.info("Did not receive propertiesUrl path. Using default as '" + this.propertiesUrl + "'");
        }
        else {
            console.info("Received propertiesUrl path as '" + this.propertiesUrl + "'");
        }
    }
    setPropertiesUrl(propertiesUrl) {
        this.propertiesUrl = propertiesUrl;
        console.info("PropertiesUrl has been set to: " + propertiesUrl);
    }
    readProperties(path) {
        return this.http.get(path).pipe(catchError((e) => {
            console.error("ERROR: Properties file " + path + " not found.");
            return throwError(e);
        }));
    }
    /**
     * try to get properties url inject in final app
     * in case it is missing, we will use DEFAULT_APP_CONFIG_PATH
     */
    getAppConfig() {
        return this.readProperties(this.propertiesUrl);
    }
    readAllProperties() {
        return this.readProperties(this.propertiesUrl).pipe(map(properties => {
            PropertiesService.properties = properties;
        }));
    }
}
PropertiesService.DEFAULT_APP_CONFIG_PATH = "assets/appConfig.properties.json";
PropertiesService.properties = null;
PropertiesService.ɵfac = function PropertiesService_Factory(t) { return new (t || PropertiesService)(ɵɵinject('propertiesUrl', 8), ɵɵinject(HttpClient)); };
PropertiesService.ɵprov = ɵɵdefineInjectable({ token: PropertiesService, factory: PropertiesService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { ɵsetClassMetadata(PropertiesService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: Optional
            }, {
                type: Inject,
                args: ['propertiesUrl']
            }] }, { type: HttpClient }]; }, null); })();

class StateService {
    constructor(http) {
        this.http = http;
    }
    list(domainId, traceType) {
        let host = PropertiesService.properties.aurionTrack;
        let url = `${host}/state/${domainId}/${traceType}`;
        return this.http.get(url);
    }
    get(domainId, traceType, objectId) {
        let host = PropertiesService.properties.aurionTrack;
        let url = `${host}/state/${domainId}/${traceType}/${objectId}`;
        return this.http.get(url);
    }
    // getByDomains(domains: string[]): Observable<Trace[]> {
    //   if (PropertiesService.properties.trackingsmock) {
    //     return this.http.get<Trace[]>(PropertiesService.properties.trackingsmock).pipe(map(traces => {
    //       traces = traces.filter(item => domains.indexOf(item.domainId) != -1);
    //       let grouped = _.groupBy(traces, trace => trace.objectId);
    //       let states = Object.keys(grouped).map(key => grouped[key]).map(group => group.sort((o1, o2) => o2.timestamp - o1.timestamp)[0]);
    //       return states;
    //     }));
    //   }
    // }
    searchExecutionsByProcess(domainId, traceType, objectId) {
        let host = PropertiesService.properties.aurionTrack;
        let url = `${host}/state/${domainId}/${traceType}?search=processId.eq:${objectId}&sort=timestamp:asc`;
        return this.http.get(url);
    }
}
StateService.ɵfac = function StateService_Factory(t) { return new (t || StateService)(ɵɵinject(HttpClient)); };
StateService.ɵprov = ɵɵdefineInjectable({ token: StateService, factory: StateService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { ɵsetClassMetadata(StateService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: HttpClient }]; }, null); })();

class StructureService {
    constructor(http) {
        this.http = http;
    }
    get() {
        if (PropertiesService.properties.structuresmock) {
            if (this.structuresMockCache) {
                return of(this.structuresMockCache);
            }
            return this.http.get(PropertiesService.properties.structuresmock).pipe(tap(res => {
                this.structuresMockCache = res;
            }));
        }
    }
    set(structure) {
        if (PropertiesService.properties.structuresmock) {
            if (!this.structuresMockCache) {
                this.structuresMockCache = [];
            }
            let idx = this.structuresMockCache.findIndex(item => item.id == structure.id);
            if (idx != -1) {
                this.structuresMockCache.splice(idx, 0, structure);
            }
            else {
                this.structuresMockCache.push(structure);
            }
            return of(1);
        }
    }
}
StructureService.ɵfac = function StructureService_Factory(t) { return new (t || StructureService)(ɵɵinject(HttpClient)); };
StructureService.ɵprov = ɵɵdefineInjectable({ token: StructureService, factory: StructureService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { ɵsetClassMetadata(StructureService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: HttpClient }]; }, null); })();

class TrackingWebsocketService {
    constructor() { }
    connect(message) {
        let url = PropertiesService.properties.trackingwebsocket;
        this.myWebSocket = webSocket(url);
        if (message != null) {
            this.myWebSocket.next(message);
        }
        return this.myWebSocket;
    }
    disconnect() {
        if (this.myWebSocket) {
            this.myWebSocket.complete();
        }
    }
}
TrackingWebsocketService.ɵfac = function TrackingWebsocketService_Factory(t) { return new (t || TrackingWebsocketService)(); };
TrackingWebsocketService.ɵprov = ɵɵdefineInjectable({ token: TrackingWebsocketService, factory: TrackingWebsocketService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { ɵsetClassMetadata(TrackingWebsocketService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();

class EventWebsocketService {
    constructor() { }
    connect(message) {
        let url = PropertiesService.properties.eventwebsocket;
        this.myWebSocket = webSocket(url);
        if (message != null) {
            this.myWebSocket.next(message);
        }
        return this.myWebSocket;
    }
    disconnect() {
        this.myWebSocket.complete();
    }
}
EventWebsocketService.ɵfac = function EventWebsocketService_Factory(t) { return new (t || EventWebsocketService)(); };
EventWebsocketService.ɵprov = ɵɵdefineInjectable({ token: EventWebsocketService, factory: EventWebsocketService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { ɵsetClassMetadata(EventWebsocketService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();

class TrackingService {
    constructor(http) {
        this.http = http;
    }
    get(domainId, traceType, objectId, startTimestamp) {
        let host = PropertiesService.properties.aurionTrack;
        return this.http.get(`${host}/trace/${domainId}/${objectId}/${traceType}?startTimestamp=${startTimestamp}`);
    }
    getByType(domainId, traceType) {
        let host = PropertiesService.properties.aurionTrack;
        return this.http.get(`${host}/state/${domainId}/${traceType}`);
    }
    getLatestByDomainsAndTag(domains, tag) {
        if (PropertiesService.properties.trackingsmock) {
            return this.http.get(PropertiesService.properties.trackingsmock).pipe(map(traces => {
                traces = traces.filter(item => domains.indexOf(item.domainId) != -1).filter(item => { var _a; return (_a = item.tags) === null || _a === void 0 ? void 0 : _a.find(itemTag => itemTag == tag); });
                let grouped = groupBy(traces, trace => trace.objectId);
                let states = Object.keys(grouped).map(key => grouped[key]).map(group => group.sort((o1, o2) => o2.timestamp - o1.timestamp)[0]);
                return states;
            }));
        }
    }
    set(trace) {
        // if (PropertiesService.properties.trackingsmock) {
        //   if (!this.tracesMockCache) {
        //     this.tracesMockCache = [];
        //   }
        //   let idx = this.tracesMockCache.findIndex(item => item.objectId == trace.objectId);
        //   if (idx != -1) {
        //     this.tracesMockCache.splice(idx, 0, trace);
        //   } else {
        //     this.tracesMockCache.push(trace);
        //   }
        //   return of(1);
        // } else {
        let host = PropertiesService.properties.aurionTrack;
        return this.http.post(`${host}/trace`, trace);
        // }
    }
}
TrackingService.ɵfac = function TrackingService_Factory(t) { return new (t || TrackingService)(ɵɵinject(HttpClient)); };
TrackingService.ɵprov = ɵɵdefineInjectable({ token: TrackingService, factory: TrackingService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { ɵsetClassMetadata(TrackingService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: HttpClient }]; }, null); })();

class EventService {
    constructor(http) {
        this.http = http;
    }
    getEventsBySubject(domainId, subject, startTimestamp, search) {
        let host = PropertiesService.properties.aurionEvent;
        let url = `${host}/event/subject/${domainId}/${subject}?startTimestamp=${startTimestamp}`;
        if (search != null) {
            url += "&search=" + search;
        }
        return this.http.get(url);
    }
    getEvents(domainId, objectId, startTimestamp) {
        let host = PropertiesService.properties.aurionEvent;
        let url = `${host}/event/object/${domainId}/${objectId}?startTimestamp=${startTimestamp}`;
        return this.http.get(url);
    }
}
EventService.ɵfac = function EventService_Factory(t) { return new (t || EventService)(ɵɵinject(HttpClient)); };
EventService.ɵprov = ɵɵdefineInjectable({ token: EventService, factory: EventService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { ɵsetClassMetadata(EventService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: HttpClient }]; }, null); })();

class Auth0AuthService {
    constructor() {
    }
    get webAuth() {
        if (this.innerwebAuth == null) {
            this.innerwebAuth = new WebAuth({
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
Auth0AuthService.ɵprov = ɵɵdefineInjectable({ token: Auth0AuthService, factory: Auth0AuthService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { ɵsetClassMetadata(Auth0AuthService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();

class NgBaseLibModule {
}
NgBaseLibModule.ɵmod = ɵɵdefineNgModule({ type: NgBaseLibModule });
NgBaseLibModule.ɵinj = ɵɵdefineInjector({ factory: function NgBaseLibModule_Factory(t) { return new (t || NgBaseLibModule)(); }, imports: [[HttpClientModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(NgBaseLibModule, { imports: [HttpClientModule] }); })();
/*@__PURE__*/ (function () { ɵsetClassMetadata(NgBaseLibModule, [{
        type: NgModule,
        args: [{
                declarations: [],
                imports: [HttpClientModule
                ],
                exports: []
            }]
    }], null, null); })();

/*
 * Public API Surface of ng-base-lib
 */

/**
 * Generated bundle index. Do not edit.
 */

export { Auth0AuthService, Event, EventService, EventWebsocketService, NgBaseLibModule, PropertiesService, StateService, StructureService, Trace, TrackingService, TrackingWebsocketService };
//# sourceMappingURL=alis-ng-base.js.map
