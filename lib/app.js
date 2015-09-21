import angular from 'angular';
import ngReact from 'ngreact';
import ActivityService from './activity-service';
import ActivityController from './activity-controller';
import WatchListDirective from './watch-list-directive.js';
import WatchListComponent from './watch-list-component';

angular
    .module('app', ['react'])
    .service('ActivityService', ActivityService)
    .controller('ActivityCtrl', ActivityController)
    .factory('WatchListComponent', WatchListComponent)
    .directive('watchList', WatchListDirective)


    .value('targetUser', 'zpratt');

angular.element(document).ready(function () {
    angular.bootstrap(document, ['app']);
});
