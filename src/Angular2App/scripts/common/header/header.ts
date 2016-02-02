import {Component} from 'angular2/core';
import {Breadcrumb} from '../breadcrumb/breadcrumb';

@Component({
    selector: 'au-header',
    templateUrl: './templates/header.html',
    moduleId: module.id,
    directives: [Breadcrumb]
})

export class Header {
}