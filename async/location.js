var request = require('request');
var url = 'http://ipinfo.io';

module.exports = function (callback) {
	request({
		url: url,
		json: true
}, function (err, response, body) {
	if(err){
		callback();
	}else{
		callback(body)
	}
});
}