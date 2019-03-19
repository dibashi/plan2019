


var say = function(value) {
    console.log(value);
}

var execute = function(someFunction,value) {
    someFunction(value);
}

execute(say,"pppata");

execute(function(value) {
    console.log(value);
},"哈哈他问问");