/*
 * 
 * 异步调用的思维
 */
function Person() {
	this.think = function(callback) {
		setTimeout(function(){
			console.log('thinking!!!');
			callback();
		}, 5000);
	};
	this.answer = function() {
		console.log('i am answering other question!');
	};
};
var person = new Person();
person.think(function() {
	console.log('think 5s, get the answer');
});
person.answer();
