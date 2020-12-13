'use strict';
const {
  Model
} = require('sequelize');
const jwt = require('jsonwebtoken');
module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasMany(models.shopify_account, {as: "shopify_accounts", foreignKey:"user_id"});
    }
    static getSignedJwtToken = function() {
      return jwt.sign({ id: this._id }, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRE
      });
    };
  };
  user.init({
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    username: {
      type: DataTypes.STRING,
      unique: {
        args:true,
        msg: 'Username already exist!'
      }
    },
    password: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
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
    status: DataTypes.INTEGER,
    created_at: {
      allowNull: false,
      type: DataTypes.DATE,
      defaultValue: sequelize.literal('NOW()')
    },
    updated_at: {
      allowNull: false,
      type: DataTypes.DATE,
      defaultValue: sequelize.literal('NOW()')
    }
  }, {
    sequelize,
    timestamps: false,
    modelName: 'user',
  });
  return user;
};