const express = require('express');
const morgan = require('morgan');
const app = express();

const port = 3000;

// register view engine
app.set("view engine", 'ejs');
app.listen(port);

console.log('Server Running', 'on port', port);

app.use(express.static('public'));
app.use(morgan('dev'));

app.get('/', (req, res) => {
  const blogs = [
    { title: "Blog1", snippet: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora, voluptatibus?" },
    { title: "Blog2", snippet: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora, voluptatibus?" },
    { title: "Blog3", snippet: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora, voluptatibus?" },
    { title: "Blog4", snippet: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora, voluptatibus?" },
    { title: "Blog5", snippet: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora, voluptatibus?" },
    { title: "Blog6", snippet: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora, voluptatibus?" },
  ]
  res.render('index', { blogs });
})

app.get('/blogs', (req, res) => {
  res.redirect('/');
})

app.get('/about', (req, res) => {
  res.render('about')
})

app.get('/blog/create', (req, res) => {
  res.render('create');
})

app.use((req, res) => {
  res.status(404).render('404');
})