var http = require('http'),
	fs   = require('fs'),
	url  = require('url');
	
function resIndex(res) {
	
	//获取当前index.html路径
	var readPath = __dirname + '/' + url.parse('index.html').pathname;
	var indexPage = fs.readFileSync(readPath);
	res.writeHead(200, {'Content-Type' : 'text/html'});
	res.end(indexPage);
};
function resImage(res) {
	var readPath = __dirname + '/' + url.parse('logo.png').pathname;
	var indexPage = fs.readFileSync(readPath);
	res.writeHead(200, {'Content-Type' : 'image/png'});
	res.end(indexPage);
};
function resDefault(res) {
	res.writeHead(404, {'Content-Type' : 'text/plain'});
	res.end('cant not found');
};
http.createServer(function(req, res) {
	
	//get url from web
	var pathname = url.parse(req.url).pathname;
	
	//print the prop of url, method, headers from web req
	console.log(req.url);
	console.log(req.method);
	console.log(req.headers);
	
	//根据pathname，路由调用不同的处理逻辑
	switch(pathname) {
		case '/index' :
			resIndex(res); //响应HTML页面到客户端
			break;
		
		case  '/img' : 
			resImage(res); //响应图片数据到客户端
			break;
		
		default: 
			resDefault(res);
			break;
	}
}).listen(1337);
console.log('is running');
