'use strict'

var cardsApp = angular.module('cardsApp');

cardsApp.controller('AreaListCtrl', ['$scope', function($scope) {
    $scope.areas = [
    {
        name: "Backlog",
        cards: [
        {
            name: "Create a design template for cards",
            description: "description goes here",
            labels: ["Issue"]
        }]
    }];
}]);
