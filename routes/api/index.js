const router = require('express').Router();
const testimonialRoutes = require('./testimonialRoutes');
const blogRoutes = require('./blogRoutes');
const paragraphRoutes = require('./paragraphRoutes');
const userRoutes = require('./userRoutes');

router.use('/testimonials', testimonialRoutes);
router.use('/blogs', blogRoutes);
router.use('/paragraphs', paragraphRoutes);
router.use('/users', userRoutes);

module.exports = router;
