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
    zillow_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    date: {
      type: DataTypes.STRING,
      allowNull: false
    },
    work_done: {
      type: DataTypes.STRING,
      allowNull: false
    },
    review_body: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    local_knowledge: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: true,
    },
    process_expertise: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: true,
    },
    responsiveness: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: true,
    },
    negotiation_skills: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: true,
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
