'use strict';

gdApp.directive('navMenu', function ($location) {
    return function (scope, element) {

        // On page change.
        scope.$on('$routeChangeStart', function () {

            // Remove any active class already added.
            element.find('a').removeClass("active");

            // Set path variable.
            var link = $location.path().replace("/", "");

            // If we have a path then...
            if (link) {

                // If we're on GDCD add extra logic.
                if (link.indexOf("gdcd") != -1)
                {

                    // GDCD folder so add active state.
                    $("#gdcd").addClass("active");
                } else {

                    // Add active state to current link.
                    $("#" + link).addClass("active");
                }                
            } else {

                // Error we have no path, so default to home page.
                $("#home").addClass("active");
            }
        });
    };
});