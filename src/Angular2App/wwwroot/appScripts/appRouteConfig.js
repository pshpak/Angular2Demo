var emptyRoute_1 = require('./common/emptyRoute');
var bladeFactory_1 = require('./common/blade/bladeFactory');
var AppRouteConfig = (function () {
    function AppRouteConfig() {
    }
    AppRouteConfig.getRoutes = function () {
        var basePath = '/appScripts/';
        return [
            {
                path: '/Parent/...',
                name: 'Parent',
                component: bladeFactory_1.BladeFactory.getBlade({
                    componentPath: basePath + 'parent-child-controls/parentControl',
                    provide: function (m) { return m.ParentControl; },
                    title: "Parent",
                    routes: [{
                            path: '/Child/...',
                            name: 'Child',
                            component: bladeFactory_1.BladeFactory.getBlade({
                                componentPath: basePath + 'parent-child-controls/childControl',
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
                component: bladeFactory_1.BladeFactory.getBlade({
                    componentPath: basePath + 'parent-child-controls/childControl',
                    provide: function (m) { return m.ChildControl; },
                    title: 'Parent 2 Blade',
                    routes: null
                })
            },
            { path: '/', name: 'Default', component: emptyRoute_1.EmptyRoute, useAsDefault: true }
        ];
    };
    return AppRouteConfig;
})();
exports.AppRouteConfig = AppRouteConfig;
//# sourceMappingURL=appRouteConfig.js.map