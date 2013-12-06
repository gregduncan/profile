/// <reference path="angular.js" />
'use strict';

var gdApp = angular.module('gdApp', [
    'ngRoute'
]);

gdApp.config(['$routeProvider',
  function ($routeProvider) {
      $routeProvider.
        when('/work', {
            templateUrl: 'partials/work.html'
        }).
        when('/skills', {
            templateUrl: 'partials/skills.html'
        }).
        when('/gdcd', {
            templateUrl: 'partials/gdcd.html'
        }).
        when('/', {
            templateUrl: 'partials/home.html'
        }).
        otherwise({
            redirectTo: '/'
        });
}]);
