import {EmptyRoute} from './common/EmptyRoute';
import {BladeFactory} from './common/blade/BladeFactory';

export class AppRouteConfig {
    static getRoutes() {
        var basePath = '/appScripts/';

        return [
            {
                path: '/Parent/...',
                name: 'Parent',
                component: BladeFactory.getBlade({
                    componentPath: basePath + 'helloWorld/ParentControl',
                    provide: m => m.ParentControl,
                    title: "Parent",
                    routes: [
                        {
                            path: '/Child/...',
                            name: 'Child',
                            component: BladeFactory.getBlade({
                                componentPath: basePath + 'helloWorld/ChildControl',
                                provide: m => m.ChildControl,
                                title: 'Child Blade',
                                routes: null
                            })
                        }
                    ]
                })
            },
            {
                path: '/Parent2/...',
                name: 'Parent2',
                component: BladeFactory.getBlade({
                    componentPath: basePath + 'helloWorld/ChildControl',
                    provide: m => m.ChildControl,
                    title: 'Parent 2 Blade',
                    routes: null
                })
            },
            {
                path: '/StyleGuide/...',
                name: 'StyleGuide',
                component: BladeFactory.getBlade({
                    componentPath: basePath + 'styleGuide/StyleGuide',
                    provide: m => m.StyleGuide,
                    title: 'Blade Navigation',
                    routes: [
                        {
                            path: '/Child1/...',
                            name: 'Child1',
                            component: BladeFactory.getBlade({
                                componentPath: basePath + 'styleGuide/StyleGuideChild1',
                                provide: m => m.StyleGuideChild1,
                                title: 'Buttons',
                                routes: null
                            })
                        },
                        {
                            path: '/Child2/...',
                            name: 'Child2',
                            component: BladeFactory.getBlade({
                                componentPath: basePath + 'styleGuide/StyleGuideChild2',
                                provide: m => m.StyleGuideChild2,
                                title: 'Buttons',
                                routes: null
                            })
                        },
                        {
                            path: '/Child3/...',
                            name: 'Child3',
                            component: BladeFactory.getBlade({
                                componentPath: basePath + 'styleGuide/StyleGuideChild1',
                                provide: m => m.StyleGuideChild1,
                                title: 'Buttons',
                                routes: null
                            })
                        },
                        {
                            path: '/Child4/...',
                            name: 'Child4',
                            component: BladeFactory.getBlade({
                                componentPath: basePath + 'styleGuide/StyleGuideChild1',
                                provide: m => m.StyleGuideChild1,
                                title: 'Buttons',
                                routes: null
                            })
                        },
                        {
                            path: '/Child5/...',
                            name: 'Child5',
                            component: BladeFactory.getBlade({
                                componentPath: basePath + 'styleGuide/StyleGuideChild1',
                                provide: m => m.StyleGuideChild1,
                                title: 'Buttons',
                                routes: null
                            })
                        },
                    ]
                })
            },
            { path: '/', name: 'Default', component: EmptyRoute, useAsDefault: true }
        ];
    }
}