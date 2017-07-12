/*
 * 
 * Node.js base sever
 * 
 */
var http = require('http');
http.createServer(function(req, res) {
	var reHtml='<html><head><meta charset="utf-8"><title>node i like u</title></head><body><div>hi, i like node.js</div></body></html>'
	res.writeHead(200,{'Content-Type' : 'text/html'});
	res.write(reHtml);
	res.end('你好');
}).listen(2000, '127.0.0.1');
console.log('sever runing at http://127.0.0.1:2000');
