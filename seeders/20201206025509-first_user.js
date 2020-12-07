'use strict';

const user = require("../models/user");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('users', [{ username: "admin@rosimall.com",password:"congdc17", email:"admin@rosimall.com",status:1}], {});
    await queryInterface.bulkInsert('shopify_shops',[{ 
      url: "rosi-mall.myshopify.com",
      api_key: "bd10d485f12f4965939d6d900f9c6a7f",
      api_secret: "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",
      status: 1,
      user_id: 1
    },
    {
      url: "rosimall.myshopify.com",
      api_key: "bd10d485f12f4965939d6d900f9c6a7f",
      api_secret: "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",
      status: 1,
      user_id: 1
    }
  ], {})
  },

  down: async (queryInterface, Sequelize) => {
    //
  }
};
