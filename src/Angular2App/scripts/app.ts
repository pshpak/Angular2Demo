import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {Header} from './common/header/header';
import {Menu} from './common/menu/menu';
import {MenuService} from './common/menu/menuService';
import {BreadcrumbService} from './common/breadcrumb/breadcrumbService';
import {AppRouteConfig} from './appRouteConfig';

@Component({
    selector: 'au-app',
    templateUrl: './templates/main.html',
    moduleId: module.id,
    directives: [ROUTER_DIRECTIVES, Header, Menu],
    providers: [MenuService, BreadcrumbService]
})

@RouteConfig(AppRouteConfig.getRoutes())

export class AppComponent {
    constructor(private menuService: MenuService) {
        this.initMainMenuItems();
    }

    private initMainMenuItems() {
        this.menuService.addItem({
            icon: 'home-icon',
            title: 'Home',
            routeName: 'Parent'
        });
        this.menuService.addItem({
            icon: 'home-icon',
            title: 'Home 2',
            routeName: 'Parent2'
        });
    }
}
