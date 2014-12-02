'use strict';

angular.module('myApp.state2', ['ui.router'])

    .config(['$stateProvider', function ($stateProvider) {
        $stateProvider.state('state2', {
            url: '/state2',
            templateUrl: "state2/state2.html"
        }).state('state2.list', {
            url: '/list',
            views: {
                "listView": {
                    templateUrl: "state2/state2.list.html",
                    controller: 'State2Ctrl'
                },
                "detailsView": {
                    templateUrl: "state2/state2.details.html",
                    controller: 'State2Ctrl'
                }
            }
        })
    }])

    .controller('State2Ctrl', ['$scope', function ($scope) {
        $scope.things = ["A", "Set", "Of", "Things"];
        $scope.details = "ok";
    }]);