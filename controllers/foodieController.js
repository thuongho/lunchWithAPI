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
                    // 404 is not found
                    response.status(404).send('Profile not found.');
                }
            });
        };

        var get = function (request, response) {
            response.json(request.foodie);
        };

        var put = function () {

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