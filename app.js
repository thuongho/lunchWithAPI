(function () {
    'use strict';

    var express = require('express');

    var app = express();

    var port = process.env.PORT || 3000;

    // var foodieRouter = require('./routes/foodieRoutes')();
    var foodieRouter = express.Router();
    foodieRouter.route('/')
        .get(function (req, res) {
            var responseJson = {hello: "This is foodie profile"};
            res.json(responseJson);
        });
    app.use('/api/foodies', foodieRouter);

    app.get('/', function (req, res) {
        res.send('Welcome to LunchWith API');
    });

    app.listen(port, function () {
        console.log('Running on port: ' + port);
    });

    module.exports = app;
}());