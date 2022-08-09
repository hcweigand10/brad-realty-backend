const router = require('express').Router();
const { Paragraph } = require('../../models');

// GET all paragraphs
router.get('/', async (req, res) => {
  try {
    const paragraphData = await Paragraph.findAll();
    res.status(200).json(paragraphData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/', async (req,res) => {
  try {
    const paragraphData = await Paragraph.create(req.body);
    res.status(200).json(paragraphData);
  } catch (err) {
    res.status(500).json(err);
  }
})

module.exports = router