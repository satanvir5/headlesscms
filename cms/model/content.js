const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/config');
const ContentType = require('./contentType');



const Content = sequelize.define('content', {
  status: { type: DataTypes.STRING, defaultValue: 'draft' },
  created_by: { type: DataTypes.INTEGER },
  created_at: { type: DataTypes.DATE, defaultValue: Sequelize.NOW },
  updated_at: { type: DataTypes.DATE, defaultValue: Sequelize.NOW, onUpdate: Sequelize.NOW },
  published_at: { type: DataTypes.DATE },
}, {
  tableName: 'contents', // Ensure this matches your DB table name
  timestamps: true, // Enable timestamps
  createdAt: 'created_at', // Custom column for createdAt
  updatedAt: 'updated_at'  // Custom column for updatedAt
});

Content.belongsTo(ContentType, { foreignKey: 'content_type_id' });

module.exports = Content;
