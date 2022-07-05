import { Injectable } from '@angular/core';
import * as _ from 'lodash-es';
import { map } from 'rxjs/operators';
import { PropertiesService } from '../properties.service';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
export class TrackingService {
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
                let grouped = _.groupBy(traces, trace => trace.objectId);
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
TrackingService.ɵfac = function TrackingService_Factory(t) { return new (t || TrackingService)(i0.ɵɵinject(i1.HttpClient)); };
TrackingService.ɵprov = i0.ɵɵdefineInjectable({ token: TrackingService, factory: TrackingService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(TrackingService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: i1.HttpClient }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhY2tpbmcuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25nLWJhc2UtbGliL3NyYy9saWIvYXVyaW9uMi90cmFja2luZy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxLQUFLLENBQUMsTUFBTSxXQUFXLENBQUM7QUFFL0IsT0FBTyxFQUFFLEdBQUcsRUFBTyxNQUFNLGdCQUFnQixDQUFDO0FBQzFDLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDOzs7QUFNMUQsTUFBTSxPQUFPLGVBQWU7SUFHMUIsWUFBb0IsSUFBZ0I7UUFBaEIsU0FBSSxHQUFKLElBQUksQ0FBWTtJQUFJLENBQUM7SUFFekMsR0FBRyxDQUFDLFFBQWdCLEVBQUUsU0FBaUIsRUFBRSxRQUFnQixFQUFFLGNBQXNCO1FBQy9FLElBQUksSUFBSSxHQUFHLGlCQUFpQixDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUM7UUFDcEQsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBVSxHQUFHLElBQUksVUFBVSxRQUFRLElBQUksUUFBUSxJQUFJLFNBQVMsbUJBQW1CLGNBQWMsRUFBRSxDQUFDLENBQUE7SUFDdEgsQ0FBQztJQUVELFNBQVMsQ0FBQyxRQUFnQixFQUFFLFNBQWlCO1FBQzNDLElBQUksSUFBSSxHQUFHLGlCQUFpQixDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUM7UUFDcEQsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBVSxHQUFHLElBQUksVUFBVSxRQUFRLElBQUksU0FBUyxFQUFFLENBQUMsQ0FBQTtJQUN6RSxDQUFDO0lBRUQsd0JBQXdCLENBQUMsT0FBaUIsRUFBRSxHQUFXO1FBQ3JELElBQUksaUJBQWlCLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRTtZQUM5QyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFVLGlCQUFpQixDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxFQUFFO2dCQUMxRixNQUFNLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFLHdCQUFDLElBQUksQ0FBQyxJQUFJLDBDQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLE9BQU8sSUFBSSxHQUFHLElBQUMsQ0FBQyxDQUFDO2dCQUNoSSxJQUFJLE9BQU8sR0FBRyxDQUFDLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxLQUFLLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQztnQkFDekQsSUFBSSxNQUFNLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDaEksT0FBTyxNQUFNLENBQUM7WUFDaEIsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUNMO0lBQ0gsQ0FBQztJQUVELEdBQUcsQ0FBQyxLQUFZO1FBQ2Qsb0RBQW9EO1FBQ3BELGlDQUFpQztRQUNqQyxpQ0FBaUM7UUFDakMsTUFBTTtRQUNOLHVGQUF1RjtRQUN2RixxQkFBcUI7UUFDckIsa0RBQWtEO1FBQ2xELGFBQWE7UUFDYix3Q0FBd0M7UUFDeEMsTUFBTTtRQUNOLGtCQUFrQjtRQUNsQixXQUFXO1FBQ1QsSUFBSSxJQUFJLEdBQUcsaUJBQWlCLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQztRQUNwRCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFRLEdBQUcsSUFBSSxRQUFRLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDdkQsSUFBSTtJQUNOLENBQUM7OzhFQTFDVSxlQUFlO3VEQUFmLGVBQWUsV0FBZixlQUFlLG1CQUZkLE1BQU07a0RBRVAsZUFBZTtjQUgzQixVQUFVO2VBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0ICogYXMgXyBmcm9tICdsb2Rhc2gtZXMnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgb2YgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IG1hcCwgdGFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgUHJvcGVydGllc1NlcnZpY2UgfSBmcm9tICcuLi9wcm9wZXJ0aWVzLnNlcnZpY2UnO1xuaW1wb3J0IHsgVHJhY2UgfSBmcm9tICcuL21vZGVsL3RyYWNlJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgVHJhY2tpbmdTZXJ2aWNlIHtcbiAgdHJhY2VzTW9ja0NhY2hlOiBUcmFjZVtdO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cENsaWVudCkgeyB9XG5cbiAgZ2V0KGRvbWFpbklkOiBzdHJpbmcsIHRyYWNlVHlwZTogc3RyaW5nLCBvYmplY3RJZDogc3RyaW5nLCBzdGFydFRpbWVzdGFtcDogc3RyaW5nKTogT2JzZXJ2YWJsZTxUcmFjZVtdPiB7ICAgIFxuICAgIGxldCBob3N0ID0gUHJvcGVydGllc1NlcnZpY2UucHJvcGVydGllcy5hdXJpb25UcmFjaztcbiAgICByZXR1cm4gdGhpcy5odHRwLmdldDxUcmFjZVtdPihgJHtob3N0fS90cmFjZS8ke2RvbWFpbklkfS8ke29iamVjdElkfS8ke3RyYWNlVHlwZX0/c3RhcnRUaW1lc3RhbXA9JHtzdGFydFRpbWVzdGFtcH1gKVxuICB9XG5cbiAgZ2V0QnlUeXBlKGRvbWFpbklkOiBzdHJpbmcsIHRyYWNlVHlwZTogc3RyaW5nKTogT2JzZXJ2YWJsZTxUcmFjZVtdPiB7XG4gICAgbGV0IGhvc3QgPSBQcm9wZXJ0aWVzU2VydmljZS5wcm9wZXJ0aWVzLmF1cmlvblRyYWNrO1xuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0PFRyYWNlW10+KGAke2hvc3R9L3N0YXRlLyR7ZG9tYWluSWR9LyR7dHJhY2VUeXBlfWApXG4gIH1cblxuICBnZXRMYXRlc3RCeURvbWFpbnNBbmRUYWcoZG9tYWluczogc3RyaW5nW10sIHRhZzogc3RyaW5nKSB7XG4gICAgaWYgKFByb3BlcnRpZXNTZXJ2aWNlLnByb3BlcnRpZXMudHJhY2tpbmdzbW9jaykge1xuICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQ8VHJhY2VbXT4oUHJvcGVydGllc1NlcnZpY2UucHJvcGVydGllcy50cmFja2luZ3Ntb2NrKS5waXBlKG1hcCh0cmFjZXMgPT4ge1xuICAgICAgICB0cmFjZXMgPSB0cmFjZXMuZmlsdGVyKGl0ZW0gPT4gZG9tYWlucy5pbmRleE9mKGl0ZW0uZG9tYWluSWQpICE9IC0xKS5maWx0ZXIoaXRlbSA9PiBpdGVtLnRhZ3M/LmZpbmQoaXRlbVRhZyA9PiBpdGVtVGFnID09IHRhZykpO1xuICAgICAgICBsZXQgZ3JvdXBlZCA9IF8uZ3JvdXBCeSh0cmFjZXMsIHRyYWNlID0+IHRyYWNlLm9iamVjdElkKTtcbiAgICAgICAgbGV0IHN0YXRlcyA9IE9iamVjdC5rZXlzKGdyb3VwZWQpLm1hcChrZXkgPT4gZ3JvdXBlZFtrZXldKS5tYXAoZ3JvdXAgPT4gZ3JvdXAuc29ydCgobzEsIG8yKSA9PiBvMi50aW1lc3RhbXAgLSBvMS50aW1lc3RhbXApWzBdKTtcbiAgICAgICAgcmV0dXJuIHN0YXRlcztcbiAgICAgIH0pKTtcbiAgICB9XG4gIH1cblxuICBzZXQodHJhY2U6IFRyYWNlKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICAvLyBpZiAoUHJvcGVydGllc1NlcnZpY2UucHJvcGVydGllcy50cmFja2luZ3Ntb2NrKSB7XG4gICAgLy8gICBpZiAoIXRoaXMudHJhY2VzTW9ja0NhY2hlKSB7XG4gICAgLy8gICAgIHRoaXMudHJhY2VzTW9ja0NhY2hlID0gW107XG4gICAgLy8gICB9XG4gICAgLy8gICBsZXQgaWR4ID0gdGhpcy50cmFjZXNNb2NrQ2FjaGUuZmluZEluZGV4KGl0ZW0gPT4gaXRlbS5vYmplY3RJZCA9PSB0cmFjZS5vYmplY3RJZCk7XG4gICAgLy8gICBpZiAoaWR4ICE9IC0xKSB7XG4gICAgLy8gICAgIHRoaXMudHJhY2VzTW9ja0NhY2hlLnNwbGljZShpZHgsIDAsIHRyYWNlKTtcbiAgICAvLyAgIH0gZWxzZSB7XG4gICAgLy8gICAgIHRoaXMudHJhY2VzTW9ja0NhY2hlLnB1c2godHJhY2UpO1xuICAgIC8vICAgfVxuICAgIC8vICAgcmV0dXJuIG9mKDEpO1xuICAgIC8vIH0gZWxzZSB7XG4gICAgICBsZXQgaG9zdCA9IFByb3BlcnRpZXNTZXJ2aWNlLnByb3BlcnRpZXMuYXVyaW9uVHJhY2s7XG4gICAgICByZXR1cm4gdGhpcy5odHRwLnBvc3Q8VHJhY2U+KGAke2hvc3R9L3RyYWNlYCwgdHJhY2UpO1xuICAgIC8vIH1cbiAgfVxuXG59XG4iXX0=