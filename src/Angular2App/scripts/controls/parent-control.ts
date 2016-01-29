import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

@Component({
    selector: 'parent-control',
    templateUrl: './templates/parent-control.html',
    moduleId: module.id,
    directives: [ROUTER_DIRECTIVES]
})

export class ParentControl {
}