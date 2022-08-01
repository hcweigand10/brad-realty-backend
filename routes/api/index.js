const router = require('express').Router();
const testimonialRoutes = require('./testimonialRoutes');
const blogRoutes = require('./blogRoutes');
const paragraphRoutes = require('./paragraphRoutes');

router.use('/testimonials', testimonialRoutes);
router.use('/blogs', blogRoutes);
router.use('/paragraphs', paragraphRoutes);

module.exports = router;
