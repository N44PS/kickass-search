var request = require('request'),
	_baseUrl = 'https://kickass.to/json.php?q=';

module.exports = kickass = {
	search:function(name, callbackSuccess, callbackError) {
		callbackSuccess = callbackSuccess || false;
		callbackError = callbackError || false;

		var _url = _baseUrl + name;

		request({
		  url: _url,
		  method: 'GET',
		  json: true
		}, function (error, response, body) {

		  if (!error && response.statusCode === 200 && body.total_results > 0) {
		    if (callbackSuccess) {
		      callbackSuccess(body);
		    }
		  }
		  else if (callbackError) {
		  	err = error || {};
		  	err.total_results = 0;
		    callbackError(err);
		  }
		});
	}
}
