import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import * as i0 from "@angular/core";
export declare class StructureService {
    private http;
    constructor(http: HttpClient);
    structuresMockCache: any[];
    get(): Observable<any[]>;
    set(structure: any): Observable<any>;
    static ɵfac: i0.ɵɵFactoryDef<StructureService, never>;
    static ɵprov: i0.ɵɵInjectableDef<StructureService>;
}
