'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      username: {
        type: Sequelize.STRING,
        unique: {
          args:true,
          msg: 'Username already exist!'
        }
      },
      password: {
        type: Sequelize.STRING
      },
      email: {
        type:Sequelize.STRING,
        validate:{
            notEmpty:{
                args:true,
                msg:"Email-id required"
            },
            isEmail:{
                args:true,
                msg:'Valid email-id required'
            }
        },
        unique: {
            args:true,
            msg: 'Email address already in use!'
        }
      },
      status: {
        type: Sequelize.INTEGER,
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
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Users');
  }
};