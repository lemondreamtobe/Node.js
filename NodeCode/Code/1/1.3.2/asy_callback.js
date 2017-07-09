var fs = require("fs");
// 异步获取index.conf文件，并在回调函数中将执行结果data返回到getFileData函数中
fs.readFile('index.conf', function (err, data) {
  getFileData(data);
});

// 获取data数据后，执行setTimeout将返回值一秒后传递到returnData中
function getFileData(data){
	setTimeout(returnData(data), 1000);
}

// 获取data数据，并打印
function returnData(data){
	console.log(data);
}