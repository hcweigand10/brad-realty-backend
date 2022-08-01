const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// create our Paragraph model
class Paragraph extends Model {}

// create fields/columns for Paragraph model
Paragraph.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    paragraph_title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    content: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    image_url: {
        type: DataTypes.STRING,
        allowNull: true
    }
  },
  {
    sequelize,
    timestamps: false,
    underscored: true,
    modelName: 'paragraph'
  }
);

module.exports = Paragraph;
