const router = require('express').Router();
const { Testimonial, Blog } = require('../../models');

// GET all testimonials
router.get('/', async (req, res) => {
  try {
    const testimonialData = await Testimonial.findAll();
    res.status(200).json(testimonialData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET a single testimonial
router.get('/:id', async (req, res) => {
  try {
    const testimonialData = await Testimonial.findByPk(req.params.id, {
      include: [{ model: Trip }]
    });

    if (!testimonialData) {
      res.status(404).json({ message: 'No testimonial found with this id!' });
      return;
    }

    res.status(200).json(testimonialData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// CREATE a testimonial
router.post('/', async (req, res) => {
  try {
    const testimonialData = await Testimonial.create(req.body);
    res.status(200).json(testimonialData);
  } catch (err) {
    res.status(400).json(err);
  }
});

// DELETE a testimonial
router.delete('/:id', async (req, res) => {
  try {
    const testimonialData = await Testimonial.destroy({
      where: {
        id: req.params.id
      }
    });

    if (!testimonialData) {
      res.status(404).json({ message: 'No testimonial found with this id!' });
      return;
    }

    res.status(200).json(testimonialData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
