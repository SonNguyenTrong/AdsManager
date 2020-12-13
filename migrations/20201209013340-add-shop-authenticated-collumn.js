'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn(
        'shopify_shops',
          'autheticated', {
            type: Sequelize.DataTypes.INTEGER,
            defaultValue: 0
          }
      );
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('shopify_shops','autheticated');
  }
};