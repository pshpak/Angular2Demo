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
var StyleGuide = (function () {
    function StyleGuide(router) {
        this.router = router;
        var self = this;
        self.items = [
            {
                title: "Buttons",
                description: "This is an optional description",
                current: false,
                executeMethod: function () {
                    self.openChild(0, 'Child1');
                },
                canExecuteMethod: function () { return true; }
            },
            {
                title: "Inputs",
                current: false,
                executeMethod: function () {
                    self.openChild(1, 'Child2');
                },
                canExecuteMethod: function () { return true; }
            },
            {
                title: "Table",
                current: false,
                executeMethod: function () {
                    self.openChild(2, 'Child3');
                },
                canExecuteMethod: function () { return true; }
            },
            {
                title: "Grid",
                current: false,
                executeMethod: function () {
                    self.openChild(3, 'Child4');
                },
                canExecuteMethod: function () { return true; }
            },
            {
                title: "Wizard",
                current: false,
                executeMethod: function () {
                    self.openChild(4, 'Child5');
                },
                canExecuteMethod: function () { return true; }
            }
        ];
    }
    StyleGuide.prototype.openChild = function (curr, state) {
        this.setCurrent(curr);
        this.router.navigate(['./' + state]);
    };
    StyleGuide.prototype.setCurrent = function (n) {
        for (var i = 0; i < this.items.length; i++) {
            this.items[i].current = false;
        }
        if (n <= this.items.length) {
            this.items[n].current = true;
        }
    };
    StyleGuide = __decorate([
        core_1.Component({
            selector: 'au-style-guide',
            templateUrl: '/templates/styleGuide/styleGuide.html',
        }), 
        __metadata('design:paramtypes', [router_1.Router])
    ], StyleGuide);
    return StyleGuide;
})();
exports.StyleGuide = StyleGuide;
//# sourceMappingURL=StyleGuide.js.map