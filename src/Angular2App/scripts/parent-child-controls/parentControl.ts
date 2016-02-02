import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {BladeConfig} from '../common/blade/bladeConfig';

@Component({
    selector: 'parent-control',
    templateUrl: './templates/parent-control.html',
    moduleId: module.id,
    directives: [ROUTER_DIRECTIVES]
})

export class ParentControl {
    constructor(config: BladeConfig) {
        console.log(config);
    }
}