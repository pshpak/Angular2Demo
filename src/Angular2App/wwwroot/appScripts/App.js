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
var Header_1 = require('./common/header/Header');
var BreadcrumbService_1 = require('./common/breadcrumb/BreadcrumbService');
var Menu_1 = require('./common/menu/Menu');
var MenuService_1 = require('./common/menu/MenuService');
var AppRouteConfig_1 = require('./common/routing/AppRouteConfig');
var RouteService_1 = require('./common/routing/RouteService');
var AppComponent = (function () {
    function AppComponent(menuService, routeService) {
        this.menuService = menuService;
        this.routeService = routeService;
        this.initMainMenuItems();
    }
    AppComponent.prototype.initMainMenuItems = function () {
        this.menuService.addItem({
            icon: 'home-icon',
            title: 'Home',
            routeName: 'Parent'
        });
        this.menuService.addItem({
            icon: 'fa fa-diamond',
            title: 'Style Guide',
            routeName: 'StyleGuide'
        });
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'au-app',
            templateUrl: '/templates/main.html',
            directives: [router_1.ROUTER_DIRECTIVES, Header_1.Header, Menu_1.Menu],
            providers: [MenuService_1.MenuService, BreadcrumbService_1.BreadcrumbService, RouteService_1.RouteService]
        }),
        router_1.RouteConfig(AppRouteConfig_1.AppRouteConfig.getRoutes()), 
        __metadata('design:paramtypes', [MenuService_1.MenuService, RouteService_1.RouteService])
    ], AppComponent);
    return AppComponent;
})();
exports.AppComponent = AppComponent;
//# sourceMappingURL=App.js.map