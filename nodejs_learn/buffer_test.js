
/**
 * buffer与字符串的重要区别
 * 字符串是只读的，对字符串的任何修改得到的都是一个新的字符串，原字符串不变
 * 至于Buffer，更像是可以做指针操作的C语言数组。例如，可以用[index]方式直接修改某个位置的字节。
 *bin[0] = 0x48;
 * 
 */
var bin = new Buffer([ 0x68, 0x48, 0x6c, 0x6c, 0x6f ]);

console.log(bin[0]);

var str1 = bin.toString('utf-8');

var str2 = bin.toString('ascii');

console.log(str1);

console.log(str2);

var bin = Buffer.from('hello',"utf-8");

console.log(bin);


var sub = bin.slice(2);

sub[0] = 0xff;

console.log(bin);

var dup = Buffer.allocUnsafe(bin.length);
console.log(dup);

bin.copy(dup);

console.log(dup);