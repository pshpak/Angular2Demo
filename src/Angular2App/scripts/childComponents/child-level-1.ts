import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {ChildLevel2} from './child-level-2';
import {EmptyRoute} from '../empty-route';

@Component({
    templateUrl: './templates/child-level-1.html',
    moduleId: module.id,
    directives: [ROUTER_DIRECTIVES]
})

@RouteConfig([
        {
            path: '/ChildLevel2', name: 'ChildLevel2', component: ChildLevel2, data: {
                content: 'some test content from data',
                component: "Widget",
                path: "/appScripts/childComponents/widget"
            }
        },
    { path: '/', name: 'Default', component: EmptyRoute, useAsDefault: true }
])

export class ChildLevel1 { }