'use strict';

var util = require('gulp-util'),
    webpackConfig = require('./helpers/webpack-config'),
    webpack = require('webpack');

module.exports = function () {
    return function(done) {
        webpack(webpackConfig, function(err, stats) {
            if (err) {
                throw new util.PluginError('webpack', err);
            }

            util.log('[webpack]', stats.toString());
            done();
        });
    };
};
