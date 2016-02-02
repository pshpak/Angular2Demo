import {Injectable} from 'angular2/core';
import {MenuItem} from './menuItem';

@Injectable()
export class MenuService {
    menuItems: MenuItem[];

    constructor() {
        this.menuItems = [];
    }

    addItem(item: MenuItem) {
        if (!this.menuItems) {
            this.menuItems = [];
        }

        this.menuItems.push(item);
    }
}