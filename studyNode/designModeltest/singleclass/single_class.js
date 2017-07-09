//single class
var _instance = null; //定义初始化_instance
module.exports = function(time) {
	
	//定义单例类
	function Class(time) {
		this.name = 'feng';
		this.book = 'Node';
		this.time = time;
	};
	Class.prototype = {
		constructor : Class,
		show : function() {
			console.log(this.book + 'is writted by ' + this.name + 'in the date of' + this.time);
		}
	};
	this.getInstance = function() {
		
		if (_instance === null) {
			_instance = new Class(time);
		}
		return _instance;
	};
};
