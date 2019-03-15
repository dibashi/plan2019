
var data1 = require("./data1");

var module1 = require("./module1");

var module2 = require("./module1");

var module3 = require("../nodejs_learn/module1");

var module4 = require("G:/plan2019/nodejs_learn/module1");


(function hello(author,data) {
    console.log('hello,nodejs!',author);
    console.log(data);

    console.log(module1);
    module1.ppp();
    module2.ppp();
    module3.ppp();
    module4.ppp();
})("by lh",data1);