var util = require('util');
var Person = require('./Person.js');

function Teacher() {
	Person.call(this);
}
util.inherits(Teacher, Person);
Teacher.prototype.teach = function() {
	console.log('i can teach');
};
module.exports = Teacher;
