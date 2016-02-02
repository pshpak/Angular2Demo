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
var header_1 = require('./common/header/header');
var menu_1 = require('./common/menu/menu');
var menuService_1 = require('./common/menu/menuService');
var appRouteConfig_1 = require('./appRouteConfig');
var AppComponent = (function () {
    function AppComponent(menuService) {
        this.menuService = menuService;
        this.initMainMenuItems();
    }
    AppComponent.prototype.initMainMenuItems = function () {
        this.menuService.addMenuItem({
            icon: 'home-icon',
            title: 'Home',
            routeName: 'Parent'
        });
        this.menuService.addMenuItem({
            icon: 'home-icon',
            title: 'Home 2',
            routeName: 'Parent2'
        });
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'au-app',
            templateUrl: './templates/main.html',
            moduleId: module.id,
            directives: [router_1.ROUTER_DIRECTIVES, header_1.Header, menu_1.Menu],
            providers: [menuService_1.MenuService]
        }),
        router_1.RouteConfig(appRouteConfig_1.AppRouteConfig.getRoutes()), 
        __metadata('design:paramtypes', [menuService_1.MenuService])
    ], AppComponent);
    return AppComponent;
})();
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.js.map