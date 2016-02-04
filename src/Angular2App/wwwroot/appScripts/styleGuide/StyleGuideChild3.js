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
var StyleGuideChild3 = (function () {
    function StyleGuideChild3() {
        this.data = [
            {
                id: 100,
                title: 'Dividend Receivables',
                tooltip: 'tooltip 1',
                isActivate: false
            },
            {
                id: 101,
                title: 'Interest Receivables',
                tooltip: 'tooltip 2',
                isActivate: false
            },
            {
                id: 102,
                title: 'Open Purchases',
                tooltip: 'tooltip 3',
                isActivate: false
            },
            {
                id: 103,
                title: 'Open Sales',
                tooltip: 'tooltip 4',
                isActivate: true
            },
            {
                id: 104,
                title: 'Dividend Income',
                tooltip: 'tooltip 5',
                isActivate: true
            },
            {
                id: 105,
                title: 'Interest Income',
                tooltip: 'tooltip 6',
                isActivate: false
            },
            {
                id: 106,
                title: 'Expense Testing',
                tooltip: 'tooltip 7',
                isActivate: true
            },
            {
                id: 107,
                title: 'Financial Statement Tie-out',
                tooltip: 'tooltip 8',
                isActivate: false
            },
            {
                id: 108,
                title: 'Portfolio Holdings',
                tooltip: 'tooltip 9',
                isActivate: false
            },
            {
                id: 109,
                title: 'Cash Cut Off',
                tooltip: 'tooltip 10',
                isActivate: true
            },
            {
                id: 110,
                title: 'Investment Transactions',
                tooltip: 'tooltip 11',
                isActivate: true
            }
        ];
    }
    StyleGuideChild3 = __decorate([
        core_1.Component({
            selector: 'au-style-guide',
            templateUrl: '/templates/styleGuide/styleGuideChild3.html',
        }), 
        __metadata('design:paramtypes', [])
    ], StyleGuideChild3);
    return StyleGuideChild3;
})();
exports.StyleGuideChild3 = StyleGuideChild3;
//# sourceMappingURL=StyleGuideChild3.js.map