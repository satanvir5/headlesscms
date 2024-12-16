const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/config');
const Content = require('./content');
const Field = require('./field');

const ContentField = sequelize.define('ContentField', {
  field_value: { type: DataTypes.TEXT },
  created_at: { type: DataTypes.DATE, defaultValue: Sequelize.NOW },
  updated_at: { type: DataTypes.DATE, defaultValue: Sequelize.NOW, onUpdate: Sequelize.NOW },
}, {
  timestamps: true, // Enable timestamps to manage `created_at` and `updated_at`
  createdAt: 'created_at', // Custom column for `created_at`
  updatedAt: 'updated_at', // Custom column for `updated_at`
});

ContentField.belongsTo(Content, { foreignKey: 'content_id' });
ContentField.belongsTo(Field, { foreignKey: 'field_id' });

module.exports = ContentField;
