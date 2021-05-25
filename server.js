const express = require('express');

const app = express();

const port = 3000;

// register view engine
app.set("view engine", 'ejs');

console.log('Server Running!');