var fs =require('fs');


//等价于 fs.createReadStream(src).pipe(fs.createWriteStream(dst));
function copy(src,dst) {
    // var rs = fs.createReadStream(src);
    // var ws = fs.createWriteStream(dst);

    // rs.on('data',function(chunk) {
    //     if(ws.write(chunk) === false){
    //         rs.pause();
    //     }
    // });

    // rs.on('end',function() {
    //     ws.end();
    // });

    // ws.on('drain',function() {
    //     rs.resume();
    // })
    fs.createReadStream(src).pipe(fs.createWriteStream(dst));
}

function main(argv) {
    copy(argv[0],argv[1]);
}

main(process.argv.slice(2));