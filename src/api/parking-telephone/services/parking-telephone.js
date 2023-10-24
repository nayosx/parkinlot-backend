'use strict';

/**
 * parking-telephone service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::parking-telephone.parking-telephone');
