import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Trace } from './model/trace';
import * as i0 from "@angular/core";
export declare class StateService {
    private http;
    constructor(http: HttpClient);
    list(domainId: string, traceType: string): Observable<Trace[]>;
    get(domainId: string, traceType: string, objectId: string): Observable<Trace>;
    searchExecutionsByProcess(domainId: string, traceType: string, objectId: string): Observable<Trace[]>;
    static ɵfac: i0.ɵɵFactoryDef<StateService, never>;
    static ɵprov: i0.ɵɵInjectableDef<StateService>;
}
