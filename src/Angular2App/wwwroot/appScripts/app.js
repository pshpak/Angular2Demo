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
var empty_route_1 = require('./common/empty-route');
var blade_factory_1 = require('./common/blade/blade-factory');
var header_1 = require('./common/header/header');
var menu_1 = require('./common/menu/menu');
var basePath = '/appScripts/';
var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            templateUrl: './templates/main.html',
            moduleId: module.id,
            directives: [router_1.ROUTER_DIRECTIVES, header_1.Header, menu_1.Menu]
        }),
        router_1.RouteConfig([
            {
                path: '/Parent/...',
                name: 'Parent',
                component: blade_factory_1.BladeFactory.getBlade({
                    path: basePath + 'parent-child-controls/parent-control',
                    provide: function (m) { return m.ParentControl; },
                    title: "Parent",
                    routes: [{
                            path: '/Child/...',
                            name: 'Child',
                            component: blade_factory_1.BladeFactory.getBlade({
                                path: basePath + 'parent-child-controls/child-control',
                                provide: function (m) { return m.ChildControl; },
                                title: 'Child Blade',
                                routes: null
                            })
                        }]
                })
            },
            { path: '/', name: 'Default', component: empty_route_1.EmptyRoute, useAsDefault: true }
        ]), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
})();
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.js.map