'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('facebook_accounts', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      user_id :{
        type: Sequelize.INTEGER
      },
      email: {
        type:Sequelize.STRING,
        validate:{
            notEmpty:{
                args:true,
                msg:"Email required"
            },
            isEmail:{
                args:true,
                msg:'Valid email required'
            }
        },
        unique: {
            args:true,
            msg: 'Email address already in use!'
        }
      },
      password: {
        type: Sequelize.STRING
      },
      token: {
        type: Sequelize.STRING
      },
      facebook_ads_account_id: {
        type: Sequelize.STRING
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
    await queryInterface.dropTable('facebook_accounts');
  }
};