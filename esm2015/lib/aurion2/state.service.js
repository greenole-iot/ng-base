import { Injectable } from '@angular/core';
import { PropertiesService } from '../properties.service';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
export class StateService {
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
StateService.ɵfac = function StateService_Factory(t) { return new (t || StateService)(i0.ɵɵinject(i1.HttpClient)); };
StateService.ɵprov = i0.ɵɵdefineInjectable({ token: StateService, factory: StateService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(StateService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: i1.HttpClient }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGUuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25nLWJhc2UtbGliL3NyYy9saWIvYXVyaW9uMi9zdGF0ZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFJM0MsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7OztBQU0xRCxNQUFNLE9BQU8sWUFBWTtJQUV2QixZQUFvQixJQUFnQjtRQUFoQixTQUFJLEdBQUosSUFBSSxDQUFZO0lBQUksQ0FBQztJQUV6QyxJQUFJLENBQUMsUUFBZ0IsRUFBRSxTQUFpQjtRQUN0QyxJQUFJLElBQUksR0FBRyxpQkFBaUIsQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDO1FBQ3BELElBQUksR0FBRyxHQUFHLEdBQUcsSUFBSSxVQUFVLFFBQVEsSUFBSSxTQUFTLEVBQUUsQ0FBQTtRQUNsRCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFVLEdBQUcsQ0FBQyxDQUFDO0lBQ3JDLENBQUM7SUFFRCxHQUFHLENBQUMsUUFBZ0IsRUFBRSxTQUFpQixFQUFFLFFBQWdCO1FBQ3ZELElBQUksSUFBSSxHQUFHLGlCQUFpQixDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUM7UUFDcEQsSUFBSSxHQUFHLEdBQUcsR0FBRyxJQUFJLFVBQVUsUUFBUSxJQUFJLFNBQVMsSUFBSSxRQUFRLEVBQUUsQ0FBQTtRQUM5RCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFRLEdBQUcsQ0FBQyxDQUFDO0lBQ25DLENBQUM7SUFFRCx5REFBeUQ7SUFDekQsc0RBQXNEO0lBQ3RELHFHQUFxRztJQUNyRyw4RUFBOEU7SUFDOUUsa0VBQWtFO0lBQ2xFLHlJQUF5STtJQUN6SSx1QkFBdUI7SUFDdkIsV0FBVztJQUNYLE1BQU07SUFDTixJQUFJO0lBRUoseUJBQXlCLENBQUMsUUFBZ0IsRUFBRSxTQUFpQixFQUFFLFFBQWdCO1FBQzNFLElBQUksSUFBSSxHQUFHLGlCQUFpQixDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUM7UUFDcEQsSUFBSSxHQUFHLEdBQUcsR0FBRyxJQUFJLFVBQVUsUUFBUSxJQUFJLFNBQVMsd0JBQXdCLFFBQVEscUJBQXFCLENBQUE7UUFDckcsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBVSxHQUFHLENBQUMsQ0FBQztJQUN2QyxDQUFDOzt3RUEvQlUsWUFBWTtvREFBWixZQUFZLFdBQVosWUFBWSxtQkFGWCxNQUFNO2tEQUVQLFlBQVk7Y0FIeEIsVUFBVTtlQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCAqIGFzIF8gZnJvbSAnbG9kYXNoLWVzJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IG1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IFByb3BlcnRpZXNTZXJ2aWNlIH0gZnJvbSAnLi4vcHJvcGVydGllcy5zZXJ2aWNlJztcbmltcG9ydCB7IFRyYWNlIH0gZnJvbSAnLi9tb2RlbC90cmFjZSc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIFN0YXRlU2VydmljZSB7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50KSB7IH1cblxuICBsaXN0KGRvbWFpbklkOiBzdHJpbmcsIHRyYWNlVHlwZTogc3RyaW5nKTogT2JzZXJ2YWJsZTxUcmFjZVtdPiB7XG4gICAgbGV0IGhvc3QgPSBQcm9wZXJ0aWVzU2VydmljZS5wcm9wZXJ0aWVzLmF1cmlvblRyYWNrO1xuICAgIGxldCB1cmwgPSBgJHtob3N0fS9zdGF0ZS8ke2RvbWFpbklkfS8ke3RyYWNlVHlwZX1gXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQ8VHJhY2VbXT4odXJsKTtcbiAgfVxuXG4gIGdldChkb21haW5JZDogc3RyaW5nLCB0cmFjZVR5cGU6IHN0cmluZywgb2JqZWN0SWQ6IHN0cmluZyk6IE9ic2VydmFibGU8VHJhY2U+IHtcbiAgICBsZXQgaG9zdCA9IFByb3BlcnRpZXNTZXJ2aWNlLnByb3BlcnRpZXMuYXVyaW9uVHJhY2s7XG4gICAgbGV0IHVybCA9IGAke2hvc3R9L3N0YXRlLyR7ZG9tYWluSWR9LyR7dHJhY2VUeXBlfS8ke29iamVjdElkfWBcbiAgICByZXR1cm4gdGhpcy5odHRwLmdldDxUcmFjZT4odXJsKTtcbiAgfVxuXG4gIC8vIGdldEJ5RG9tYWlucyhkb21haW5zOiBzdHJpbmdbXSk6IE9ic2VydmFibGU8VHJhY2VbXT4ge1xuICAvLyAgIGlmIChQcm9wZXJ0aWVzU2VydmljZS5wcm9wZXJ0aWVzLnRyYWNraW5nc21vY2spIHtcbiAgLy8gICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0PFRyYWNlW10+KFByb3BlcnRpZXNTZXJ2aWNlLnByb3BlcnRpZXMudHJhY2tpbmdzbW9jaykucGlwZShtYXAodHJhY2VzID0+IHtcbiAgLy8gICAgICAgdHJhY2VzID0gdHJhY2VzLmZpbHRlcihpdGVtID0+IGRvbWFpbnMuaW5kZXhPZihpdGVtLmRvbWFpbklkKSAhPSAtMSk7XG4gIC8vICAgICAgIGxldCBncm91cGVkID0gXy5ncm91cEJ5KHRyYWNlcywgdHJhY2UgPT4gdHJhY2Uub2JqZWN0SWQpO1xuICAvLyAgICAgICBsZXQgc3RhdGVzID0gT2JqZWN0LmtleXMoZ3JvdXBlZCkubWFwKGtleSA9PiBncm91cGVkW2tleV0pLm1hcChncm91cCA9PiBncm91cC5zb3J0KChvMSwgbzIpID0+IG8yLnRpbWVzdGFtcCAtIG8xLnRpbWVzdGFtcClbMF0pO1xuICAvLyAgICAgICByZXR1cm4gc3RhdGVzO1xuICAvLyAgICAgfSkpO1xuICAvLyAgIH1cbiAgLy8gfVxuXG4gIHNlYXJjaEV4ZWN1dGlvbnNCeVByb2Nlc3MoZG9tYWluSWQ6IHN0cmluZywgdHJhY2VUeXBlOiBzdHJpbmcsIG9iamVjdElkOiBzdHJpbmcpOiBPYnNlcnZhYmxlPFRyYWNlW10+IHtcbiAgICAgIGxldCBob3N0ID0gUHJvcGVydGllc1NlcnZpY2UucHJvcGVydGllcy5hdXJpb25UcmFjaztcbiAgICAgIGxldCB1cmwgPSBgJHtob3N0fS9zdGF0ZS8ke2RvbWFpbklkfS8ke3RyYWNlVHlwZX0/c2VhcmNoPXByb2Nlc3NJZC5lcToke29iamVjdElkfSZzb3J0PXRpbWVzdGFtcDphc2NgXG4gICAgICByZXR1cm4gdGhpcy5odHRwLmdldDxUcmFjZVtdPih1cmwpO1xuICB9XG5cblxufVxuIl19