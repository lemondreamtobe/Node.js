var Product = require('./Product');
var util    = require('util');

function ProductB() {
	Product.call(this);
	this.getProduct = function() {
		console.log('product is get from class of PB');
	};
};
util.inherits(ProductB, Product);
module.exports = ProductB;
