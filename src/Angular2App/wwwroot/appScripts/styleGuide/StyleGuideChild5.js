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
var StyleGuideChild5 = (function () {
    function StyleGuideChild5() {
        this.items = [
            {
                title: "Select an Engagement",
                description: "John Hancock",
                complete: true,
                current: false
            },
            {
                title: "Choose Enagement Settings",
                description: "",
                complete: true,
                current: false
            },
            {
                title: "Onboard Your Team",
                description: "",
                complete: false,
                current: true
            },
            {
                title: "Select FSLIs & Testing Areas",
                description: "",
                complete: false,
                current: false
            },
            {
                title: "Summary & Download",
                description: "",
                complete: false,
                current: false
            }
        ];
    }
    StyleGuideChild5 = __decorate([
        core_1.Component({
            selector: 'au-style-guide',
            templateUrl: '/templates/styleGuide/styleGuideChild5.html',
        }), 
        __metadata('design:paramtypes', [])
    ], StyleGuideChild5);
    return StyleGuideChild5;
})();
exports.StyleGuideChild5 = StyleGuideChild5;
//# sourceMappingURL=StyleGuideChild5.js.map