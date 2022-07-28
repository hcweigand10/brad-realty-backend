const router = require('express').Router();
const travellerRoutes = require('./testimonialRoutes');
const locationRoutes = require('./blogRoutes');
const tripRoutes = require('./tripRoutes');

router.use('/travellers', travellerRoutes);
router.use('/locations', locationRoutes);
router.use('/trips', tripRoutes);

module.exports = router;
