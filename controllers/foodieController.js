(function () {
    'use strict';

    var foodieController = function (Foodie) {
        var get = function (request, response) {
            response.json(request.foodie);
            
        };

        var post = function () {

        };

        var put = function () {

        };

        var patch = function () {

        };

        var deleteFoodie = function () {

        };

        return {
            get: get,
            post: post,
            put: put,
            patch: patch,
            delete: deleteFoodie
        };
    };

    module.exports = foodieController;
}());