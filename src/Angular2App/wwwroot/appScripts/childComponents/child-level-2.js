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
var ChildLevel2 = (function () {
    function ChildLevel2(loader, elementRef, routeData) {
        this.routingContent = routeData.data['content'];
        System.import(routeData.data['path'])
            .then(function (componentModule) { return componentModule[routeData.data['component']]; })
            .then(function (e) { return loader.loadIntoLocation(e, elementRef, 'dynamicContent'); });
    }
    ChildLevel2 = __decorate([
        core_1.Component({
            templateUrl: './templates/child-level-2.html',
            moduleId: module.id,
        }), 
        __metadata('design:paramtypes', [core_1.DynamicComponentLoader, core_1.ElementRef, router_1.RouteData])
    ], ChildLevel2);
    return ChildLevel2;
})();
exports.ChildLevel2 = ChildLevel2;
//# sourceMappingURL=child-level-2.js.map