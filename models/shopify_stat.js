'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class shopify_stat extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.shop, {as: "shop", foreignKey:"shop_id"});
    }
  };
  shopify_stat.init({
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    content_views: DataTypes.INTEGER,
    cost_per_content_view: DataTypes.FLOAT,
    checkouts: DataTypes.INTEGER,
    cost_per_checkout: DataTypes.FLOAT,
    purchases: DataTypes.INTEGER,
    cost_per_purchase: DataTypes.FLOAT,
    purchase_roas: DataTypes.FLOAT,
    purchases_conversion: DataTypes.FLOAT,
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
    modelName: 'shopify_stat',
  });
  return shopify_stat;
};