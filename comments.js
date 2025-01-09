// Create web server
var express = require('express');
var app = express();

// Create route
app.get('/comments', function(req, res){
  res.send('This is the comments page');
});

// Start server
app.listen(3000);