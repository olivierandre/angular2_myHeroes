var express = require('express'),
	app = express(),
	mongoose = require('mongoose'),
	bodyParser = require('body-parser'),
	methodOverride = require('method-override');

app.use(bodyParser.urlencoded({
	'extended': 'true'
}));
app.use(bodyParser.json());
app.use(bodyParser.json({
	type: 'application/vnd.api+json'
}));
app.use(methodOverride('X-HTTP-Method-Override'));

if (process.env.NODE_ENV && process.env.NODE_ENV === 'dev') {
	mongoose.connect('mongodb://localhost/heroes');
} else {
	mongoose.connect(process.env.MONGOLAB_URI);
}


var heroSchema = mongoose.Schema({
	name: 'string',
    editor: 'string',
    description: 'string'
});
var Hero = mongoose.model('heroes', heroSchema);


app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/node_modules'));
app.use(express.static(__dirname + '/src'));

// views is directory for all template files
app.set('views', __dirname + '/views');

app.get('/', function (request, response) {
	response.render('index');
});
app.get('/heroes', function (req, res) {
	var heroes = [];
	var promise = Hero.find();

	promise.then(function (heroes) {
		res.json({
			heroes: heroes
		});
	});
});

app.post('/heroes', function (req, res) {
	var hero = new Hero();
	hero.name = req.body.name;
    hero.editor = req.body.editor;
    hero.description = req.body.description;

	hero.save(function (err, newHero) {
		if (err) {
			return console.log(err);
		}
		res.send(newHero);
	});
});

app.put('/heroes', function (req, res) {
	var id = req.body._id;

	Hero.findByIdAndUpdate(id, {
		$set: req.body
	}, {
		//  Options : renvoi la MAJ
		new: true
	}, function (err, newHero) {
		if (err) return handleError(err);
		res.send(newHero);
	});
});

app.delete('/heroes/:id', function (req, res) {
	Hero.find({
		_id: req.params.id
	}, function (err) {
		if (err) {
			return res.send(err);
		}

	}).remove().exec();
	res.json({
		"response": "ok"
	});

});

app.listen(app.get('port'), function () {
	console.log('Node app is running on port', app.get('port'));
});
