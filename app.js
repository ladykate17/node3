var express = require('express');
var bodyParser = require('body-parser');
var indexController = require('./controllers/index.js');
var formController = require('./controllers/form.js');

var app = express();
app.set('view engine', 'jade');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended: false}));

app.get('/', indexController.index);
app.post('/formsubmit', formController.form);
app.get('/success', formController.success);

var server = app.listen(9648, function() {
	console.log('Express server listening on port ' + server.address().port);
});
