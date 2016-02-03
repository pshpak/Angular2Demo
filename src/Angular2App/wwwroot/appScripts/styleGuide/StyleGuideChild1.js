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
var StyleGuideChild1 = (function () {
    function StyleGuideChild1(router) {
        this.router = router;
    }
    StyleGuideChild1.prototype.next = function () {
        this.router.navigate(['../Child2']);
    };
    StyleGuideChild1 = __decorate([
        core_1.Component({
            selector: 'au-style-guide',
            templateUrl: '/templates/styleGuide/styleGuideChild1.html',
        }), 
        __metadata('design:paramtypes', [router_1.Router])
    ], StyleGuideChild1);
    return StyleGuideChild1;
})();
exports.StyleGuideChild1 = StyleGuideChild1;
//# sourceMappingURL=StyleGuideChild1.js.map