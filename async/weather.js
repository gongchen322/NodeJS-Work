var request = require('request');

module.exports = function (location, callback) {

	var encodedLocation=encodeURIComponent(location);
	var url='http://api.openweathermap.org/data/2.5/weather?q='+encodedLocation+'&appid=44db6a862fba0b067b1930da0d769e98';

	if(!location) {
		return callback('No location provider');
	}

	request({
		url: url,
		json: true
}, function (err, response, body) {
	if(err){
		callback('Unable to fetch weather');
	}else{
		callback('It\'s '+body.main.temp+ ' in ' + body.name+ '!')
	}
});
}