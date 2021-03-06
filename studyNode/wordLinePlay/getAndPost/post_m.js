 /* 首先require 加载两个模块 */
 var http        = require('http'), 
	 fs          = require('fs'),
	 url   	     = require('url'),
	 querystring = require('querystring');
http.createServer(function(req, res) {
	var pathname = url.parse(req.url).pathname;
	switch(pathname){
		case '/add' : resAdd(res, req);
		break;
		default       : resDefault(res);
		break;
	}
}).listen(1337);

function resDefault(res){
	/* 获取当前index.html的路径 */
	var readPath = __dirname + '/' +url.parse('index.html').pathname;
	var indexPage = fs.readFileSync(readPath);
	res.writeHead(200, { 'Content-Type': 'text/html' });
	res.end(indexPage);
}

function resAdd(res, req){
	var postData = '';
    // 设置接收数据编码格式为 UTF-8
    req.setEncoding('utf8');
    // 接收数据块并将其赋值给 postData
    req.addListener('data', function(postDataChunk) {
        postData += postDataChunk;
    });
    req.addListener('end', function() {
        // 数据接收完毕，执行回调函数
        var param = querystring.parse(postData);
		console.log(postData);
		console.log(param);
		res.writeHead(200, { 'Content-Type': 'text/plain' });
		res.end('success');
    });
}