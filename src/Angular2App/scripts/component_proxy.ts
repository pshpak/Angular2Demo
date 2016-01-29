import {Component, DynamicComponentLoader, Type, ElementRef} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {EmptyRoute} from './empty-route';

export class ComponentProvider {
    path: string;
    provide: { (module: any): any };
    routes: any[];
}

const PROXY_CLASSNAME = 'component-wrapper';
const PROXY_SELECTOR = `.${PROXY_CLASSNAME}`;

export function componentProxyFactory(provider: ComponentProvider): Type {

    provider.routes.push({ path: '/', name: 'Default', component: EmptyRoute, useAsDefault: true });

    @Component({
        selector: 'component-proxy',
        templateUrl: './templates/component_proxy.html',
        moduleId: module.id,
        directives: [ROUTER_DIRECTIVES]
    })
    @RouteConfig(provider.routes)

    class VirtualComponent {
        constructor(
            el: ElementRef,
            loader: DynamicComponentLoader
           ) {
            System.import(provider.path)
                .then(m => {
                    loader.loadIntoLocation(provider.provide(m), el, 'content');
                });
        }
    }

    return VirtualComponent;
}

// hack
interface System {
    import(name: string): any;
}

declare var System: System;