var request = require('request');
var url = 'http://api.openweathermap.org/data/2.5/weather?q=SanBruno&appid=44db6a862fba0b067b1930da0d769e98';

module.exports = function (callback) {
	request({
		url: url,
		json: true
}, function (err, response, body) {
	if(err){
		callback('Unable to fetch weather');
	}else{
		//console.log(JSON.stringify(body, null, 4));
		callback('It\'s '+body.main.temp+ ' in ' + body.name+ '!')
	}
});
}