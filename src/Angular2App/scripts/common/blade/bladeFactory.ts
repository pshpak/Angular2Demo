import {Component, DynamicComponentLoader, ElementRef, provide} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {BladeConfig} from './bladeConfig';
import {EmptyRoute} from '../emptyRoute';
declare var System: any;

export class BladeFactory {

    static getBlade(bladeConfiguration: BladeConfig) {
        if (!bladeConfiguration.routes) {
            bladeConfiguration.routes = [];
        }
        bladeConfiguration.routes.push({ path: '/', name: 'Default', component: EmptyRoute, useAsDefault: true });

        @Component({
            selector: 'au-blade',
            templateUrl: './templates/blade.html',
            moduleId: module.id,
            directives: [ROUTER_DIRECTIVES],
            providers: [provide(BladeConfig, { useValue: bladeConfiguration })]
        })
        @RouteConfig(bladeConfiguration.routes)

        class Blade {
            title: string;
            maximized: boolean;

            constructor(config: BladeConfig, el: ElementRef, loader: DynamicComponentLoader) {

                this.title = config.title
                this.maximized = false

                System.import(config.componentPath)
                    .then(m => {
                        loader.loadIntoLocation(config.provide(m), el, 'content');
                    });
            }

            maximize() {
                this.maximized = true;
            }

            minimize() {
                this.maximized = false;
            }
        }

        return Blade;
    }
}
