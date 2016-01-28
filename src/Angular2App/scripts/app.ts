import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {ChildLevel1} from './childComponents/child-level-1';
import {EmptyRoute} from './empty-route';

@Component({
    selector: 'my-app',
    templateUrl: './templates/main.html',
    moduleId: module.id,
    directives: [ROUTER_DIRECTIVES]
})

@RouteConfig([
    { path: '/ChildLevel1/...', name: 'ChildLevel1', component: ChildLevel1 },
    { path: '/', name: 'Default', component: EmptyRoute, useAsDefault: true }
])

export class AppComponent { }
