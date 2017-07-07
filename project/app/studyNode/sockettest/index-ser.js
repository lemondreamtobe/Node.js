var io = require('socket.io').listen(80);
//定义socket连接时执行的回调操作
io.socket.on('connection', function(socket) {
	socket.emit('news', {hello : 'world'});
	socket.on('my other event', function(data) {
		console.log(data);
	})
}
