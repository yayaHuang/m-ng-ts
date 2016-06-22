'use strict';

var gulp = require('gulp');
var rename = require('gulp-rename');

gulp.task('ngdocs', [], function() {

    var gulpDocs = require('gulp-ngdocs');

    return gulp.src('./app/**/*.ts')
        .pipe(gulpDocs.process())
        .pipe(gulp.dest('./docs'));
});

gulp.task('init', [], function(){
  gulp.src('app/config/config.dist.ts')
    .pipe(rename('config.ts'))
    .pipe(gulp.dest('app/config'));
});
