import {RouteDefinition} from 'angular2/router';

export class BladeConfig {
    path: string;
    provide: { (module: any): any };
    routes: RouteDefinition[];
}