var http        = require('http'),
	querystring = require('querystring');
http.createServer(function(req ,res) {
	var postData = '';
	
	//异步接收客户端post的数据
	req.addListener('data', function(postDataChunk) {
		postData += postDataChunk;
	});
	
	//异步数据接收完成后执行的回调函数
	req.addListener('end', function() {
		var postStr = JSON.stringify(querystring.parse(postData));
		res.writeHead(200, {'Content-Type' : 'text/plain'});
		res.end(postStr + '\n' + req.method);
	})
}).listen(1440, '127.0.0.1');
console.log('server is runing');
