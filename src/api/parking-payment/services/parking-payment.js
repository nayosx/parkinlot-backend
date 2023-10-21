'use strict';

/**
 * parking-payment service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::parking-payment.parking-payment');
