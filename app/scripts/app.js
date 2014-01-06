'use strict'


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

require([
    //controllers
    'scripts/controllers/areaList.js',

    //services
    'scripts/services/areaService.js'
],
function() {
    var cardsApp = angular.module('cardsApp',['ngRoute']);

    angular.bootstrap(document, ['cardsApp']);
});
