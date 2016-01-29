import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

@Component({
    selector: 'au-main-menu',
    templateUrl: './templates/menu.html',
    moduleId: module.id,
    directives: [ROUTER_DIRECTIVES]
})

export class Menu {
    menuItems = [
        {
            icon: 'home-icon',
            title: 'Home',
            name: 'Parent'
        }
    ];
}