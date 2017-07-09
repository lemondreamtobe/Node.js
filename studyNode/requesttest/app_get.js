var http = require('http');
http.createServer(function(req, res) {
	res.writeHead(200, {'Content-Type' : 'text/plain'});
	res.end('hello world' + req.method);
}).listen(1133, '127.0.0.1');
console.log('server runing');
