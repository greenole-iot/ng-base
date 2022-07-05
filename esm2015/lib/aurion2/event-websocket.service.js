import { Injectable } from '@angular/core';
import { webSocket } from 'rxjs/webSocket';
import { PropertiesService } from '../properties.service';
import * as i0 from "@angular/core";
export class EventWebsocketService {
    constructor() { }
    connect(message) {
        let url = PropertiesService.properties.eventwebsocket;
        this.myWebSocket = webSocket(url);
        if (message != null) {
            this.myWebSocket.next(message);
        }
        return this.myWebSocket;
    }
    disconnect() {
        this.myWebSocket.complete();
    }
}
EventWebsocketService.ɵfac = function EventWebsocketService_Factory(t) { return new (t || EventWebsocketService)(); };
EventWebsocketService.ɵprov = i0.ɵɵdefineInjectable({ token: EventWebsocketService, factory: EventWebsocketService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(EventWebsocketService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXZlbnQtd2Vic29ja2V0LnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZy1iYXNlLWxpYi9zcmMvbGliL2F1cmlvbjIvZXZlbnQtd2Vic29ja2V0LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsU0FBUyxFQUFvQixNQUFNLGdCQUFnQixDQUFDO0FBQzdELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDOztBQU0xRCxNQUFNLE9BQU8scUJBQXFCO0lBRWhDLGdCQUFnQixDQUFDO0lBSWpCLE9BQU8sQ0FBQyxPQUFPO1FBQ2IsSUFBSSxHQUFHLEdBQUcsaUJBQWlCLENBQUMsVUFBVSxDQUFDLGNBQWMsQ0FBQztRQUN0RCxJQUFJLENBQUMsV0FBVyxHQUFHLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNsQyxJQUFJLE9BQU8sSUFBSSxJQUFJLEVBQUU7WUFDbkIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7U0FDaEM7UUFDRCxPQUFPLElBQUksQ0FBQyxXQUFXLENBQUM7SUFDMUIsQ0FBQztJQUVELFVBQVU7UUFDUixJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQzlCLENBQUM7OzBGQWpCVSxxQkFBcUI7NkRBQXJCLHFCQUFxQixXQUFyQixxQkFBcUIsbUJBRnBCLE1BQU07a0RBRVAscUJBQXFCO2NBSGpDLFVBQVU7ZUFBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IHdlYlNvY2tldCwgV2ViU29ja2V0U3ViamVjdCB9IGZyb20gJ3J4anMvd2ViU29ja2V0JztcbmltcG9ydCB7IFByb3BlcnRpZXNTZXJ2aWNlIH0gZnJvbSAnLi4vcHJvcGVydGllcy5zZXJ2aWNlJztcbmltcG9ydCB7IEV2ZW50IH0gZnJvbSAnLi9tb2RlbC9ldmVudCc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIEV2ZW50V2Vic29ja2V0U2VydmljZSB7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBteVdlYlNvY2tldDogV2ViU29ja2V0U3ViamVjdDxFdmVudD47XG5cbiAgY29ubmVjdChtZXNzYWdlKTogV2ViU29ja2V0U3ViamVjdDxFdmVudD4ge1xuICAgIGxldCB1cmwgPSBQcm9wZXJ0aWVzU2VydmljZS5wcm9wZXJ0aWVzLmV2ZW50d2Vic29ja2V0O1xuICAgIHRoaXMubXlXZWJTb2NrZXQgPSB3ZWJTb2NrZXQodXJsKTtcbiAgICBpZiAobWVzc2FnZSAhPSBudWxsKSB7XG4gICAgICB0aGlzLm15V2ViU29ja2V0Lm5leHQobWVzc2FnZSk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLm15V2ViU29ja2V0O1xuICB9XG5cbiAgZGlzY29ubmVjdCgpIHtcbiAgICB0aGlzLm15V2ViU29ja2V0LmNvbXBsZXRlKCk7XG4gIH1cblxufVxuIl19