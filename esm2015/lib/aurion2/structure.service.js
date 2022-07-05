import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { tap } from 'rxjs/operators';
import { PropertiesService } from '../properties.service';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
export class StructureService {
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
StructureService.ɵfac = function StructureService_Factory(t) { return new (t || StructureService)(i0.ɵɵinject(i1.HttpClient)); };
StructureService.ɵprov = i0.ɵɵdefineInjectable({ token: StructureService, factory: StructureService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(StructureService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: i1.HttpClient }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZy1iYXNlLWxpYi9zcmMvbGliL2F1cmlvbjIvc3RydWN0dXJlLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQWMsRUFBRSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3RDLE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNyQyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQzs7O0FBSzFELE1BQU0sT0FBTyxnQkFBZ0I7SUFFM0IsWUFBb0IsSUFBZ0I7UUFBaEIsU0FBSSxHQUFKLElBQUksQ0FBWTtJQUFJLENBQUM7SUFJekMsR0FBRztRQUNELElBQUksaUJBQWlCLENBQUMsVUFBVSxDQUFDLGNBQWMsRUFBRTtZQUMvQyxJQUFJLElBQUksQ0FBQyxtQkFBbUIsRUFBRTtnQkFDNUIsT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLENBQUM7YUFDckM7WUFDRCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFRLGlCQUFpQixDQUFDLFVBQVUsQ0FBQyxjQUFjLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxFQUFFO2dCQUN0RixJQUFJLENBQUMsbUJBQW1CLEdBQUcsR0FBRyxDQUFDO1lBQ2pDLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDTDtJQUNILENBQUM7SUFFRCxHQUFHLENBQUMsU0FBYztRQUNoQixJQUFJLGlCQUFpQixDQUFDLFVBQVUsQ0FBQyxjQUFjLEVBQUU7WUFDL0MsSUFBSSxDQUFDLElBQUksQ0FBQyxtQkFBbUIsRUFBRTtnQkFDN0IsSUFBSSxDQUFDLG1CQUFtQixHQUFHLEVBQUUsQ0FBQzthQUMvQjtZQUNELElBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRSxJQUFJLFNBQVMsQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUM5RSxJQUFJLEdBQUcsSUFBSSxDQUFDLENBQUMsRUFBRTtnQkFDYixJQUFJLENBQUMsbUJBQW1CLENBQUMsTUFBTSxDQUFDLEdBQUcsRUFBRSxDQUFDLEVBQUUsU0FBUyxDQUFDLENBQUM7YUFDcEQ7aUJBQU07Z0JBQ0wsSUFBSSxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQzthQUMxQztZQUNELE9BQU8sRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ2Q7SUFDSCxDQUFDOztnRkE5QlUsZ0JBQWdCO3dEQUFoQixnQkFBZ0IsV0FBaEIsZ0JBQWdCLG1CQUZmLE1BQU07a0RBRVAsZ0JBQWdCO2NBSDVCLFVBQVU7ZUFBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBvZiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgdGFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgUHJvcGVydGllc1NlcnZpY2UgfSBmcm9tICcuLi9wcm9wZXJ0aWVzLnNlcnZpY2UnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBTdHJ1Y3R1cmVTZXJ2aWNlIHtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQpIHsgfVxuXG4gIHN0cnVjdHVyZXNNb2NrQ2FjaGU6IGFueVtdO1xuXG4gIGdldCgpOiBPYnNlcnZhYmxlPGFueVtdPiB7XG4gICAgaWYgKFByb3BlcnRpZXNTZXJ2aWNlLnByb3BlcnRpZXMuc3RydWN0dXJlc21vY2spIHtcbiAgICAgIGlmICh0aGlzLnN0cnVjdHVyZXNNb2NrQ2FjaGUpIHtcbiAgICAgICAgcmV0dXJuIG9mKHRoaXMuc3RydWN0dXJlc01vY2tDYWNoZSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gdGhpcy5odHRwLmdldDxhbnlbXT4oUHJvcGVydGllc1NlcnZpY2UucHJvcGVydGllcy5zdHJ1Y3R1cmVzbW9jaykucGlwZSh0YXAocmVzID0+IHtcbiAgICAgICAgdGhpcy5zdHJ1Y3R1cmVzTW9ja0NhY2hlID0gcmVzO1xuICAgICAgfSkpO1xuICAgIH1cbiAgfVxuXG4gIHNldChzdHJ1Y3R1cmU6IGFueSk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgaWYgKFByb3BlcnRpZXNTZXJ2aWNlLnByb3BlcnRpZXMuc3RydWN0dXJlc21vY2spIHtcbiAgICAgIGlmICghdGhpcy5zdHJ1Y3R1cmVzTW9ja0NhY2hlKSB7XG4gICAgICAgIHRoaXMuc3RydWN0dXJlc01vY2tDYWNoZSA9IFtdO1xuICAgICAgfVxuICAgICAgbGV0IGlkeCA9IHRoaXMuc3RydWN0dXJlc01vY2tDYWNoZS5maW5kSW5kZXgoaXRlbSA9PiBpdGVtLmlkID09IHN0cnVjdHVyZS5pZCk7XG4gICAgICBpZiAoaWR4ICE9IC0xKSB7XG4gICAgICAgIHRoaXMuc3RydWN0dXJlc01vY2tDYWNoZS5zcGxpY2UoaWR4LCAwLCBzdHJ1Y3R1cmUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5zdHJ1Y3R1cmVzTW9ja0NhY2hlLnB1c2goc3RydWN0dXJlKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBvZigxKTtcbiAgICB9XG4gIH1cblxufVxuIl19