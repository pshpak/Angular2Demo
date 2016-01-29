import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {EmptyRoute} from './empty-route';
import {bladeProxyFactory} from './blade-proxy';

@Component({
    selector: 'my-app',
    templateUrl: './templates/main.html',
    moduleId: module.id,
    directives: [ROUTER_DIRECTIVES]
})

@RouteConfig([
    {
        path: '/Parent/...',
        name: 'Parent',
        component: bladeProxyFactory({
            path: '/appScripts/controls/parent-control',
            provide: m => m.ParentControl,
            routes: [{
                path: '/Child/...',
                name: 'Child',
                component: bladeProxyFactory({
                    path: '/appScripts/controls/child-control',
                    provide: m => m.ChildControl,
                    routes: null
                })
            }]
        })
    },
   { path: '/', name: 'Default', component: EmptyRoute, useAsDefault: true }
])

export class AppComponent { }
