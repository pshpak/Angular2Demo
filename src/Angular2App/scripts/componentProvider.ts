import {RouteDefinition} from 'angular2/router';

export class ComponentProvider {
    path: string;
    provide: { (module: any): any };
    routes: RouteDefinition[];
}