'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn(
        'shopify_stats',
          'camp_name', {
            type: Sequelize.DataTypes.STRING,
          }
      );
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('shopify_shops','camp_name');
  }
};