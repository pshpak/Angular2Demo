import {Component, DynamicComponentLoader, Type, ElementRef} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {ComponentProvider} from './componentProvider';
import {EmptyRoute} from './empty-route';

export function bladeProxyFactory(provider: ComponentProvider): Type {
    if (provider.routes) {
        provider.routes = [];
    }

    provider.routes.push({ path: '/', name: 'Default', component: EmptyRoute, useAsDefault: true });

    @Component({
        selector: 'blade-proxy',
        templateUrl: './templates/blade.html',
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

// hack for typescript
interface System {
    import(name: string): any;
}

declare var System: System;