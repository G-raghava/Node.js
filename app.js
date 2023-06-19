const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const blogRoutes = require('./routes/blogRoutes');

// express app
const app = express();

// connect to mongodb
const dbURI = 'mongodb+srv://netninja:test1234@nodetuts.1xigocw.mongodb.net/node-tuts?retryWrites=true&w=majority';

//mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })  //if u see deprecationwarning then use this line

mongoose.connect(dbURI)
  //.then(result => console.log('connected to db'))
  .then(result => app.listen(3000))
  .catch((err) => console.log(err));

//register view engine
app.set('view engine', 'ejs');


// middleware & static files
app.use(express.static('public'));
app.use(express.urlencoded({extended: true}));
app.use(morgan('dev'));
//app.use(morgan('tiny'));    //slight change


// routes
app.get('/', (req, res)=>{
    res.redirect('/blogs');
}); 

app.get('/about', (req, res)=>{
    res.render('about', {title: 'About'});
});

// blog routes
app.use('/blogs', blogRoutes);

// 404 page
app.use((req, res) =>{
    res.status(404).render('404', {title: '404'});
});