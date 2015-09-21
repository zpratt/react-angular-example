var getConfig = require('hjs-webpack');

module.exports = getConfig({
    in: 'lib/app.js',
    out: 'app',
    clearBeforeBuild: true,
    devServer: {
        port: 8080,
        info: false,
        historyApiFallback: true,
        hot: true
    },
    isDev: true,
    html: function (context) {
        return {
            'index.html': context.defaultTemplate({
                html: '' +
                '<div ng-controller="ActivityCtrl as activity">' +
                    '<watch-list watched-repos="activity.watchedRepos"></watch-list>' +
                '</div>'
            })
        };
    }
});
