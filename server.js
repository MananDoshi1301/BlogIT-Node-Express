const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const blogRoutes = require('./routes/blogRoutes');

const app = express();

const port = process.env.PORT || 3000;

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
  res.redirect('/blogs')
})

app.use('/blogs',blogRoutes);

app.use((req, res) => {
  res.status(404).render('404');
})