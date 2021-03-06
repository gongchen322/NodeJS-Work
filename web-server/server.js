var express = require('express');
var app = express();
var PORT = 3000;


var middleWare = {
	requireAuthentication: function (req, res, next) {
		console.log('private route hit!');
		next();
	},
	logger: function (req, res, next) {
		console.log(req.method);
		next();
	}
};

app.use(middleWare.logger);

app.get('/about', middleWare.requireAuthentication, function (req, res) {
	res.send('About!');
});

app.use(express.static(__dirname + '/public'));


app.listen(PORT, function () {
	console.log('Server started on '+PORT);
});