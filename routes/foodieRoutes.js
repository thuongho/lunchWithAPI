(function () {
    'use strict';

    var express = require('express');

    var routes = function (Foodie) {
        var foodieRouter = express.Router();
        var foodiesController = require('../controllers/foodiesController')(Foodie);
        var foodieController = require('../controllers/foodieController')(Foodie);

        foodieRouter.route('/')
            .post(foodiesController.post)
            .get(foodiesController.get);

        foodieRouter.use('/:foodieId', function (request, response, next) {
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
        });

        foodieRouter.route('/:foodieId')
            .get(foodieController.get);

        return foodieRouter;
    };

    module.exports = routes;
}());