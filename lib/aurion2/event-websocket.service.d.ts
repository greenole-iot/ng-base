import { WebSocketSubject } from 'rxjs/webSocket';
import { Event } from './model/event';
import * as i0 from "@angular/core";
export declare class EventWebsocketService {
    constructor();
    myWebSocket: WebSocketSubject<Event>;
    connect(message: any): WebSocketSubject<Event>;
    disconnect(): void;
    static ɵfac: i0.ɵɵFactoryDef<EventWebsocketService, never>;
    static ɵprov: i0.ɵɵInjectableDef<EventWebsocketService>;
}
