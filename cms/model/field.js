const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/config');
const ContentType = require('./contentType');

const Field = sequelize.define('Field', {
  name: { type: DataTypes.STRING, allowNull: false },
  field_type: { type: DataTypes.STRING, allowNull: false },
  required: { type: DataTypes.BOOLEAN, defaultValue: false },
  default_value: { type: DataTypes.TEXT },
  validation_rules: { type: DataTypes.TEXT },
  created_at: { type: DataTypes.DATE, defaultValue: Sequelize.NOW },
  updated_at: { type: DataTypes.DATE, defaultValue: Sequelize.NOW, onUpdate: Sequelize.NOW },
}, {
  timestamps: true, // Enable timestamps to manage `created_at` and `updated_at`
  createdAt: 'created_at', // Map to your custom `created_at` column
  updatedAt: 'updated_at', // Map to your custom `updated_at` column
});

Field.belongsTo(ContentType, { foreignKey: 'content_type_id' });

module.exports = Field;
