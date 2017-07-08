var Product = require('./Product');
var util    = require('util');

function ProductA() {
	Product.call(this);
	this.getProduct = function() {
		console.log('product is get from class of PA');
	};
};
util.inherits(ProductA, Product);
module.exports = ProductA;
