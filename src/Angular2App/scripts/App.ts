﻿import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {Header} from './common/header/Header';
import {BreadcrumbService} from './common/breadcrumb/BreadcrumbService';
import {Menu} from './common/menu/Menu';
import {MenuService} from './common/menu/MenuService';
import {AppRouteConfig} from './common/routing/AppRouteConfig';
import {RouteService} from './common/routing/RouteService';

@Component({
    selector: 'au-app',
    templateUrl: '/templates/main.html',
    directives: [ROUTER_DIRECTIVES, Header, Menu],
    providers: [MenuService, BreadcrumbService, RouteService]
})

@RouteConfig(AppRouteConfig.getRoutes())

export class AppComponent {
    constructor(private menuService: MenuService, private routeService: RouteService) {
        this.initMainMenuItems();
    }

    private initMainMenuItems() {
        this.menuService.addItem({
            icon: 'home-icon',
            title: 'Home',
            routeName: 'Parent'
        });
        this.menuService.addItem({
            icon: 'fa fa-diamond',
            title: 'Style Guide',
            routeName: 'StyleGuide'
        });
    }
}
