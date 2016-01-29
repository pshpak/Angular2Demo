import {Component, View, DynamicComponentLoader, Injector, bind, Type, ElementRef} from 'angular2/core';
import {ComponentProvider} from './component_proxy';


const PROXY_CLASSNAME = 'component-wrapper';
const PROXY_SELECTOR = `.${PROXY_CLASSNAME}`;

export function componentProxyFactoryOriginal(provider: ComponentProvider): Type {
    @Component({
        selector: 'component-proxy',
        bindings: [bind(ComponentProvider).toValue(provider)],
        templateUrl: './templates/component_proxy_original.html',
        moduleId: module.id
    })
    class VirtualComponent {
        constructor(
            el: ElementRef,
            loader: DynamicComponentLoader,
            inj: Injector,
            provider: ComponentProvider) {
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