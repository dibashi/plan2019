

var http = require('http');

var options = {
    hostname:'localhost',
    port:8124,
    path:'/sunyunlong',
    method:'POST',
    headers:{
        'Content-Type':'buzhidao'
    }
};

// var request = http.request(options,function(response) {
//     console.log(response);
// });

var request = http.get('http://localhost:8124',function(response) {
    var body = [];

    console.log(response.statusCode);
    console.log(response.headers);

    response.on('data', function (chunk) {
        body.push(chunk);
    });

    response.on('end', function () {
        body = Buffer.concat(body);
        console.log(body.toString());
    });
})

// request.write('李浩，孙云龙');
// request.end();