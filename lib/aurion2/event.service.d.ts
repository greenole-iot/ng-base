import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Event } from './model/event';
import * as i0 from "@angular/core";
export declare class EventService {
    private http;
    constructor(http: HttpClient);
    getEventsBySubject(domainId: string, subject: string, startTimestamp: number, search?: string): Observable<Event[]>;
    getEvents(domainId: string, objectId: string, startTimestamp: number): Observable<Event[]>;
    static ɵfac: i0.ɵɵFactoryDef<EventService, never>;
    static ɵprov: i0.ɵɵInjectableDef<EventService>;
}
