/// <reference path="angular.js" />
'use strict';

var gdControllers = angular.module('gdControllers', []);

var gdApp = angular.module('gdApp', [
    'ngRoute',
    'gdControllers'
]);

gdApp.config(['$routeProvider',
  function ($routeProvider) {
      $routeProvider.
        when('/projects', {
            templateUrl: 'partials/projects.html'
        }).
        when('/skills', {
            templateUrl: 'partials/skills.html'
        }).
        when('/gdcd/:year', {
            templateUrl: 'partials/gdcd.html',
            controller: 'TrackCtrl'
        }).
        when('/', {
            templateUrl: 'partials/home.html'
        }).
        otherwise({
            redirectTo: '/'
        });
}]);
