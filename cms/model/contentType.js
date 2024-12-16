const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/config'); // Import the Sequelize instance

const ContentType = sequelize.define('ContentType', {
  name: {
    type: DataTypes.STRING(100),
    allowNull: false
  },
  slug: {
    type: DataTypes.STRING(100),
    allowNull: false,
    unique: true
  },
  description: {
    type: DataTypes.STRING(500),
    allowNull: true
  },
  created_at: {
    type: DataTypes.DATE,
    defaultValue: Sequelize.NOW
  },
  updated_at: {
    type: DataTypes.DATE,
    defaultValue: Sequelize.NOW,
    onUpdate: Sequelize.NOW
  }
}, {
  tableName: 'contentTypes', // Ensures that the table name matches
  timestamps: true, // Enable timestamps to manage `created_at` and `updated_at`
  createdAt: 'created_at', // Custom column for `created_at`
  updatedAt: 'updated_at', // Custom column for `updated_at`
  // Optionally you can also set the `paranoid` field if you want soft deletes
});

module.exports = ContentType;
