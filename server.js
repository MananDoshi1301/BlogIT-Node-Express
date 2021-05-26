const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const Blog = require('./models/blog');

const app = express();

const port = process.env.port || 3000;

//dBConnection
const dbUri = "mongodb+srv://manan123:manan123@blogitcluster.pa4zc.mongodb.net/Node-Tut?retryWrites=true&w=majority";
mongoose.connect(dbUri, {useUnifiedTopology:true, useNewUrlParser:true})
.then(result=>app.listen(port))
.catch(err=>console.log(err.message));

// register view engine
app.set("view engine", 'ejs');

console.log('Server Running', 'on port', port);

app.use(express.static('public'));
app.use(express.urlencoded({extended:true}));
app.use(morgan('dev'));

app.get('/', (req, res) => {  
  Blog.find().sort({createdAt:-1})
  .then(result=>{
    blogs = result;
    res.render('index', { blogs });
  })
  .catch(err=>console.log(err.message));
})

app.get('/blogs', (req, res) => {
  res.redirect('/');
})

app.post('/blogs',(req, res)=>{
  const blog = new Blog(req.body);
  blog.save().then(result=>{
    res.redirect('/')
  }).catch(err=>console.log(err.message));
})

app.get('/about', (req, res) => {
  res.render('about')
})

app.get('/blog/create', (req, res) => {
  res.render('create');
})

app.get('/blogs/:id', (req,res)=>{
  const id = req.params.id;
  Blog.findById(id)
  .then(result=>{
    res.render('blog', {blog:result})
  }).catch(err=>console.log(err.message));
})

app.use((req, res) => {
  res.status(404).render('404');
})