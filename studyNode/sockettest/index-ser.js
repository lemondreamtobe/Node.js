var io = require('socket.io').listen(8080);
io.sockets.on('connection', function (socket) {
		
		socket.on('msg', function(data) {
			console.log(data);
			
			if (data.state) {
				
				if (data.state == 'success') {
					socket.emit('msg', {'me' : 'very good'});
				} else {
					socket.emit('msg', {other :' thast all'});
				}
			} else {
				socket.emit('msg', {other : 'tahts all'})
			}
		})
});