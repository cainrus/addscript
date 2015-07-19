'use strict';
var gulp = require('gulp');
var umd = require('gulp-umd');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');

gulp.task('default', ['umd', 'umd-uglify']);

gulp.task('umd', function () {
    return gulp.src('src/addScript.js')
        .pipe(umd({
            namespace: function () {
                return 'addScript';
            },
            exports: function() {
                return 'addScript';
            }
        }))
        .pipe(gulp.dest('dist'));
});

gulp.task('umd-uglify', function () {
    return gulp.src('src/addScript.js')
        .pipe(umd({
            namespace: function () {
                return 'addScript';
            },
            exports: function() {
                return 'addScript';
            }
        }))
        .pipe(rename({suffix: '.min'}))
        .pipe(uglify())
        .pipe(gulp.dest('dist'));
});
