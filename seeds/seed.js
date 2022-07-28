const sequelize = require('../config/connection');
const { Testimonial, Blog } = require('../models');

const testimonialSeedData = require('./testimonialSeedData.json');
const blogSeedData = require('./blogSeedData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const testimonials = await Testimonial.bulkCreate(testimonialSeedData);

  const blogs = await Blog.bulkCreate(blogSeedData);


  process.exit(0);
};

seedDatabase();
