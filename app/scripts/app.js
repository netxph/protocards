'use strict'

var cardsApp = angular.module('cardsApp',['ngRoute']);

cardsApp.config(
    function($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/area-list.html',
                controller: 'AreaListCtrl'
            })
            .when('/areas', {
                templateUrl: 'views/area-list.html',
                controller: 'AreaListCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });
    }
);
