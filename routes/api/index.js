const router = require('express').Router();
const testimonialRoutes = require('./testimonialRoutes');
const blogRoutes = require('./blogRoutes');

router.use('/testimonials', testimonialRoutes);
router.use('/blogs', blogRoutes);

module.exports = router;
