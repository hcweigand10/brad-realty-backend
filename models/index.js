const Testimonial = require('./Testimonial');
const Blog = require('./Blog');
const Paragraph = require('./Paragraph');
const User = require('./User');

Blog.hasMany(Paragraph)

module.exports = { Testimonial, Blog, Paragraph, User };
