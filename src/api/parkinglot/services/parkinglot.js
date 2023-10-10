'use strict';

/**
 * parkinglot service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::parkinglot.parkinglot');
