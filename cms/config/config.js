const { Sequelize } = require('sequelize');

// Replace these with your actual database connection details
const sequelize = new Sequelize('firozem_headlesscms', 'firozem_osbdcms', 'osbdcms@1234', {
  host: '192.254.186.198',
  dialect: 'mysql', // or 'postgres', 'sqlite', etc.
  logging: false,   // You can enable this for debugging purposes
});

module.exports = sequelize;
