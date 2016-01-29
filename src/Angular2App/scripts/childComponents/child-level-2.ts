import {Component, DynamicComponentLoader, ElementRef} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, RouteData} from 'angular2/router';


@Component({
    templateUrl: './templates/child-level-2.html',
    moduleId: module.id,
})

export class ChildLevel2 {
    routingContent: string;

    constructor(loader: DynamicComponentLoader, elementRef: ElementRef, routeData: RouteData) {
        this.routingContent = routeData.data['content'];
        System.import(routeData.data['path'])
            .then(componentModule => componentModule[routeData.data['component']])
            .then(e => loader.loadIntoLocation(e, elementRef, 'dynamicContent'));
    }
}


// hack
interface System {
    import(name: string): any;
}

declare var System: System;