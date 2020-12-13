'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class shopify_account extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.user, {as: "user", foreignKey:"user_id"});
      this.hasMany(models.shopify_shop, {as: "shopify_shops", foreignKey:"shopify_account_id"})
    }
  };
  shopify_account.init({
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
    user_id: DataTypes.INTEGER,
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
    modelName: 'shopify_account',
  });
  return shopify_account;
};