import {Component} from 'angular2/core';

@Component({
    selector: 'au-style-guide',
    templateUrl: '/templates/styleGuide/styleGuideChild5.html',
})

export class StyleGuideChild5 {
    items: any[];
    constructor() {

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
}
