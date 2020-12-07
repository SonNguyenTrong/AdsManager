'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class shopify_shop extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.user, {as: "user", foreignKey:"user_id"});
      this.hasMany(models.shopify_stat, {as: "stats", foreignKey:"shop_id"})
    }
  };
  shopify_shop.init({
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    url: {
      type: DataTypes.STRING,
      unique: {
        args:true,
        msg: 'Shop already exist!'
      }
    },
    api_key: DataTypes.STRING,
    api_secret: DataTypes.STRING,
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
    modelName: 'shopify_shop',
  });
  return shopify_shop;
};