import {Injectable, EventEmitter} from 'angular2/core';
import {Router} from 'angular2/router';

@Injectable()
export class RouteService {
    routeChangedEvent: EventEmitter<string>;
    constructor(private router: Router) {
        this.routeChangedEvent = new EventEmitter<string>()
        router.subscribe((value) => {
            this.routeChangedEvent.emit(value);
        });
    }
}
