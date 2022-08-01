const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// create our Blog model
class Blog extends Model {}

// create fields/columns for Blog model
Blog.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    subtitle: {
      type: DataTypes.STRING,
      allowNull: false
    },
    date: {
      type: DataTypes.STRING,
      allowNull: false
    },
    thumbnail: {
      type: DataTypes.STRING,
      allowNull: false
    },
  },
  {
    sequelize,
    timestamps: false,
    underscored: true,
    modelName: 'blog'
  }
);

module.exports = Blog;
