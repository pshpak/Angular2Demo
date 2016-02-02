var EmptyRoute_1 = require('./common/EmptyRoute');
var BladeFactory_1 = require('./common/blade/BladeFactory');
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
                    routes: [{
                            path: '/Child/...',
                            name: 'Child',
                            component: BladeFactory_1.BladeFactory.getBlade({
                                componentPath: basePath + 'helloWorld/ChildControl',
                                provide: function (m) { return m.ChildControl; },
                                title: 'Child Blade',
                                routes: null
                            })
                        }]
                })
            },
            {
                path: '/Parent2/...',
                name: 'Parent2',
                component: BladeFactory_1.BladeFactory.getBlade({
                    componentPath: basePath + 'helloWorld/ChildControl',
                    provide: function (m) { return m.ChildControl; },
                    title: 'Parent 2 Blade',
                    routes: null
                })
            },
            { path: '/', name: 'Default', component: EmptyRoute_1.EmptyRoute, useAsDefault: true }
        ];
    };
    return AppRouteConfig;
})();
exports.AppRouteConfig = AppRouteConfig;
//# sourceMappingURL=AppRouteConfig.js.map