import {RouteDefinition} from 'angular2/router';

export class BladeConfig {
    componentPath: string;
    provide: { (module: any): any };
    title: string;
    routes: RouteDefinition[];
}