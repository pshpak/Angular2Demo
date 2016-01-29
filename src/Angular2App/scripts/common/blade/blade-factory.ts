import {Component, DynamicComponentLoader, ElementRef} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {BladeConfig} from './blade-config';
import {EmptyRoute} from '../empty-route';

export class BladeFactory {
    static getBlade(config: BladeConfig) {
        if (!config.routes) {
            config.routes = [];
        }
        config.routes.push({ path: '/', name: 'Default', component: EmptyRoute, useAsDefault: true });

        @Component({
            selector: 'blade-proxy',
            templateUrl: './templates/blade.html',
            moduleId: module.id,
            directives: [ROUTER_DIRECTIVES]
        })
        @RouteConfig(config.routes)

        class Blade {
            constructor(
                el: ElementRef,
                loader: DynamicComponentLoader
            ) {
                System.import(config.path)
                    .then(m => {
                        loader.loadIntoLocation(config.provide(m), el, 'content');
                    });
            }
        }

        return Blade;
    }
}

// hack for typescript
interface System {
    import(name: string): any;
}

declare var System: System;