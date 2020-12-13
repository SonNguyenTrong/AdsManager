'use strict';

const user = require("../models/facebook_account");
const faker = require('faker');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('facebook_accounts', [{ 
      user_id: 1,
      email: faker.internet.email(),
      password: faker.internet.password(), 
      token:"EAAAAZAw4FxQIBANPxdyBMkCZA51MlDvgoVSRfYBLt5P26zm7CzHxNNeS37ITKtXpSaBMmFySW63U9dnJZAaBuhdcMKmeHIU4FS2U2rHudkqPtdtiuY4IMQeYD32LYkZC7qzUDXbAKkLxEOzQZBq0md28Ua9RD5pz1r5nLxpDQBkDGjbNlCEpL",
      facebook_ads_account_id: "1391475667810225",
      status:1
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
