var http = require('http');
var querystring = require('querystring');
var fs = require('fs');
var url = require('url');
function resDefault(res) {
	var readPath = __dirname + '/' + url.parse('index.html').pathname;
	var indexPage = fs.readFiltSync(readPath);
	res.writeHead(200, {'Content-Type' : 'text/html'});
	res.end(indexPage);
};
func resAdd(req, res) {
	var postData = '';
	req.setEncoding('utf8'); //设置接收数据编码格式为UTF - 8
	req.addListener('data', function(postDataChunk) {
		postData += postDataChunk;
	});
	req.addListener('end', function() {
		var param = querystring.parse(postData);
		console.log(postData);
		console.log(param);
		res.writeHead(200, {'Content-Type' : 'text/plain'});
		res.end('success');
	});
};
http.createServer(function(req, res) {
	var pathname = url.parse(req.url).pathname;
	switch(pathname) {
		case '/add' : resAdd(res, req);
			break;
		
		default: resDefault(res);
			break;
	}
	res.writeHead(200, {'Content-Type' : 'text/plain'});
	res.end('success');
}).listen(1337, '127.0.0.1');
