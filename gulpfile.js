var
  gulp = require('gulp'),
  path = require('path'),
  connect = require('gulp-connect-multi')();
 
gulp.task('connect', connect.server({
  root: [path.resolve('.')],
  port: 1337,
  livereload: true,
  open: {
    browser: 'Google Chrome' // if not working OS X browser: 'Google Chrome' 
  }
}));
 
gulp.task('html', function () {
  gulp.src('./*.html')
    .pipe(connect.reload());
});
 
 
gulp.task('watch', function () {
  gulp.watch(['./*.html'], ['html']);
});
 
gulp.task('default', ['connect', 'watch']);