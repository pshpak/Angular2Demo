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
var MenuService_1 = require('./MenuService');
var RouteService_1 = require('../routing/RouteService');
require('rxjs/add/operator/distinctUntilChanged');
require('rxjs/add/operator/filter');
require('rxjs/add/operator/map');
var Menu = (function () {
    function Menu(menuService, routeService) {
        var _this = this;
        this.menuService = menuService;
        this.routeService = routeService;
        this.menuItems = menuService.menuItems;
        this.currentItem = null;
        this.routeChangedSubscription = this.routeService.routeChangedEvent
            .map(function (path) {
            if (!path) {
                return null;
            }
            var pathParts = path.split('/');
            if (pathParts.length == 0) {
                return null;
            }
            return pathParts[0];
        })
            .distinctUntilChanged()
            .filter(function (rootPathPart) { return rootPathPart != _this.currentItem; })
            .distinctUntilChanged()
            .subscribe(function (rootPathPart) {
            _this.currentItem = rootPathPart;
        });
    }
    Menu.prototype.ngOnDestroy = function () {
        this.routeChangedSubscription.unsubscribe();
    };
    Menu = __decorate([
        core_1.Component({
            selector: 'au-main-menu',
            templateUrl: '/templates/common/menu/menu.html',
            directives: [router_1.ROUTER_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [MenuService_1.MenuService, RouteService_1.RouteService])
    ], Menu);
    return Menu;
})();
exports.Menu = Menu;
//# sourceMappingURL=Menu.js.map