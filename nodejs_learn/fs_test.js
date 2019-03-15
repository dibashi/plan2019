

var fs = require('fs');

// fs.readFile('./stream_test.js',function(err,data) {
//     if(err) {
//         console.log("有错了");
//     } else {
//         console.log(data);

//         console.log(data.toString('utf-8'));
//     }
// });

var data = fs.readFileSync('./stream_test.js');
console.log(data);
console.log("哈哈哈");