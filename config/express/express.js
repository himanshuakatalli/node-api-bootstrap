"use strict";

const bodyParser = require('body-parser');

exports.setupApp = function (app) {
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());
};