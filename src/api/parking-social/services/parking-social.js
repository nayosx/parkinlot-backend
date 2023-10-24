'use strict';

/**
 * parking-social service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::parking-social.parking-social');
