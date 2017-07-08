var Com = require('./component');
var CCom = require('./concreteComponent');
var Decro = require('./decorator');
var ComA = require('./CCA');
var ComB = require('./CCB');

var com = new Com();
var ccom = new CCom();
var decro = new Decro();
var comA = new ComA();
var comB = new ComB();

console.log('<------com------>');
com.operation();

console.log('<-----cretecom----->');
ccom.operation();

console.log('<------decro---->');
decro.operation();

console.log('<-----comA----->');
comA.operation();

console.log('<-----comB----->');
comB.operation();
comB.addedBehavior();


