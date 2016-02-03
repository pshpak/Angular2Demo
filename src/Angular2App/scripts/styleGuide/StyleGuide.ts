import {Component} from 'angular2/core';
import {Router} from 'angular2/router';

@Component({
    selector: 'au-style-guide',
    templateUrl: '/templates/styleGuide/styleGuide.html',
})

export class StyleGuide {
    items: any[];

    constructor(private router: Router) {
        var self = this;

        self.items = [
            {
                title: "Buttons",
                description: "This is an optional description",
                current: false,
                executeMethod() {
                    self.openChild(0, 'Child1');
                },
                canExecuteMethod() { return true; }
            },
            {
                title: "Inputs",
                current: false,
                executeMethod() {
                    self.openChild(1, 'Child2');
                },
                canExecuteMethod() { return true; }
            },
            {
                title: "Table",
                current: false,
                executeMethod() {
                    self.openChild(2, 'Child3');
                },
                canExecuteMethod() { return true; }
            },
            {
                title: "Grid",
                current: false,
                executeMethod() {
                    self.openChild(3, 'Child4');
                },
                canExecuteMethod() { return true; }
            },
            {
                title: "Wizard",
                current: false,
                executeMethod() {
                    self.openChild(4, 'Child5');
                },
                canExecuteMethod() { return true; }
            }
        ];
    }

    openChild(curr: number, state: string) {
        this.setCurrent(curr);
        this.router.navigate(['./' + state]);
    }

    setCurrent(n: number) {
        for (var i = 0; i < this.items.length; i++) {
            this.items[i].current = false;
        }
        if (n <= this.items.length) {
            this.items[n].current = true;
        }
    }
}