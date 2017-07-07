var util = require('util');
var Person = require('./Person.js');

function Coder() {
	Person.call(this);
}
util.inherits(Coder, Person);
Coder.prototype.coding = function() {
	console.log('i can code');
};
module.exports = Coder;
