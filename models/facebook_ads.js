'use strict';
const {
  Model, STRING
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class facebook_ads extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  facebook_ads.init({
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    facebook_account_id: DataTypes.INTEGER,
    campaign_name: DataTypes.STRING,
    delivery: DataTypes.INTEGER,
    budget: DataTypes.FLOAT,
    amount_spent: DataTypes.FLOAT,
    ctr: DataTypes.FLOAT,
    cpm: DataTypes.FLOAT,
    content_view: DataTypes.INTEGER,
    cost_per_content_view: DataTypes.FLOAT,
    checkouts_initiated: DataTypes.INTEGER,
    cost_per_checkout_initiated: DataTypes.FLOAT,
    purchases: DataTypes.INTEGER,
    cost_per_purchase: DataTypes.FLOAT,
    purchase_roas: DataTypes.FLOAT,
    purchases_conversion_value: DataTypes.FLOAT,
    last_purchase: DataTypes.FLOAT,
    status: DataTypes.TINYINT,
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE,
      defaultValue: sequelize.literal('NOW()')
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE,
      defaultValue: sequelize.literal('NOW()')
    },
  }, {
    sequelize,
    modelName: 'facebook_ads',
  });
  return facebook_ads;
};