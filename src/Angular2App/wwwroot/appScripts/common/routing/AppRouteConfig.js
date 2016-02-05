var EmptyRoute_1 = require('./EmptyRoute');
var BladeFactory_1 = require('../blade/BladeFactory');
var AppRouteConfig = (function () {
    function AppRouteConfig() {
    }
    AppRouteConfig.getRoutes = function () {
        var basePath = '/appScripts/';
        return [
            {
                path: '/Parent/...',
                name: 'Parent',
                component: BladeFactory_1.BladeFactory.getBlade({
                    componentPath: basePath + 'helloWorld/ParentControl',
                    provide: function (m) { return m.ParentControl; },
                    title: "Parent",
                    routes: [
                        {
                            path: '/Child/...',
                            name: 'Child',
                            component: BladeFactory_1.BladeFactory.getBlade({
                                componentPath: basePath + 'helloWorld/ChildControl',
                                provide: function (m) { return m.ChildControl; },
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
                component: BladeFactory_1.BladeFactory.getBlade({
                    componentPath: basePath + 'styleGuide/StyleGuide',
                    provide: function (m) { return m.StyleGuide; },
                    title: 'Blade Navigation',
                    routes: [
                        {
                            path: '/Child1/...',
                            name: 'Child1',
                            component: BladeFactory_1.BladeFactory.getBlade({
                                componentPath: basePath + 'styleGuide/StyleGuideChild1',
                                provide: function (m) { return m.StyleGuideChild1; },
                                title: 'Buttons',
                                routes: null
                            })
                        },
                        {
                            path: '/Child2/...',
                            name: 'Child2',
                            component: BladeFactory_1.BladeFactory.getBlade({
                                componentPath: basePath + 'styleGuide/StyleGuideChild2',
                                provide: function (m) { return m.StyleGuideChild2; },
                                title: 'Buttons',
                                routes: null
                            })
                        },
                        {
                            path: '/Child3/...',
                            name: 'Child3',
                            component: BladeFactory_1.BladeFactory.getBlade({
                                componentPath: basePath + 'styleGuide/StyleGuideChild3',
                                provide: function (m) { return m.StyleGuideChild3; },
                                title: 'Table',
                                routes: null
                            })
                        },
                        {
                            path: '/Child4/...',
                            name: 'Child4',
                            component: BladeFactory_1.BladeFactory.getBlade({
                                componentPath: basePath + 'styleGuide/StyleGuideChild4',
                                provide: function (m) { return m.StyleGuideChild4; },
                                title: 'Grid',
                                routes: null
                            })
                        },
                        {
                            path: '/Child5/...',
                            name: 'Child5',
                            component: BladeFactory_1.BladeFactory.getBlade({
                                componentPath: basePath + 'styleGuide/StyleGuideChild5',
                                provide: function (m) { return m.StyleGuideChild5; },
                                title: 'Wizard',
                                routes: null
                            })
                        }
                    ]
                })
            },
            { path: '/', name: 'Default', component: EmptyRoute_1.EmptyRoute, useAsDefault: true }
        ];
    };
    return AppRouteConfig;
})();
exports.AppRouteConfig = AppRouteConfig;
//# sourceMappingURL=AppRouteConfig.js.map