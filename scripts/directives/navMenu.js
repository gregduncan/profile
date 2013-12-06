'use strict';

gdApp.directive('navMenu', function ($location) {
    return function (scope, element) {
        scope.$on('$routeChangeStart', function () {
            element.find('a').removeClass("active");
            var link = $location.path().replace("/", "");
            if (link) {
                $("#" + link).addClass("active");
            } else {
                $("#home").addClass("active");
            }
        });
    };
});