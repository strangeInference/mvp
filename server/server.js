var express = require('express');
var mongoose = require('mongoose')
var app = express();

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
// app.get('/', function(req, res){
//   //res.send('you can hear my server');
//   res.render(index);
// })
app.listen(3000);
