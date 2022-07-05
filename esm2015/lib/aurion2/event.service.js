import { Injectable } from '@angular/core';
import { PropertiesService } from '../properties.service';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
export class EventService {
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
EventService.ɵfac = function EventService_Factory(t) { return new (t || EventService)(i0.ɵɵinject(i1.HttpClient)); };
EventService.ɵprov = i0.ɵɵdefineInjectable({ token: EventService, factory: EventService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(EventService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: i1.HttpClient }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXZlbnQuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25nLWJhc2UtbGliL3NyYy9saWIvYXVyaW9uMi9ldmVudC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7OztBQU0xRCxNQUFNLE9BQU8sWUFBWTtJQUV2QixZQUFvQixJQUFnQjtRQUFoQixTQUFJLEdBQUosSUFBSSxDQUFZO0lBQ3BDLENBQUM7SUFFRCxrQkFBa0IsQ0FBQyxRQUFnQixFQUFFLE9BQWUsRUFBRSxjQUFzQixFQUFFLE1BQWU7UUFDM0YsSUFBSSxJQUFJLEdBQUcsaUJBQWlCLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQztRQUNwRCxJQUFJLEdBQUcsR0FBRyxHQUFHLElBQUksa0JBQWtCLFFBQVEsSUFBSSxPQUFPLG1CQUFtQixjQUFjLEVBQUUsQ0FBQztRQUMxRixJQUFHLE1BQU0sSUFBSSxJQUFJLEVBQUM7WUFDaEIsR0FBRyxJQUFJLFVBQVUsR0FBRyxNQUFNLENBQUU7U0FDN0I7UUFDRCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFVLEdBQUcsQ0FBQyxDQUFDO0lBQ3JDLENBQUM7SUFFRCxTQUFTLENBQUMsUUFBZ0IsRUFBRSxRQUFnQixFQUFFLGNBQXNCO1FBQ2xFLElBQUksSUFBSSxHQUFHLGlCQUFpQixDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUM7UUFDcEQsSUFBSSxHQUFHLEdBQUcsR0FBRyxJQUFJLGlCQUFpQixRQUFRLElBQUksUUFBUSxtQkFBbUIsY0FBYyxFQUFFLENBQUM7UUFDMUYsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBVSxHQUFHLENBQUMsQ0FBQztJQUNyQyxDQUFDOzt3RUFsQlUsWUFBWTtvREFBWixZQUFZLFdBQVosWUFBWSxtQkFGWCxNQUFNO2tEQUVQLFlBQVk7Y0FIeEIsVUFBVTtlQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IFByb3BlcnRpZXNTZXJ2aWNlIH0gZnJvbSAnLi4vcHJvcGVydGllcy5zZXJ2aWNlJztcbmltcG9ydCB7IEV2ZW50IH0gZnJvbSAnLi9tb2RlbC9ldmVudCc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIEV2ZW50U2VydmljZSB7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50KSB7XG4gIH1cblxuICBnZXRFdmVudHNCeVN1YmplY3QoZG9tYWluSWQ6IHN0cmluZywgc3ViamVjdDogc3RyaW5nLCBzdGFydFRpbWVzdGFtcDogbnVtYmVyLCBzZWFyY2g/OiBzdHJpbmcpOiBPYnNlcnZhYmxlPEV2ZW50W10+IHtcbiAgICBsZXQgaG9zdCA9IFByb3BlcnRpZXNTZXJ2aWNlLnByb3BlcnRpZXMuYXVyaW9uRXZlbnQ7XG4gICAgbGV0IHVybCA9IGAke2hvc3R9L2V2ZW50L3N1YmplY3QvJHtkb21haW5JZH0vJHtzdWJqZWN0fT9zdGFydFRpbWVzdGFtcD0ke3N0YXJ0VGltZXN0YW1wfWA7XG4gICAgaWYoc2VhcmNoICE9IG51bGwpe1xuICAgICAgdXJsICs9IFwiJnNlYXJjaD1cIiArIHNlYXJjaCA7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0PEV2ZW50W10+KHVybCk7XG4gIH1cblxuICBnZXRFdmVudHMoZG9tYWluSWQ6IHN0cmluZywgb2JqZWN0SWQ6IHN0cmluZywgc3RhcnRUaW1lc3RhbXA6IG51bWJlcik6IE9ic2VydmFibGU8RXZlbnRbXT4ge1xuICAgIGxldCBob3N0ID0gUHJvcGVydGllc1NlcnZpY2UucHJvcGVydGllcy5hdXJpb25FdmVudDtcbiAgICBsZXQgdXJsID0gYCR7aG9zdH0vZXZlbnQvb2JqZWN0LyR7ZG9tYWluSWR9LyR7b2JqZWN0SWR9P3N0YXJ0VGltZXN0YW1wPSR7c3RhcnRUaW1lc3RhbXB9YDtcbiAgICByZXR1cm4gdGhpcy5odHRwLmdldDxFdmVudFtdPih1cmwpO1xuICB9XG5cbn0iXX0=