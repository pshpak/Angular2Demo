import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, Router} from 'angular2/router';
import {MenuService} from './MenuService';

@Component({
    selector: 'au-main-menu',
    templateUrl: '/templates/common/menu/menu.html',
    directives: [ROUTER_DIRECTIVES]
})

export class Menu {
    menuItems: any[];
    currentItem: string;

    constructor(private menuService: MenuService, private router: Router) {
        this.menuItems = menuService.menuItems;
        this.currentItem = '';

        router.subscribe((value) => {
            if (!value) {
                this.currentItem = null;
                return;
            }

            var pathParts = value.split('/');
            if (!pathParts || !pathParts.length) {
                this.currentItem = null;
                return;
            }

            var root = pathParts[0];
            if (this.currentItem != root) {
                this.currentItem = root;
            }
        });
    }
}