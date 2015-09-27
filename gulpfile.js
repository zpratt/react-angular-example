'use strict';

var gulp = require('gulp'),

    previewServer = require('./gulp/preview-server'),
    webpack = require('./gulp/webpack');

gulp.task('webpack', webpack());
gulp.task('server', previewServer());

gulp.task('build', ['webpack']);
gulp.task('default', ['server']);
