'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const basename = path.basename(module.filename);
const env = process.env.NODE_ENV || 'development';
const config = require('../../config/config.json')[env];
const modelPath = path.join(process.cwd(),'/models/')
const db = {};

const sequelize = new Sequelize(config.database, config.username, config.password,config);

sequelize.authenticate()
  .then(() =>{
      console.log('connection establised')
  })
  .catch(err =>{
      console.log(err)
      console.error('Unable to connect to the db')
  })

fs
  .readdirSync(modelPath)
  .filter(file =>
    (file.indexOf('.') !== 0) &&
    (file !== basename) &&
    (file.slice(-3) === '.js'))
  .forEach(file => {
    const model = require(path.join(modelPath, file))(sequelize, Sequelize.DataTypes);
    db[model.name] = model;
  })

Object.keys(db).forEach(modelName => {
if (db[modelName].associate) {
  db[modelName].associate(db);
}
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
