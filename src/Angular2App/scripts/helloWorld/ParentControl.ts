﻿import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {BladeConfig} from '../common/blade/BladeConfig';

@Component({
    selector: 'parent-control',
    templateUrl: '/templates/helloWorld/parentControl.html',
    directives: [ROUTER_DIRECTIVES]
})

export class ParentControl {
    constructor(config: BladeConfig) {
        console.log(config);
    }
}