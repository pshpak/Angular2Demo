import {EmptyRoute} from './common/emptyRoute';
import {BladeFactory} from './common/blade/bladeFactory';

export class AppRouteConfig {
    static getRoutes() {
        var basePath = '/appScripts/';

        return [
            {
                path: '/Parent/...',
                name: 'Parent',
                component: BladeFactory.getBlade({
                    componentPath: basePath + 'hellowWorld/parentControl',
                    provide: m => m.ParentControl,
                    title: "Parent",
                    routes: [{
                        path: '/Child/...',
                        name: 'Child',
                        component: BladeFactory.getBlade({
                            componentPath: basePath + 'hellowWorld/childControl',
                            provide: m => m.ChildControl,
                            title: 'Child Blade',
                            routes: null
                        })
                    }]
                })
            },
            {
                path: '/Parent2/...',
                name: 'Parent2',
                component: BladeFactory.getBlade({
                    componentPath: basePath + 'hellowWorld/childControl',
                    provide: m => m.ChildControl,
                    title: 'Parent 2 Blade',
                    routes: null
                })
            },
            { path: '/', name: 'Default', component: EmptyRoute, useAsDefault: true }
        ];
    }
}