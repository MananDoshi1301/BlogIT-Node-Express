// blog_index, blog_details, blog_create_get, blog_create_post, blog_delete

const Blog = require('../models/blog');
const moment = require('moment');

const blog_index = (req, res) => {
  Blog.find()
    .sort({ createdAt: -1 })
    .then((result) => {
      blogs = result;
      res.render('index', { blogs, moment: moment });
    })
    .catch((err) => console.log(err.message));
};

const blog_details = (req, res) => {
  const id = req.params.id;
  Blog.findById(id)
    .then((result) => {
      res.render('blog', { blog: result, moment: moment });
    })
    .catch((err) => console.log(err.message));
};

const blog_create_get = (req, res) => {
  res.render('create');
};

const blog_create_post = (req, res) => {
  const blog = new Blog(req.body);
  blog
    .save()
    .then((result) => {
      res.redirect('/');
    })
    .catch((err) => console.log(err.message));
};

const blog_delete = (req, res) => {
  const id = req.params.id;
  Blog.findByIdAndDelete(id)
    .then((result) => {
      res.json({ redirect: '/blogs' });
    })
    .catch((err) => console.log(err.message));
};

module.exports = {
  blog_index,
  blog_details,
  blog_create_get,
  blog_delete,
  blog_create_post,
};
