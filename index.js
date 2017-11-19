var compression = require('compression');
var express = require('express');
var minifyHTML = require('express-minify-html');
var app = express();
var min = 48;
var max = 102;

app.use(minifyHTML({
  override:      true,
  htmlMinifier: {
    removeComments:            true,
    collapseWhitespace:        true,
    collapseBooleanAttributes: true,
    removeAttributeQuotes:     true,
    removeEmptyAttributes:     true,
    minifyJS:                  true
  }
}));

app.set('port', (process.env.PORT || 5000));

app.use(compression(), express.static(__dirname + '/public'));

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function(request, response) {
  response.render('index');
});

app.get('/about', function(request, response) {
  response.render('about');
});

app.use(express.static('public'));

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
