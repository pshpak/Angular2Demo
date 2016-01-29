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
var router_1 = require('angular2/router');
var empty_route_1 = require('./empty-route');
var ComponentProvider = (function () {
    function ComponentProvider() {
    }
    return ComponentProvider;
})();
exports.ComponentProvider = ComponentProvider;
var PROXY_CLASSNAME = 'component-wrapper';
var PROXY_SELECTOR = "." + PROXY_CLASSNAME;
function componentProxyFactory(provider) {
    provider.routes.push({ path: '/', name: 'Default', component: empty_route_1.EmptyRoute, useAsDefault: true });
    var VirtualComponent = (function () {
        function VirtualComponent(el, loader) {
            System.import(provider.path)
                .then(function (m) {
                loader.loadIntoLocation(provider.provide(m), el, 'content');
            });
        }
        VirtualComponent = __decorate([
            core_1.Component({
                selector: 'component-proxy',
                templateUrl: './templates/component_proxy.html',
                moduleId: module.id,
                directives: [router_1.ROUTER_DIRECTIVES]
            }),
            router_1.RouteConfig(provider.routes), 
            __metadata('design:paramtypes', [core_1.ElementRef, core_1.DynamicComponentLoader])
        ], VirtualComponent);
        return VirtualComponent;
    })();
    return VirtualComponent;
}
exports.componentProxyFactory = componentProxyFactory;
//# sourceMappingURL=component_proxy.js.map