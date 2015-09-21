'use strict';

var config = require('config'),
    _ = require('lodash'),

    eslint = require('gulp-eslint');

module.exports = function (gulp) {
    return function () {
        var scripts = config.scripts,
            files = _.union(scripts.production, scripts.tests);

        return gulp.src(files)
            .pipe(eslint())
            .pipe(eslint.format())
            .pipe(eslint.failOnError());
    };
};
