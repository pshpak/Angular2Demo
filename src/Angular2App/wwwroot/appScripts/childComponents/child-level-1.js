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
var child_level_2_1 = require('./child-level-2');
var empty_route_1 = require('../empty-route');
var ChildLevel1 = (function () {
    function ChildLevel1() {
    }
    ChildLevel1 = __decorate([
        core_1.Component({
            templateUrl: './templates/child-level-1.html',
            moduleId: module.id,
            directives: [router_1.ROUTER_DIRECTIVES]
        }),
        router_1.RouteConfig([
            { path: '/ChildLevel2', name: 'ChildLevel2', component: child_level_2_1.ChildLevel2 },
            { path: '/', name: 'Default', component: empty_route_1.EmptyRoute, useAsDefault: true }
        ]), 
        __metadata('design:paramtypes', [])
    ], ChildLevel1);
    return ChildLevel1;
})();
exports.ChildLevel1 = ChildLevel1;
//# sourceMappingURL=child-level-1.js.map