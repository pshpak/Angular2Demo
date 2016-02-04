import {Component} from 'angular2/core';

@Component({
    selector: 'au-style-guide',
    templateUrl: '/templates/styleGuide/styleGuideChild3.html',
})

export class StyleGuideChild3 {
    data: any[];
    constructor() {
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
}