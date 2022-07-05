import { Injectable } from '@angular/core';
import { webSocket } from 'rxjs/webSocket';
import { PropertiesService } from '../properties.service';
import * as i0 from "@angular/core";
export class TrackingWebsocketService {
    constructor() { }
    connect(message) {
        let url = PropertiesService.properties.trackingwebsocket;
        this.myWebSocket = webSocket(url);
        if (message != null) {
            this.myWebSocket.next(message);
        }
        return this.myWebSocket;
    }
    disconnect() {
        if (this.myWebSocket) {
            this.myWebSocket.complete();
        }
    }
}
TrackingWebsocketService.ɵfac = function TrackingWebsocketService_Factory(t) { return new (t || TrackingWebsocketService)(); };
TrackingWebsocketService.ɵprov = i0.ɵɵdefineInjectable({ token: TrackingWebsocketService, factory: TrackingWebsocketService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(TrackingWebsocketService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhY2tpbmctd2Vic29ja2V0LnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZy1iYXNlLWxpYi9zcmMvbGliL2F1cmlvbjIvdHJhY2tpbmctd2Vic29ja2V0LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsU0FBUyxFQUFvQixNQUFNLGdCQUFnQixDQUFDO0FBQzdELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDOztBQU0xRCxNQUFNLE9BQU8sd0JBQXdCO0lBRW5DLGdCQUFnQixDQUFDO0lBSWpCLE9BQU8sQ0FBQyxPQUFPO1FBQ2IsSUFBSSxHQUFHLEdBQUcsaUJBQWlCLENBQUMsVUFBVSxDQUFDLGlCQUFpQixDQUFDO1FBQ3pELElBQUksQ0FBQyxXQUFXLEdBQUcsU0FBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2xDLElBQUksT0FBTyxJQUFJLElBQUksRUFBRTtZQUNuQixJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztTQUNoQztRQUNELE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQztJQUMxQixDQUFDO0lBRUQsVUFBVTtRQUNSLElBQUcsSUFBSSxDQUFDLFdBQVcsRUFBQztZQUNsQixJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsRUFBRSxDQUFDO1NBQzdCO0lBQ0gsQ0FBQzs7Z0dBbkJVLHdCQUF3QjtnRUFBeEIsd0JBQXdCLFdBQXhCLHdCQUF3QixtQkFGdkIsTUFBTTtrREFFUCx3QkFBd0I7Y0FIcEMsVUFBVTtlQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgd2ViU29ja2V0LCBXZWJTb2NrZXRTdWJqZWN0IH0gZnJvbSAncnhqcy93ZWJTb2NrZXQnO1xuaW1wb3J0IHsgUHJvcGVydGllc1NlcnZpY2UgfSBmcm9tICcuLi9wcm9wZXJ0aWVzLnNlcnZpY2UnO1xuaW1wb3J0IHsgVHJhY2UgfSBmcm9tICcuL21vZGVsL3RyYWNlJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgVHJhY2tpbmdXZWJzb2NrZXRTZXJ2aWNlIHtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG15V2ViU29ja2V0OiBXZWJTb2NrZXRTdWJqZWN0PFRyYWNlPjtcblxuICBjb25uZWN0KG1lc3NhZ2UpOiBXZWJTb2NrZXRTdWJqZWN0PFRyYWNlPiB7XG4gICAgbGV0IHVybCA9IFByb3BlcnRpZXNTZXJ2aWNlLnByb3BlcnRpZXMudHJhY2tpbmd3ZWJzb2NrZXQ7XG4gICAgdGhpcy5teVdlYlNvY2tldCA9IHdlYlNvY2tldCh1cmwpO1xuICAgIGlmIChtZXNzYWdlICE9IG51bGwpIHtcbiAgICAgIHRoaXMubXlXZWJTb2NrZXQubmV4dChtZXNzYWdlKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMubXlXZWJTb2NrZXQ7XG4gIH1cblxuICBkaXNjb25uZWN0KCkge1xuICAgIGlmKHRoaXMubXlXZWJTb2NrZXQpe1xuICAgICAgdGhpcy5teVdlYlNvY2tldC5jb21wbGV0ZSgpO1xuICAgIH1cbiAgfVxuXG59XG4iXX0=