'use strict';

var gulp = require('gulp'),

    eslint = require('./gulp/eslint'),
    karma = require('./gulp/karma'),
    previewServer = require('./gulp/preview-server'),
    webpack = require('./gulp/webpack');

gulp.task('lint', eslint(gulp));
gulp.task('karma', ['lint'], karma());
gulp.task('webpack', webpack());
gulp.task('server', previewServer());

gulp.task('test', ['karma']);
gulp.task('build', ['webpack']);
gulp.task('default', ['server']);
