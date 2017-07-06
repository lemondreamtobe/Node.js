/*
 * 首先require加载需要的Node.js原生模块
 * 
 */
var http = require('http'),    //服务器创建
	dns  = require('dns'),	   //DNS查询
	fs   = require('fs'),      //文件处理
	url  = require('url'),     //url处理
	querystring = require('querystring'); //字符串处理
function router(res,req,pathname){
	switch(pathname) {
		case '/parse' :
			parseDns(res,req);
			break;
	default:
		goIndex(res,req);		
	}
};
function goIndex(res,req) {
	var readPath = _dirname + '/' + url.parse('index.html').pathname;
	var indexPage = fs.readFileSync(readPath);
	res.end(indexPage);
};
function parseDns(res,req) {
	var postData = '';
	req.addListener('data', function(postDataChunk) {
		postData += postDataChunk;
	})
	//HTTP响应html页面信息
	req.addListener('end', function() {
		var retData = getDns(postData, function(domain, addresses) {
			res.writeHead(200, {'Content-Type':'text/html'});
			res.end('<html><head><meta charset="UTF-8" content="text/html"></head><div style="text-align:center">domain:<span style="color:red">'+domain+"</span>Ip:<span style='color:red'>" + addresses.join(",") + "</span></div></html>")
		});
		return;
	});
};
function getDns(postData,callback) {
	var domain = querystring.parse(postData).search_dns;
	dns.resolve(domain, function(err, addresses) {
		
		if (!addresses) {
			addresses = ['no exist dns'];
		};
		callback(domain, addresses);
	})
}
http.createServer(function(req,res) {
//	res.writeHead(200, {'Content-Type':'text/html'});
//	var readPath = _dirname + '/' + url.parse('index.html').pathname;
//	var indexPage = fs.readFileSync(readPath);
//	res.end(indexPage);
	var pathname = url.parse(req.url).pathname;
	req.setEncoding('utf-8');
	res.writeHead(200, {'Content-Type':'text/html'});
	router(res,req,pathname);
}).listen(3000, '127.0.0.1');
console.log('server running at 127.0.0.1:3000');
