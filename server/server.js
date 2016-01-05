var express = require('express');
var mongoose = require('mongoose')
var bodyParser = require('body-parser');
var session = require('express-session');
var app = express();


var stats = [[],[],[],[],[],[],[],[],[],[],[]];

module.exports.app = app;
app.set('port', 3000);
console.log('hello World');

// Connect to local mongoose database
mongoose.connect('mongodb://localhost/confdb');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function(){
  console.log('mongodb connection is open');
})

console.log(__dirname);
// Serve client static files

app.use(express.static(__dirname + '/../client'));
app.use(bodyParser.json());

app.use(session({
  secret: 'my secret',
  resave: false,
  saveUninitialized: true
}));

app.get('/data', function(req, res){
  console.log('trying to get data')
  res.send(JSON.stringify(stats));
});

app.post('/data', function(req, res){
  stats[req.body.perc].push(req.body.truth);
  console.log("expect 0: " + req.body.perc);
})

// app.get('/', function(req, res){
//   //res.send('you can hear my server');
//   res.render(index);
// })
app.listen(5000);


//****************************
//UTILITY
//***************************

var createSession = function(req, res, newUser) {
  return req.session.regenerate(function () {
    req.session.user = newUser;
    res.redirect('/');
  });
};

var isLoggedIn = function (req, res) {
  return req.session ? !!req.session.user : false;
};

var checkUser = function (req, res, next) {
  if (!exports.isLoggedIn(req)) {
    res.redirect('/login');
  } else {
    next();
  }
};


//***************************
// AUTHENTICATION
//***************************

app.get('/signup', function(req, res){

});
app.get('/login', function(req, res){
  console.log(req.body);

});
app.get('/logout', function(req, res){

})
