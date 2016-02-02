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
var emptyRoute_1 = require('../emptyRoute');
var BladeFactory = (function () {
    function BladeFactory() {
    }
    BladeFactory.getBlade = function (config) {
        if (!config.routes) {
            config.routes = [];
        }
        config.routes.push({ path: '/', name: 'Default', component: emptyRoute_1.EmptyRoute, useAsDefault: true });
        var Blade = (function () {
            function Blade(el, loader) {
                this.title = config.title;
                this.maximized = false;
                System.import(config.path)
                    .then(function (m) {
                    loader.loadIntoLocation(config.provide(m), el, 'content');
                });
            }
            Blade.prototype.maximize = function () {
                this.maximized = true;
            };
            Blade.prototype.minimize = function () {
                this.maximized = false;
            };
            Blade = __decorate([
                core_1.Component({
                    selector: 'au-blade',
                    templateUrl: './templates/blade.html',
                    moduleId: module.id,
                    directives: [router_1.ROUTER_DIRECTIVES]
                }),
                router_1.RouteConfig(config.routes), 
                __metadata('design:paramtypes', [core_1.ElementRef, core_1.DynamicComponentLoader])
            ], Blade);
            return Blade;
        })();
        return Blade;
    };
    return BladeFactory;
})();
exports.BladeFactory = BladeFactory;
//# sourceMappingURL=bladeFactory.js.map