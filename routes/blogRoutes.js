const express = require('express');
const router = express.Router();
const blogController = require('../controllers/blogController');

const tableItem = [
  { stack: 'Bootstrap', purpose: 'Frontend Ui' },
  { stack: 'Node', purpose: 'Backend Process' },
  { stack: 'Express', purpose: 'Node Framework' },
  { stack: 'EJS', purpose: 'Embedding Templates' },
  { stack: 'Mongoose', purpose: 'Database interactions' },
  { stack: 'Moment', purpose: 'Time-Date Conversions' },
  { stack: 'Animate.css', purpose: 'Layout Animation' },
  { stack: 'AOS', purpose: 'Scroll Animation' },
  { stack: 'Morgan', purpose: 'Middlewares' },
]

router.get('/', blogController.blog_index);
router.post('/', blogController.blog_create_post);
router.get('/about', (req, res) => res.render('about', { tableItem }));
router.get('/create', blogController.blog_create_get);
router.get('/:id', blogController.blog_details);
router.delete('/:id', blogController.blog_delete);

module.exports = router;