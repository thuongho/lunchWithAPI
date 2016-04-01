(function () {
    'use strict';

    var foodieController = function (Foodie) {
        var get = function (request, response, next) {
            console.log('request', request, 'response', response);
            Foodie.findById(request.params.movieId, function (error, foodie) {
                if (error) {
                    console.log(error);
                } else {
                    console.log('foodie', foodie);
                }
            });
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