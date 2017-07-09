//具体观察者类
var util = require('util');
var Ioberver = require('./IObserverP');

 function FO() {
	Ioberver.call(this);
	this.update = function() {
		console.log('Second observer');
	};
};
util.inherits(FO, Ioberver);
module.exports = FO;
