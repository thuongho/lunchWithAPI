(function () {
    'use strict';

    var foodieController = function (Foodie) {

        var findFoodieById = function (request, response, next) {
            Foodie.findById(request.params.foodieId, function (error, foodie) {
                if (error) {
                    // 500 Internal Server Error
                    response.status(500).send(error);
                } else if (foodie) {
                    request.foodie = foodie;
                    next();
                } else {
                    // 404 is request not found
                    response.status(404).send('Profile not found.');
                }
            });
        };

        // request.foodie avail for the follow...
        var get = function (request, response) {
            response.json(request.foodie);
        };

        var put = function (request, response) {

        };

        var patch = function () {

        };

        var deleteFoodie = function () {

        };

        return {
            findFoodie: findFoodieById,
            get: get,
            put: put,
            patch: patch,
            delete: deleteFoodie
        };
    };

    module.exports = foodieController;
}());