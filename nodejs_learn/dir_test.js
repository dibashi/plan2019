

// function factorial(n) {
//     if(n===1) {
//         return 1;
//     } else {
//         return factorial(n-1) *n;
//     }
// }

// console.log(factorial(5));

const fs = require('fs');

const path = require('path');

// var what = fs.readdirSync("./cat/head.js");

// console.log(what);

// var that = fs.statSync("./cat/head.js");
// console.log(that.isDirectory());

function travel(dir,callback) {
    
    fs.readdirSync(dir).forEach(function(file) {
        var pathname = path.join(dir,file);
      
        if(fs.statSync(pathname).isDirectory()) {
            travel(pathname,callback);
        } else {
            callback(pathname);
        }
    });

}

travel("./",function(pathname) {
    console.log(pathname);
})