import {EmptyRoute} from './EmptyRoute';
import {BladeFactory} from '../blade/BladeFactory';

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
                                componentPath: basePath + 'styleGuide/StyleGuideChild3',
                                provide: m => m.StyleGuideChild3,
                                title: 'Table',
                                routes: null
                            })
                        },
                        {
                            path: '/Child4/...',
                            name: 'Child4',
                            component: BladeFactory.getBlade({
                                componentPath: basePath + 'styleGuide/StyleGuideChild4',
                                provide: m => m.StyleGuideChild4,
                                title: 'Grid',
                                routes: null
                            })
                        }
                        ,
                        {
                            path: '/Child5/...',
                            name: 'Child5',
                            component: BladeFactory.getBlade({
                                componentPath: basePath + 'styleGuide/StyleGuideChild5',
                                provide: m => m.StyleGuideChild5,
                                title: 'Wizard',
                                routes: null
                            })
                        }
                    ]
                })
            },
            { path: '/', name: 'Default', component: EmptyRoute, useAsDefault: true }
        ];
    }
}