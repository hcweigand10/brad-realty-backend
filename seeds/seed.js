const sequelize = require('../config/connection');
const { Testimonial, Blog, Paragraph } = require('../models');

const testimonialSeedData = require('./testimonialSeedData.json');
const blogSeedData = require('./blogSeedData.json');
const paragraphSeedData = require('./paragraphSeedData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const testimonials = await Testimonial.bulkCreate(testimonialSeedData);
  const blogs = await Blog.bulkCreate(blogSeedData);
  const paragraphs = await Paragraph.bulkCreate(paragraphSeedData);


  process.exit(0);
};

seedDatabase();
