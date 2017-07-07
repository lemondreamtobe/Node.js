var util = require('util');
var target = require('./target');
var Adaptee = require('./adaptee');
function Adapter() {
	target.call(this);
	this.request = function() {
		var adaptee = new Adaptee();
		adaptee.specialRequest();
	}
};
util.inherits(Adapter, target);
module.exports = Adapter;
