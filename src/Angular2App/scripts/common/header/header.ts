import {Component} from 'angular2/core';
import {Breadcrumb} from '../breadcrumb/breadcrumb';

@Component({
    selector: 'au-header',
    templateUrl: '/templates/common/header/header.html',
    directives: [Breadcrumb]
})

export class Header {
}