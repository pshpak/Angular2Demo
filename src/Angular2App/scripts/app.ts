import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {EmptyRoute} from './common/empty-route';
import {BladeFactory} from './common/blade/blade-factory';
import {Header} from './common/header/header';
import {Menu} from './common/menu/menu';


var basePath = '/appScripts/';

@Component({
    selector: 'my-app',
    templateUrl: './templates/main.html',
    moduleId: module.id,
    directives: [ROUTER_DIRECTIVES, Header, Menu]
})

@RouteConfig([
    {
        path: '/Parent/...',
        name: 'Parent',
        component: BladeFactory.getBlade({
            path: basePath + 'parent-child-controls/parent-control',
            provide: m => m.ParentControl,
            title: "Parent",
            routes: [{
                path: '/Child/...',
                name: 'Child',
                component: BladeFactory.getBlade({
                    path: basePath + 'parent-child-controls/child-control',
                    provide: m => m.ChildControl,
                    title: 'Child Blade',
                    routes: null
                })
            }]
        })
    },
   { path: '/', name: 'Default', component: EmptyRoute, useAsDefault: true }
])

export class AppComponent { }
