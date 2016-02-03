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
var StyleGuideChild2 = (function () {
    function StyleGuideChild2(router) {
        this.router = router;
    }
    StyleGuideChild2.prototype.next = function () {
        this.router.navigate(['../Child3']);
    };
    StyleGuideChild2 = __decorate([
        core_1.Component({
            selector: 'au-style-guide',
            templateUrl: '/templates/styleGuide/styleGuideChild2.html',
        }), 
        __metadata('design:paramtypes', [router_1.Router])
    ], StyleGuideChild2);
    return StyleGuideChild2;
})();
exports.StyleGuideChild2 = StyleGuideChild2;
//# sourceMappingURL=StyleGuideChild2.js.map