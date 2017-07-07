/*
 * class:Person
 * param:name
 * method:sleep,eat
 */
module.exports = function() {
	this.name = 'person';
	this.sleep = function() {
		console.log('i am sleeping');
	};
	this.eat   = function() {
		console.log('i can eat');
	};
};
