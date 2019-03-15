
const path = require("path");
var cache = {};

function store(key, value) {
    cache[path.normalize(key).replace(/\\/g, '/')] = value;
}

store('foo/bar', 1);
store('foo//baz//../bar', 2);
console.log(cache);  // => { "foo/bar": 2 }



console.log(path.join('foo/','baz/','../bar').replace(/\\/g,'/'));

console.log(path.extname('dangtw.aaa.json.a'));