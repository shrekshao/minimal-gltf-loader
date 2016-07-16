(function(){
    'use strict';

    var jshint = require('gulp-jshint');
    var uglify = require('gulp-uglify');
    var rename = require("gulp-rename");
    var gulp = require('gulp');

    var jsHintFiles = [
            '**/*.js', 
            '**/*.html', 
            '!node_modules/**', 
            '!src/third-party/**',
            '!build/**'
            ];

    // gulp.task('default', function() {
    //   // place code for your default task here
    // });

    gulp.task('default', ['jsHint']);

    gulp.task('jsHint', function() {
        return gulp.src(jsHintFiles)
            .pipe(jshint.extract('auto'))
            .pipe(jshint())
            .pipe(jshint.reporter('jshint-stylish'))
            .pipe(jshint.reporter('fail'));
    });

    gulp.task('jsHint-watch', function() {
        gulp.watch(jsHintFiles).on('change', function(event) {
            gulp.src(event.path)
                .pipe(jshint.extract('auto'))
                .pipe(jshint())
                .pipe(jshint.reporter('jshint-stylish'));
        });
    });

    gulp.task('compress', function() {
    return gulp.src('src/minimal-gltf-loader.js')
        .pipe(uglify())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('build'));
    });
})();
