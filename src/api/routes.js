'use strict';

let controller = require('../controller/controller.js');

module.exports = function(app) {
    app.route('/about')
        .get(controller.about);
    app.route('/distance/:zipcode1/:zipcode2')
        .get(controller.get_distance);
};