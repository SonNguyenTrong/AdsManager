'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class shop extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.user, {as: "user", foreignKey:"user_id"});
      this.hasOne(models.shopify_stat, {as: "stat", foreignKey:"shop_id"})
    }
  };
  shop.init({
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    url: DataTypes.STRING,
    api_key: DataTypes.STRING,
    api_secret: DataTypes.STRING,
    status: DataTypes.STRING,
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
    modelName: 'shop',
  });
  return shop;
};