var express = require('express'),
	app = express(),
	mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/heroes');

var heroSchema = mongoose.Schema({
	name: 'string'
});
var Hero = mongoose.model('heroes', heroSchema);

// var newHero = new Hero({
// 	name: 'Batman'
// });
// newHero.save(function(err, hero) {
// 	console.log(hero);
// });


app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/node_modules'));
app.use(express.static(__dirname + '/src'));

// views is directory for all template files
app.set('views', __dirname + '/views');

app.get('/', function(request, response) {
	response.render('index');
});
app.get('/heroes', function(req, res) {
	var heroes = [];
	var promise = Hero.find();

	promise.then(function(heroes) {
		res.json({
			heroes: heroes
		});
	});

});

app.listen(app.get('port'), function() {
	console.log('Node app is running on port', app.get('port'));
});