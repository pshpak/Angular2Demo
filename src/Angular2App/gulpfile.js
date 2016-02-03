/// <binding BeforeBuild='moveLibs'/>

var gulp = require('gulp');
var rimraf = require('rimraf');



var paths = {
	libInput: './node_modules/',
	libOutput: './wwwroot/libs/',
	templatesInput: './scripts/**/*.html',
	templatesOutput: './wwwroot/appScripts'
};

var libsToMove = [
   paths.libInput + '/angular2/bundles/angular2-polyfills.js',
   paths.libInput + '/systemjs/dist/system.js',
   paths.libInput + '/jquery/dist/jquery.js',
   paths.libInput + '/kendo-ui-core/dist/js/kendo.custom.js',
   paths.libInput + '/rxjs/bundles/Rx.js',
   paths.libInput + '/angular2/bundles/angular2.js',
   paths.libInput + '/angular2/bundles/router.js'
];


gulp.task('moveLibs', function () {
	return gulp.src(libsToMove).pipe(gulp.dest(paths.libOutput));
});

