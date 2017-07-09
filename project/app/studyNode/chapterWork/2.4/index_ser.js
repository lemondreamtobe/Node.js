var io = require('socket.io').listen(8080, {log:false});
io.sockets.on('connection', function(data) {
	socket.on('msg', function(data) {
		
		//监听msg消息
		console.log(data);
		
		if (data.state) {
			
			if (data.state == 'success') {
				socket.emit('msg', {'me' : 'verygood'});
			} else {
				socket.emit('msg', {other: 'thats all'});
			}
		} else {
			socket.emit('msg', {other: 'thats all'});
		}
	});
});
