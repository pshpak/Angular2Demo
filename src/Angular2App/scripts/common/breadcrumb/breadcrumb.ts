import {Component} from 'angular2/core';
import {BreadcrumbService} from './breadcrumbService';
import {IBlade} from '../blade/IBlade'

@Component({
    selector: 'au-breadcrumb',
    templateUrl: './templates/breadcrumb.html',
    moduleId: module.id,
})

export class Breadcrumb {
    blades: IBlade[];
    constructor(breadcrumbService: BreadcrumbService) {
        this.blades = breadcrumbService.blades;
    }
}