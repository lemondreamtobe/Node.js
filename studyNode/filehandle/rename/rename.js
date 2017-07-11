var BASE_DIR = __dirname;
var fs = require('fs');
fs.rename(BASE_DIR + '/feng.text', BASE_DIR + '/fen.text', function(err) {
	
	if (err) throw err;
	console.log('renamed success');
})