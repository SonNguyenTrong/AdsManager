'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('shopifyStats', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      shop_id: {
        type: Sequelize.INTEGER
      },
      content_views: {
        type: Sequelize.INTEGER
      },
      cost_per_content_view: {
        type: Sequelize.FLOAT
      },
      checkouts: {
        type: Sequelize.INTEGER
      },
      cost_per_checkout: {
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
      purchases_conversion: {
        type: Sequelize.FLOAT
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('shopifyStats');
  }
};