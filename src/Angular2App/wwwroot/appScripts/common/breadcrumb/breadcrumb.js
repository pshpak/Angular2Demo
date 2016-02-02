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
var BreadcrumbService_1 = require('./BreadcrumbService');
var Breadcrumb = (function () {
    function Breadcrumb(breadcrumbService) {
        this.blades = breadcrumbService.blades;
    }
    Breadcrumb = __decorate([
        core_1.Component({
            selector: 'au-breadcrumb',
            templateUrl: '/templates/common/breadcrumb/breadcrumb.html'
        }), 
        __metadata('design:paramtypes', [BreadcrumbService_1.BreadcrumbService])
    ], Breadcrumb);
    return Breadcrumb;
})();
exports.Breadcrumb = Breadcrumb;
//# sourceMappingURL=Breadcrumb.js.map