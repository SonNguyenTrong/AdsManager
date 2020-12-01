'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class shopifyStat extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  shopifyStat.init({
    shop_id: DataTypes.INTEGER,
    content_views: DataTypes.INTEGER,
    cost_per_content_view: DataTypes.FLOAT,
    checkouts: DataTypes.INTEGER,
    cost_per_checkout: DataTypes.FLOAT,
    purchases: DataTypes.INTEGER,
    cost_per_purchase: DataTypes.FLOAT,
    purchase_roas: DataTypes.FLOAT,
    purchases_conversion: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'shopifyStat',
  });
  return shopifyStat;
};