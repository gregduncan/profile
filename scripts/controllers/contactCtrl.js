/// <reference path="../libs/angular.js" />
'use strict';

revivedControllers.controller('ContactCtrl', ['$scope', '$http', function ContactCtrl($scope, $http) {

    var contact = $scope.contact = {
        name: "",
        email: "",
        telephone:"",
        message: "",
        sent: false
    };

    var email = {
        "key": "xjBp-aqzNERZj5OxRZB6vw",
        "template_name": "revived-contact",
        "message": {
            "subject": "Website request",
            "from_email": "webmaster@reviveddrives.com",
            "from_name": "Revived Drives",
            "to": [
                {
                    "email": "reviveddrives@gmail.com",
                    "name": "Chris Turp",
                    "type": "to"
                }
            ],
            "headers": {
                "Reply-To": "info@reviveddrives.com"
            },
            "important": false,
            "track_opens": false,
            "track_clicks": false,
            "auto_text": false,
            "auto_html": false,
            "inline_css": true,
            "url_strip_qs": false,
            "preserve_recipients": false,
            "view_content_link": false,
            "tracking_domain": false,
            "signing_domain": false,
            "return_path_domain": false,
            "bcc_address": "gmd008@hotmail.com",
            "merge": true
        },
        "async": false,
        "ip_pool": "Main Pool"
    };

    $scope.send = function (contact) {

        contact.sent = true;

        email.template_content = [
            {
                "name": "name",
                "content": contact.name
            },
            {
                "name": "email",
                "content": contact.email
            },
            {
                "name": "telephone",
                "content": contact.telephone
            },
            {
                "name": "message",
                "content": contact.message
            }
        ];

        $http.post("https://mandrillapp.com/api/1.0/messages/send-template.json", email).success(function (data) {

        });
    };

}]);