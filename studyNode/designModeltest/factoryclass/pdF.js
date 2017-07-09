var ProductA = require('./PA');
var ProductB = require('./PB');

exports.createProduct = function(type) {
	
	switch(type) {
		
		case 'ProductA' : return new ProductA();
						  break;
		
		case 'ProductB' : return new ProductB();	
						  break;
		
		default: break;
	}
};

