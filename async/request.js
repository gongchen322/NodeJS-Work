
var weather = require('./weather.js');
var location = require('./location.js');

weather(function (currentWeather) {
	console.log(currentWeather);
});

location(function (location) {
	console.log('city: ' + location.city);
	console.log('log/lat: ' + location.loc);
});
/*
request({
	url: url,
	json: true
}, function (err, response, body) {
	if(err){
		console.log('Unable to fetch weather');
	}else{
		//console.log(JSON.stringify(body, null, 4));
		console.log('It\'s '+body.main.temp+ ' in ' + body.name+ '!')
	}
});
*/