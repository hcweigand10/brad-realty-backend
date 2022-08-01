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
    paragraph_titles: {
      type: DataTypes.TEXT,
      allowNull: false,
      get() {
          return this.getDataValue('paragraph_titles').split(';')
      },
      set(val) {
         this.setDataValue('paragraph_titles',val.join(';'));
      },
    },
    paragraphs: {
      type: DataTypes.TEXT,
      allowNull: false,
      get() {
          return this.getDataValue('paragraphs').split(';')
      },
      set(val) {
         this.setDataValue('paragraphs',val.join(';'));
      },
    },
    images: {
      type: DataTypes.TEXT,
      allowNull: false,
      get() {
          return this.getDataValue('images').split(';')
      },
      set(val) {
         this.setDataValue('images',val.join(';'));
      },
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
