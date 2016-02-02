import {Injectable} from 'angular2/core';
import {IBlade} from '../blade/IBlade'

@Injectable()
export class BreadcrumbService {
    blades: IBlade[];

    constructor() {
        this.blades = [];
    }

    addItem(item: IBlade) {
        if (!this.blades) {
            this.blades = [];
        }

        this.blades.push(item);
    }


    removeItem(item: IBlade) {
        if (!this.blades) {
            return;
        }

        var index = this.blades.indexOf(item);
        if (index < 0) {
            return;
        }

        this.blades.splice(index, this.blades.length - index);
    }
}

