import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {EmptyRoute} from './empty-route';
import {bladeProxyFactory} from './blade_proxy';
import {ChildLevel1} from './childComponents/child-level-1';

@Component({
    selector: 'my-app',
    templateUrl: './templates/main.html',
    moduleId: module.id,
    directives: [ROUTER_DIRECTIVES]
})

@RouteConfig([
    { path: '/ChildLevel1/...', name: 'ChildLevel1', component: ChildLevel1 },
    //{
    //    path: '/ProxyLevel1/...',
    //    name: 'ProxyLevel1',
    //    component: componentProxyFactory({
    //        path: '/appScripts/widget2',
    //        provide: m => m.Widget2,
    //        routes: [{
    //            path: '/ProxyLevel2/',
    //            name: 'ProxyLevel2',
    //            component: componentProxyFactoryOriginal({
    //                path: '/appScripts/widget3',
    //                provide: m => m.Widget3,
    //                routes: null
    //            })
    //        }]
    //    })
    //},
   { path: '/', name: 'Default', component: EmptyRoute, useAsDefault: true }
])

export class AppComponent { }
