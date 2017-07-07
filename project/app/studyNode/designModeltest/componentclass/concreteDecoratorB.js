var util = require('util');
var Decorator = require('./decorator');

function ConcreteDecoratorB() {
	Decorator.call(this);
	this.operation = function() {
		Decorator.operation();
		console.log('add some decorator by ConcreteDecoratorA');
		this.addedBehavior = function() {
			console.log('add new method by ConcreteDecoratorB')
		}
	}
}
util.inherits(ConcreteDecoratorB, Decorator);
module.exports = ConcreteDecoratorB;
