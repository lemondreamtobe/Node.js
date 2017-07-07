var request = require('request');
request.post('http://127.0.0.1:1440', {form:{'name':'feng','bool':'node.js'}}, function(error, response, result) {
	console.log(result);
});
