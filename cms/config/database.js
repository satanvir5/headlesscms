const { Sequelize } = require('sequelize');

// Set up your database connection (replace with your actual details)
const sequelize = new Sequelize('cms', 'root', '12345678', {
  host: 'localhost',
  dialect: 'mysql',  // or 'postgres', 'sqlite', etc.
  logging: false,    // Disable logging, can be enabled for debugging
});

module.exports = sequelize;
