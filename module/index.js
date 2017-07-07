/*
 * 首先require加载两个模块
 * 
 */
var http = require('http'),
	url  = require('url');
var router = require('./router.js');

/*创建HTTP服务器*/
http.createServer(function(req, res) {
	var pathname = url.parse(req.url).pathname;
	req.setEncoding('utf8');
	res.writeHead(200, {'Content-Type' : 'text/html'});
	router.router(res, req, pathname);
}).listen(3300, '127.0.0.1');

/*运行打印*/
console.log('server is running');
