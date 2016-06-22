/**
 * Created by Максим on 22.06.2016.
 */
/**
 * npm install --save-dev gulp-connect
 * npm install gulp-symlink --save-dev
 */
var gulp = require('gulp'),
    connect = require('gulp-connect');
var symlink = require('gulp-symlink');



gulp.task('webserver', function() {
    connect.server({
        livereload: true,
        port: 3000
    });
});

gulp.task('default', ['webserver']);

