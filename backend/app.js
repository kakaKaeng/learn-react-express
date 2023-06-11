const express = require('express');
const app = express();

// use ejs lib for render html from node server
app.set('view engine', 'ejs');

// sample
app.get('/', (req, res) => {
    const message = {
        message: 'hello world'
    };
    res.status(200).json(message);
});

// render html with data
app.get('/home', (req, res) => {
    const data = {
        message: 'World',
        items: ['apple', 'banana', 'apple']
    };
    res.render('home', data);
});

// it's router, api
// Note: when point to folder without file it will choose index.js file
app.use('/api', require('./api'));

// open port
app.listen(3000);
