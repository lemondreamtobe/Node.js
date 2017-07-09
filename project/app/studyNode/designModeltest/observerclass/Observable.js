//被观察者类
module.exports = function() {
	var m_obserSet = [];
	var _self = this;
	this.addObser = function(observer) {
		m_obserSet.push(observer);
	};
	this.removeOber = function(obser) {
		
		if (!m_obserSet[obser]) {
			delete m_obserSet[obser];
		};
	};
	this.doAction = function() {
		console.log('ober do some action');
		_self.notifyAllObser();
	};
	this.notifyAllObser = function() {
		
		for (var key in m_obserSet) {
			m_obserSet[key].update();
		}
	}
 }
