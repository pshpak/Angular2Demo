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
var RouteService_1 = require('../common/routing/RouteService');
require('rxjs/add/operator/distinctUntilChanged');
require('rxjs/add/operator/filter');
require('rxjs/add/operator/map');
var StyleGuide = (function () {
    function StyleGuide(routeService) {
        var _this = this;
        this.routeService = routeService;
        this.items = [
            {
                title: "Buttons",
                description: "This is an optional description",
                path: 'Child1'
            },
            {
                title: "Inputs",
                path: 'Child2'
            },
            {
                title: "Table",
                path: 'Child3'
            },
            {
                title: "Grid",
                path: 'Child4'
            },
            {
                title: "Wizard",
                path: 'Child5'
            }
        ];
        this.currentPath = this.getChildPath(this.routeService.lastPath);
        this.routeChangedSubscription = this.routeService.routeChangedEvent
            .map(function (path) { return _this.getChildPath(path); })
            .filter(function (childPath) { return childPath != _this.currentPath; })
            .distinctUntilChanged()
            .subscribe(function (childPath) {
            _this.currentPath = childPath;
        });
    }
    StyleGuide.prototype.getChildPath = function (path) {
        if (!path) {
            return null;
        }
        var pathParts = path.split('/');
        if (pathParts.length < 2) {
            return null;
        }
        return pathParts[1];
    };
    StyleGuide.prototype.ngOnDestroy = function () {
        this.routeChangedSubscription.unsubscribe();
    };
    StyleGuide = __decorate([
        core_1.Component({
            selector: 'au-style-guide',
            templateUrl: '/templates/styleGuide/styleGuide.html',
            directives: [router_1.ROUTER_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [RouteService_1.RouteService])
    ], StyleGuide);
    return StyleGuide;
})();
exports.StyleGuide = StyleGuide;
//# sourceMappingURL=StyleGuide.js.map