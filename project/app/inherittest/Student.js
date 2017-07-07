var util = require('util');
var Person = require('./Person.js');

function Student() {
	Person.call(this);
}
util.inherits(Student, Person);
Student.prototype.study = function() {
	console.log('i can study');
};
module.exports = Student;
