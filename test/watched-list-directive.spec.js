import React from 'react';

let angular = window.angular,
    expect = window.expect,

    module = window.module,
    inject = window.inject;

describe('Directive: <watch-list />', function () {
    let commitsListDirectiveEl,
        expectedWatchedRepos,
        stubWatchListClass,
        StubWatchListComponent,

        actualProps,
        watchListElement,

        $rootScope,

        $scope,
        $timeout,
        $compile;

    beforeEach(function () {
        expectedWatchedRepos = [{}, {}];
        stubWatchListClass = 'someClass';

        StubWatchListComponent = React.createClass({
            render: function () {
                watchListElement = this;
                actualProps = this.props;

                return React.DOM.div({
                    className: stubWatchListClass
                });
            }
        });

        module('react', 'app', function ($provide) {
            $provide.factory('WatchListComponent', function () {
                return StubWatchListComponent;
            });
        });

        inject(function (_$rootScope_, _$timeout_, _$compile_) {
            $rootScope = _$rootScope_;
            $timeout = _$timeout_;
            $compile = _$compile_;
        });

        $scope = $rootScope.$new();
        $scope.watchedRepos = expectedWatchedRepos;

        commitsListDirectiveEl = angular.element(
            '<watch-list watched-repos="watchedRepos"></watch-list>'
        );

        $compile(commitsListDirectiveEl)($scope);
        $timeout.flush();

        angular.element(document.body).append(commitsListDirectiveEl);
    });

    afterEach(function () {
        document.body.innerHTML = '';
    });

    it('should render the WatchListComponent', function () {
        expect(watchListElement.isMounted()).to.equal(true);

        expect(commitsListDirectiveEl.children().hasClass(stubWatchListClass)).to.equal(true);
    });

    it('should pass the list of watched repos to the WatchList component', function () {
        expect(actualProps.watchedRepos).to.equal(expectedWatchedRepos);
    });
});
