'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('shopify_shops','user_id');
    await queryInterface.addColumn(
        'shopify_shops',
          'shopify_account_id', {
            type: Sequelize.DataTypes.INTEGER,
            defaultValue: 1
          }
      );
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('shopify_shops','shopify_account_id');
    await queryInterface.addColumn(
        'shopify_shops',
          'user_id', {
            type: Sequelize.DataTypes.INTEGER,
            defaultValue: 1
          }
      );
  }
};