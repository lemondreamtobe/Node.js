var util = require('util');
var Person = require('./Person');

function Overload() {
	Person.call(this);
	this.eat = function() {
		console.log('i can\' sleep');
	};
};
util.inherits(Overload, Person);
module.exports = Overload;
