/// <reference path="../libs/angular.js" />
'use strict';

gdControllers.controller('TrackCtrl', ['$scope', '$route', '$routeParams', function TrackCtrl($scope, $route, $routeParams) {

    // Set page variable for url.
    var page = '../partials/cds/' + $routeParams.year + '.html'

    // Get page via ajax.
    $.get(page, function (data) {

        // Load album.
        $('#listing').html(data);

        // Remove any active link css.
        $('.cd-listing ul li a').removeClass("active");

        // Add active state.
        $("#" + $routeParams.year).addClass("active");
    });

}]);