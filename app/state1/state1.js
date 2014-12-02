'use strict';

angular.module('myApp.state1', ['ui.router'])

    .config(['$stateProvider', function($stateProvider) {
        $stateProvider.state('state1',{
            url:'/state1',
            templateUrl: "state1/state1.html"
        }).state('state1.list',{
            url:'/list',
            templateUrl: 'state1/state1.list.html',
            controller: 'State1Ctrl'
        })
    }])

    .controller('State1Ctrl', ['$scope',function($scope) {
        $scope.items = ["A", "List", "Of", "Items"];
    }]);