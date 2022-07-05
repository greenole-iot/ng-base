import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import * as i0 from "@angular/core";
export declare class PropertiesService {
    private propertiesUrl;
    private http;
    private static readonly DEFAULT_APP_CONFIG_PATH;
    static properties: any;
    constructor(propertiesUrl: string, http: HttpClient);
    setPropertiesUrl(propertiesUrl: string): void;
    readProperties(path: string): Observable<any>;
    /**
     * try to get properties url inject in final app
     * in case it is missing, we will use DEFAULT_APP_CONFIG_PATH
     */
    getAppConfig(): Observable<any>;
    readAllProperties(): Observable<void>;
    static ɵfac: i0.ɵɵFactoryDef<PropertiesService, [{ optional: true; }, null]>;
    static ɵprov: i0.ɵɵInjectableDef<PropertiesService>;
}
