//var http = require('http');
//http.createServer(function(req, res) {
//	console.log(req.url);
//	res.end('success');
//}).listen(1337, '127.0.0.1');

//另一种写法
var http = require('http');
var server = http.createServer();
server.on('request', function(req, res) {
	
	if (req.url == '/favicon.ico') {
		return;
	} else {
		console.log(req.url);
		res.end('success');
	}
}).listen(1337, '127.0.0.1');
