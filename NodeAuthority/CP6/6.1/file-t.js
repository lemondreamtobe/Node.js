var fs = require('fs');
fs.readFile('./index.html', function (err, data) {

    if (err) {
        console.log('err');
    } else {
        console.log(data.toString())
    }
});
// fs.appendFile('./test.text','hello world','utf-8', function (err, data) {
//
//     if (err) {
//         console.log('err');
//         return;
//     } else {
//         console.log('success');
//     }
// });
fs.open('./test.text','r',function (err, fd) {

    if (err) {
        console.log('err');
        return;
    } else {
        console.log(fd);
    }
});
// fs.mkdir('./test', function (err) {
//
//     if (err) {
//         console.log('err');
//         return;
//     } else {
//         console.log('success in log');
//     }
//
// });
fs.readdir('./test',function (err, files) {

    if (err) {
        console.log('err');
        return;

    } else {
        console.log(files);
    }
})


