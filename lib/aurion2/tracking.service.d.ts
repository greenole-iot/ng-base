import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Trace } from './model/trace';
import * as i0 from "@angular/core";
export declare class TrackingService {
    private http;
    tracesMockCache: Trace[];
    constructor(http: HttpClient);
    get(domainId: string, traceType: string, objectId: string, startTimestamp: string): Observable<Trace[]>;
    getByType(domainId: string, traceType: string): Observable<Trace[]>;
    getLatestByDomainsAndTag(domains: string[], tag: string): Observable<any[]>;
    set(trace: Trace): Observable<any>;
    static ɵfac: i0.ɵɵFactoryDef<TrackingService, never>;
    static ɵprov: i0.ɵɵInjectableDef<TrackingService>;
}
