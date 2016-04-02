(function () {
    'use strict';

    var foodiesController = function (Foodie) {

        var post = function (req, res) {
            var foodie = new Foodie(req.body);

            foodie.save();
            console.log('POST foodie', foodie);
            res.send(foodie);
        };

        var get = function (req, res) {
            var query = {};

            // if (req.query.lunchZip) {
            //     query.lunchZip = req.query.lunchZip;
            // }
            query = req.query;

            Foodie.find(query, function (err, foodies) {
                if (err) {
                    res.status(500).send(err);
                } else {
                    res.json(foodies);
                }
            });
        };

        return {
            post: post,
            get: get
        };

    };

    module.exports = foodiesController;
}());