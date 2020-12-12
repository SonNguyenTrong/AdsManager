'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('facebook_ads', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      facebook_account_id: {
        type: Sequelize.INTEGER
      },
      campaign_name: {
        type: Sequelize.STRING
      },
      delivery: {
        type: Sequelize.TINYINT
      },
      budget: {
        type: Sequelize.FLOAT
      },
      amount_spent: {
        type: Sequelize.FLOAT
      },
      ctr: {
        type: Sequelize.FLOAT
      },
      cpm: {
        type: Sequelize.FLOAT
      },
      content_view: {
        type: Sequelize.INTEGER
      },
      cost_per_content_view: {
        type: Sequelize.FLOAT
      },
      checkouts_initiated: {
        type: Sequelize.INTEGER
      },
      cost_per_checkout_initiated: {
        type: Sequelize.FLOAT
      },
      purchases: {
        type: Sequelize.INTEGER
      },
      cost_per_purchase: {
        type: Sequelize.FLOAT
      },
      purchase_roas: {
        type: Sequelize.FLOAT
      },
      purchases_conversion_value: {
        type: Sequelize.FLOAT
      },
      last_purchase: {
        type: Sequelize.FLOAT
      },
      status: {
        type: Sequelize.TINYINT,
        defaultValue: 1
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('NOW()')
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('NOW()')
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('facebook_ads');
  }
};