'use strict';

var webpack = require('webpack'),
    WebpackDevServer = require('webpack-dev-server'),
    webpackConfig = require('./helpers/webpack-config'),
    util = require('gulp-util');

module.exports = function () {
    return function(done) {
        var compiler = webpack(webpackConfig);

        return new WebpackDevServer(compiler)
            .listen(8080, 'localhost', function(err) {
                if (err) {
                    throw new util.PluginError('webpack-dev-server', err);
                }

                util.log('[webpack-dev-server]', 'http://localhost:8080/webpack-dev-server/index.html');
                done();
            });
    };
};
