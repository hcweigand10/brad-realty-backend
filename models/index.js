const Testimonial = require('./Testimonial');
const Blog = require('./Blog');
const Paragraph = require('./Paragraph');

Blog.hasMany(Paragraph)

module.exports = { Testimonial, Blog, Paragraph };
