'use strict';

const user = require("../models/facebook_ads");
const faker = require('faker');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

    await queryInterface.bulkInsert('facebook_ads', [{ 
      facebook_account_id: 1,
      campaign_name: faker.name.title(),
      delivery: Math.random(1),
      budget: faker.random.float(1000),
      amount_spent: faker.random.float(100),
      ctr: faker.random.float(100),
      cpm: faker.random.float(100),
      content_view: faker.random.number(1000),
      cost_per_content_view: faker.random.float(100),
      checkouts_initiated: faker.random.number(1000),
      cost_per_checkout_initiated: faker.random.float(100),
      purchases: faker.random.number(1000),
      cost_per_purchase: faker.random.float(100),
      purchase_roas: faker.random.float(100),
      purchases_conversion_value: faker.random.float(100),
      last_purchase: faker.random.float(1000),
      status: 1,
    }], {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
