var Fober = require('./FirstObser');
var Sober = require('./SecondObser');
var Oble = require('./Observable');

var fober = new Fober();
var sober = new Sober();
var oble = new Oble();

oble.addObser(fober);
oble.addObser(sober);
oble.doAction();
