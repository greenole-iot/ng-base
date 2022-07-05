import { Inject, Injectable, Optional } from '@angular/core';
import { throwError as observableThrowError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
export class PropertiesService {
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
            return observableThrowError(e);
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
PropertiesService.ɵfac = function PropertiesService_Factory(t) { return new (t || PropertiesService)(i0.ɵɵinject('propertiesUrl', 8), i0.ɵɵinject(i1.HttpClient)); };
PropertiesService.ɵprov = i0.ɵɵdefineInjectable({ token: PropertiesService, factory: PropertiesService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(PropertiesService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: Optional
            }, {
                type: Inject,
                args: ['propertiesUrl']
            }] }, { type: i1.HttpClient }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvcGVydGllcy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvbmctYmFzZS1saWIvc3JjL2xpYi9wcm9wZXJ0aWVzLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsT0FBTyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzdELE9BQU8sRUFBYyxVQUFVLElBQUksb0JBQW9CLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDdEUsT0FBTyxFQUFFLFVBQVUsRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7O0FBS2pELE1BQU0sT0FBTyxpQkFBaUI7SUFNNUIsWUFBeUQsYUFBcUIsRUFBVSxJQUFnQjtRQUEvQyxrQkFBYSxHQUFiLGFBQWEsQ0FBUTtRQUFVLFNBQUksR0FBSixJQUFJLENBQVk7UUFFdEcsSUFBSSxJQUFJLENBQUMsYUFBYSxJQUFJLElBQUksRUFBRTtZQUM5QixJQUFJLENBQUMsYUFBYSxHQUFHLGlCQUFpQixDQUFDLHVCQUF1QixDQUFDO1lBQy9ELE9BQU8sQ0FBQyxJQUFJLENBQUMsd0RBQXdELEdBQUcsSUFBSSxDQUFDLGFBQWEsR0FBRyxHQUFHLENBQUMsQ0FBQztTQUNuRzthQUFNO1lBQ0wsT0FBTyxDQUFDLElBQUksQ0FBQyxrQ0FBa0MsR0FBRyxJQUFJLENBQUMsYUFBYSxHQUFHLEdBQUcsQ0FBQyxDQUFDO1NBQzdFO0lBQ0gsQ0FBQztJQUVELGdCQUFnQixDQUFDLGFBQXFCO1FBQ3BDLElBQUksQ0FBQyxhQUFhLEdBQUcsYUFBYSxDQUFDO1FBQ25DLE9BQU8sQ0FBQyxJQUFJLENBQUMsaUNBQWlDLEdBQUcsYUFBYSxDQUFDLENBQUM7SUFDbEUsQ0FBQztJQUVELGNBQWMsQ0FBQyxJQUFZO1FBQ3pCLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQU0sRUFBRSxFQUFFO1lBQ3BELE9BQU8sQ0FBQyxLQUFLLENBQUMseUJBQXlCLEdBQUcsSUFBSSxHQUFHLGFBQWEsQ0FBQyxDQUFDO1lBQ2hFLE9BQU8sb0JBQW9CLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDakMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNOLENBQUM7SUFFRDs7O09BR0c7SUFDSCxZQUFZO1FBQ1YsT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUNqRCxDQUFDO0lBRUQsaUJBQWlCO1FBQ2YsT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxFQUFFO1lBQ25FLGlCQUFpQixDQUFDLFVBQVUsR0FBRyxVQUFVLENBQUM7UUFDNUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNOLENBQUM7O0FBdEN1Qix5Q0FBdUIsR0FBRyxrQ0FBa0MsQ0FBQztBQUV2RSw0QkFBVSxHQUFRLElBQUksQ0FBQztrRkFKMUIsaUJBQWlCLGNBTUksZUFBZTt5REFOcEMsaUJBQWlCLFdBQWpCLGlCQUFpQixtQkFGaEIsTUFBTTtrREFFUCxpQkFBaUI7Y0FIN0IsVUFBVTtlQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25COztzQkFPYyxRQUFROztzQkFBSSxNQUFNO3VCQUFDLGVBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgSW5qZWN0LCBJbmplY3RhYmxlLCBPcHRpb25hbCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgdGhyb3dFcnJvciBhcyBvYnNlcnZhYmxlVGhyb3dFcnJvciB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgY2F0Y2hFcnJvciwgbWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBQcm9wZXJ0aWVzU2VydmljZSB7XG5cbiAgcHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgREVGQVVMVF9BUFBfQ09ORklHX1BBVEggPSBcImFzc2V0cy9hcHBDb25maWcucHJvcGVydGllcy5qc29uXCI7XG5cbiAgcHVibGljIHN0YXRpYyBwcm9wZXJ0aWVzOiBhbnkgPSBudWxsO1xuXG4gIGNvbnN0cnVjdG9yKEBPcHRpb25hbCgpIEBJbmplY3QoJ3Byb3BlcnRpZXNVcmwnKSBwcml2YXRlIHByb3BlcnRpZXNVcmw6IHN0cmluZywgcHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50KSB7XG5cbiAgICBpZiAodGhpcy5wcm9wZXJ0aWVzVXJsID09IG51bGwpIHtcbiAgICAgIHRoaXMucHJvcGVydGllc1VybCA9IFByb3BlcnRpZXNTZXJ2aWNlLkRFRkFVTFRfQVBQX0NPTkZJR19QQVRIO1xuICAgICAgY29uc29sZS5pbmZvKFwiRGlkIG5vdCByZWNlaXZlIHByb3BlcnRpZXNVcmwgcGF0aC4gVXNpbmcgZGVmYXVsdCBhcyAnXCIgKyB0aGlzLnByb3BlcnRpZXNVcmwgKyBcIidcIik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnNvbGUuaW5mbyhcIlJlY2VpdmVkIHByb3BlcnRpZXNVcmwgcGF0aCBhcyAnXCIgKyB0aGlzLnByb3BlcnRpZXNVcmwgKyBcIidcIik7XG4gICAgfVxuICB9XG5cbiAgc2V0UHJvcGVydGllc1VybChwcm9wZXJ0aWVzVXJsOiBzdHJpbmcpIHtcbiAgICB0aGlzLnByb3BlcnRpZXNVcmwgPSBwcm9wZXJ0aWVzVXJsO1xuICAgIGNvbnNvbGUuaW5mbyhcIlByb3BlcnRpZXNVcmwgaGFzIGJlZW4gc2V0IHRvOiBcIiArIHByb3BlcnRpZXNVcmwpO1xuICB9XG5cbiAgcmVhZFByb3BlcnRpZXMocGF0aDogc3RyaW5nKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICByZXR1cm4gdGhpcy5odHRwLmdldChwYXRoKS5waXBlKGNhdGNoRXJyb3IoKGU6IGFueSkgPT4ge1xuICAgICAgY29uc29sZS5lcnJvcihcIkVSUk9SOiBQcm9wZXJ0aWVzIGZpbGUgXCIgKyBwYXRoICsgXCIgbm90IGZvdW5kLlwiKTtcbiAgICAgIHJldHVybiBvYnNlcnZhYmxlVGhyb3dFcnJvcihlKTtcbiAgICB9KSk7XG4gIH1cblxuICAvKipcbiAgICogdHJ5IHRvIGdldCBwcm9wZXJ0aWVzIHVybCBpbmplY3QgaW4gZmluYWwgYXBwXG4gICAqIGluIGNhc2UgaXQgaXMgbWlzc2luZywgd2Ugd2lsbCB1c2UgREVGQVVMVF9BUFBfQ09ORklHX1BBVEhcbiAgICovXG4gIGdldEFwcENvbmZpZygpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIHJldHVybiB0aGlzLnJlYWRQcm9wZXJ0aWVzKHRoaXMucHJvcGVydGllc1VybCk7XG4gIH1cblxuICByZWFkQWxsUHJvcGVydGllcygpOiBPYnNlcnZhYmxlPHZvaWQ+IHtcbiAgICByZXR1cm4gdGhpcy5yZWFkUHJvcGVydGllcyh0aGlzLnByb3BlcnRpZXNVcmwpLnBpcGUobWFwKHByb3BlcnRpZXMgPT4ge1xuICAgICAgUHJvcGVydGllc1NlcnZpY2UucHJvcGVydGllcyA9IHByb3BlcnRpZXM7XG4gICAgfSkpO1xuICB9XG5cbn1cbiJdfQ==