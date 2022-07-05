import { WebSocketSubject } from 'rxjs/webSocket';
import { Trace } from './model/trace';
import * as i0 from "@angular/core";
export declare class TrackingWebsocketService {
    constructor();
    myWebSocket: WebSocketSubject<Trace>;
    connect(message: any): WebSocketSubject<Trace>;
    disconnect(): void;
    static ɵfac: i0.ɵɵFactoryDef<TrackingWebsocketService, never>;
    static ɵprov: i0.ɵɵInjectableDef<TrackingWebsocketService>;
}
