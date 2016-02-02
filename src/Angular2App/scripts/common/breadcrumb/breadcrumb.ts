import {Component} from 'angular2/core';
import {IBlade} from '../blade/IBlade'
import {BreadcrumbService} from './BreadcrumbService';

@Component({
    selector: 'au-breadcrumb',
    templateUrl: '/templates/common/breadcrumb/breadcrumb.html'
})

export class Breadcrumb {
    blades: IBlade[];
    constructor(breadcrumbService: BreadcrumbService) {
        this.blades = breadcrumbService.blades;
    }
}