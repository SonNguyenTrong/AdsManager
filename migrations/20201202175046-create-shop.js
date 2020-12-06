'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('shops', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      url: {
        type: Sequelize.STRING
      },
      api_key: {
        type: Sequelize.STRING
      },
      api_secret: {
        type: Sequelize.STRING
      },
      status: {
        type: Sequelize.ENUM,
        values: ['active', 'paused', 'deleted']
      },
      user_id :{
        type: Sequelize.INTEGER
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
    await queryInterface.dropTable('shops');
  }
};