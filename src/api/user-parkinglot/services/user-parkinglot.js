'use strict';

/**
 * user-parkinglot service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::user-parkinglot.user-parkinglot');
