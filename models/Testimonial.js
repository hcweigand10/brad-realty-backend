const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// create our Testimonial model
class Testimonial extends Model {}

// create fields/columns for Testimonial model
Testimonial.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    review: {
      type: DataTypes.TEXT,
      allowNull: false,
      unique: false,
    },
  },
  {
    sequelize,
    timestamps: false,
    underscored: true,
    modelName: 'testimonial'
  }
);

module.exports = Testimonial;
