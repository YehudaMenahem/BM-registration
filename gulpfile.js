var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var reload = browserSync.reload;


gulp.task('default', function() {
    browserSync.init({
      notify: true,
      server: './',
      port: 3000
    });

    gulp.watch('./assets/styles/*.css').on('change',reload);
    gulp.watch("./*.html").on('change', reload);
});