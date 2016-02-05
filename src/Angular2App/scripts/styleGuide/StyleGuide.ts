import {Component, OnDestroy} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';
import {RouteService} from '../common/routing/RouteService';
import {Subscription} from 'rxjs/Subscription';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';

@Component({
    selector: 'au-style-guide',
    templateUrl: '/templates/styleGuide/styleGuide.html',
    directives: [ROUTER_DIRECTIVES]
})

export class StyleGuide implements OnDestroy {
    items: any[];
    currentPath: string;
    private routeChangedSubscription: Subscription<string>;

    constructor(private routeService: RouteService) {
        this.items = [
            {
                title: "Buttons",
                description: "This is an optional description",
                path: 'Child1'
            },
            {
                title: "Inputs",
                path: 'Child2'
            },
            {
                title: "Table",
                path: 'Child3'
            },
            {
                title: "Grid",
                path: 'Child4'

            },
            {
                title: "Wizard",
                path: 'Child5'
            }
        ];
        this.currentPath = this.getChildPath(this.routeService.lastPath);
        this.routeChangedSubscription = this.routeService.routeChangedEvent
            .map((path) => this.getChildPath(path))
            .filter((childPath) => childPath != this.currentPath)
            .distinctUntilChanged()
            .subscribe((childPath) => {
                this.currentPath = childPath;
            });
    }

    private getChildPath(path: string) {
        if (!path) {
            return null;
        }
        var pathParts = path.split('/');
        if (pathParts.length < 2) {
            return null;
        }

        return pathParts[1];
    }

    ngOnDestroy() {
        this.routeChangedSubscription.unsubscribe();
    }
}