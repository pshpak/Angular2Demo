import {Component, OnDestroy} from 'angular2/core';
import {ROUTER_DIRECTIVES, Router} from 'angular2/router';
import {MenuService} from './MenuService';
import {RouteService} from '../routing/RouteService';
import {Subscription} from 'rxjs/Subscription';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';

@Component({
    selector: 'au-main-menu',
    templateUrl: '/templates/common/menu/menu.html',
    directives: [ROUTER_DIRECTIVES]
})

export class Menu implements OnDestroy {
    menuItems: any[];
    currentItem: string;
    private routeChangedSubscription: Subscription<string>;


    constructor(private menuService: MenuService, private routeService: RouteService) {
        this.menuItems = menuService.menuItems;
        this.currentItem = null;

        this.routeChangedSubscription = this.routeService.routeChangedEvent
            .distinctUntilChanged()
            .map((path) => {
                if (!path) {
                    return null;
                }
                var pathParts = path.split('/');
                if (pathParts.length == 0) {
                    return null;
                }

                return pathParts[0];
            })
            .filter((rootPathPart) => rootPathPart != this.currentItem)
            .subscribe((rootPathPart) => {
                this.currentItem = rootPathPart;
            });
    }

    ngOnDestroy() {
        this.routeChangedSubscription.unsubscribe();
    }
}