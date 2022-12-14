const router = require('express').Router();
const { Blog, Paragraph } = require('../../models');

// GET all blogs
router.get('/', async (req, res) => {
  console.log('blogs: request')
  try {
    const blogData = await Blog.findAll({
      include: [
        {model: Paragraph}
      ]
    });
    res.status(200).json(blogData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET a single blog
router.get('/:id', async (req, res) => {
  try {
    const blogData = await Blog.findByPk(req.params.id, {
      include: [{ model: Paragraph }]
    });

    if (!blogData) {
      res.status(404).json({ message: 'No blog found with this id!' });
      return;
    }

    res.status(200).json(blogData);
  } catch (err) {
    console.log(err)
    res.status(500).json(err);
  }
});

// CREATE a blog
router.post('/', async (req, res) => {
  try {
    const blogData = await Blog.create(req.body);
    res.status(200).json(blogData);
  } catch (err) {
    res.status(400).json(err);
  }
});

// DELETE a blog
router.delete('/:id', async (req, res) => {
  try {
    const blogData = await Blog.destroy({
      where: {
        id: req.params.id
      }
    });

    if (!blogData) {
      res.status(404).json({ message: 'No blog found with this id!' });
      return;
    }

    res.status(200).json({ message: 'Successfully deleted!' });
  } catch (err) {
    res.status(500).json(err);
  }
});

// UPDATE a blog
router.put('/:id', async (req, res) => {
  console.log("update request")
  try {
    const blogData = await Blog.update(
    {
      isFeatured: req.body.isFeatured
    },
    { 
      where: {
        id: req.params.id
      }
    });
    console.log(blogData)

    if (!blogData) {
      res.status(404).json({ message: 'No blog found with this id!' });
      return;
    }

    res.status(200).json({ message: 'Successfully updated!' });
  } catch (err) {
    res.status(500).json(err);
  }
});


module.exports = router;
