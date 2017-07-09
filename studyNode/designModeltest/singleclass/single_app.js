var Single = require('./single_class');
var singleObj1 = new Single('2017 7 7');
var sc1 = singleObj1.getInstance('2017 7 7');
sc1.show();
var singleObj2 = new Single('2017 7 17');
var sc2 = singleObj2.getInstance('2017 7 17');
sc2.show();

