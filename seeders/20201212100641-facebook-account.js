'use strict';

const user = require("../models/facebook_account");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('facebook_accounts', [{ 
      user_id: 1,
      email: "vitaliy6kq9fi@outlook.com",
      password:"123123@a", 
      email:"admin@rosimall.com",
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
