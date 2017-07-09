//person.js文件模块，返回一个perso函数，有两个方法
module.exports = function() {
	this.eat = function() {
		console.log('eat!')
	};
	this.say = function() {
		console.log('say');
	}
};

//person.js文件模块，返回一个包含eat方法和say方法的对象
exports.Person = {
	'say': function() {
		console.log('say')
	},
	'eat': function() {
		console.log('eat')
	}
};

//返回一个数组
module.exports = ['zhang', 'lin', 'feng'];

//返回一个对象，该对象包含数组
exports.arr = ['zhang', 'lin', 'feng'];

