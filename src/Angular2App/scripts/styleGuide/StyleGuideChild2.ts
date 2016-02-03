import {Component} from 'angular2/core';
import {Router} from 'angular2/router';

@Component({
    selector: 'au-style-guide',
    templateUrl: '/templates/styleGuide/styleGuideChild2.html',
})

export class StyleGuideChild2 {
    constructor(private router: Router) {
    }

    next() {
        this.router.navigate(['../Child3']);
    }
}