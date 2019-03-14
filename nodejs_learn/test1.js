
var data1 = require("./data1");

var module1 = require("./module1");

var module2 = require("./module1");


(function hello(author,data) {
    console.log('hello,nodejs!',author);
    console.log(data);

    console.log(module1);
    module1.ppp();
    module2.ppp();
})("by lh",data1);