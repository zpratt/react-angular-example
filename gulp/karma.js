'use strict';

var karma = require('karma');

module.exports = function () {
    return function (done) {
        var server = karma.server;

        server.start({
            colors: false,
            configFile: __dirname + '/../karma.conf.js',
            logLevel: 'ERROR',
            singleRun: true
        }, function() {
                done();
            });
    };
};
