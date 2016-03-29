(function () {
    'use strict';

    var express = require('express');

    var routes = function () {
        var foodieRouter = express.Router();

        foodieRouter.route('/')
            .get(function (req, res) {
                var responseJson = {hello: "This is foodie profile"};
                res.json(responseJson);
            });
    };

    module.exports = routes;
}());