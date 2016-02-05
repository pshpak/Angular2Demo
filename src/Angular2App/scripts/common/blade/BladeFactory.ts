/// <reference path="../../../typings/tsd.d.ts" />
import {Component, DynamicComponentLoader, ElementRef, provide, OnInit, OnDestroy} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {IBlade } from './IBlade';
import {BladeConfig} from './BladeConfig';
import {EmptyRoute} from '../routing/EmptyRoute';
import {BreadcrumbService} from '../breadcrumb/BreadcrumbService';
declare var $: any;


export class BladeFactory {

    static getBlade(bladeConfiguration: BladeConfig) {
        if (!bladeConfiguration.routes) {
            bladeConfiguration.routes = [];
        }
        bladeConfiguration.routes.push({ path: '/', name: 'Default', component: EmptyRoute, useAsDefault: true });

        @Component({
            selector: 'au-blade',
            templateUrl: '/templates/common/blade/blade.html',
            directives: [ROUTER_DIRECTIVES],
            providers: [provide(BladeConfig, { useValue: bladeConfiguration })]
        })
        @RouteConfig(bladeConfiguration.routes)

        class Blade implements OnInit, OnDestroy, IBlade {
            title: string;
            maximized: boolean;
            private $bladeElement: any;

            constructor(private breadcrumbService: BreadcrumbService, config: BladeConfig, loader: DynamicComponentLoader, el: ElementRef) {

                this.title = config.title
                this.maximized = false

                System.import(config.componentPath)
                    .then(m => {
                        loader.loadIntoLocation(config.provide(m), el, 'content');
                    });

                this.$bladeElement = $(el.nativeElement).children('.blade');
            }

            maximize() {
                this.maximized = true;
            }

            minimize() {
                this.maximized = false;
            }

            ngOnInit() {
                this.breadcrumbService.addItem(this);
            }

            ngOnDestroy() {
                this.breadcrumbService.removeItem(this);
            }

            focus() {
                var scrollLeft = Math.round(this.$bladeElement.offset().left - $('#main-content').offset().left);
                $('#main-container').animate({ scrollLeft: scrollLeft + 'px' }, 250);
            }
        }

        return Blade;
    }
}
