var _name, _age;
var name = '', age = 10;
function foo(name, age) {
	_name = name;
	_age = age;
};
foo.prototype.getName = function() {
	return _name;
};
foo.prototype.setName = function(name) {
	 _name = name;
};
foo.prototype.getAge = function() {
	return _age;
};
foo.prototype.setAge = function(age) {
	 _age = age;
};
foo.prototype.name = name;
foo.prototype.age = age;
module.exports = foo;
