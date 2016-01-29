var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('angular2/core');
var component_proxy_1 = require('./component_proxy');
var PROXY_CLASSNAME = 'component-wrapper';
var PROXY_SELECTOR = "." + PROXY_CLASSNAME;
function componentProxyFactoryOriginal(provider) {
    var VirtualComponent = (function () {
        function VirtualComponent(el, loader, inj, provider) {
            System.import(provider.path)
                .then(function (m) {
                loader.loadIntoLocation(provider.provide(m), el, 'content');
            });
        }
        VirtualComponent = __decorate([
            core_1.Component({
                selector: 'component-proxy',
                bindings: [core_1.bind(component_proxy_1.ComponentProvider).toValue(provider)],
                templateUrl: './templates/component_proxy_original.html',
                moduleId: module.id
            }), 
            __metadata('design:paramtypes', [core_1.ElementRef, core_1.DynamicComponentLoader, core_1.Injector, component_proxy_1.ComponentProvider])
        ], VirtualComponent);
        return VirtualComponent;
    })();
    return VirtualComponent;
}
exports.componentProxyFactoryOriginal = componentProxyFactoryOriginal;
//# sourceMappingURL=component_proxy_original.js.map