'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('shopify_stats', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
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
      shop_id: {
        type: Sequelize.INTEGER
      },
      status: {
        type: Sequelize.INTEGER,
      },
      extradata: {
        type: Sequelize.TEXT,
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('NOW()')
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('NOW()')
      }
    }, {
      timestamps: true,
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('shopify_stats');
  }
};