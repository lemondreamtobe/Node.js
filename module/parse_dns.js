/*
 * dns解析模块
 */
var querystring = require('querystring'),
	dns         = require('dns');
exports.parseDns = function(res, req) {
	var postData = '';
	req.addListener('data', function(postDataChunk) {
		postData += postDataChunk;
	});
	req.addListener('end', function() {
		var retData = getDns(postData, function(domain, addresses) {
			res.writeHead(200, {'Content-Type' : 'text/html'});
			var htmlstr ='<html><head><meta charset="UTF-8" content="text/html"></head><div style="text-align:center">domain:<span style="color:red">'
						+ domain 
						+ '</span>Ip:<span style="color:red">' 
						+ addresses.join(',') 
						+ "</span></div></html>";
			res.end(htmlstr);
		});
		return;
	})
};
function getDns(postData, callback) {
	var domain = querystring.parse(postData).search_dns;
	dns.resolve(domain, function(err, addresses) {
		
		if (!addresses) {
			addresses = ['no exist!'];
		};
		callback(domain, addresses);
	});
};
