var foo = require('./mexport');
var myfoo = new foo('zhanglinfeng', 17);
console.log('获取修改前的私有变量');
console.log(myfoo.getAge());
console.log(myfoo.getName());
