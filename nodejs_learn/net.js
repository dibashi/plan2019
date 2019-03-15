

var http = require('http');

// http.createServer(function(request,response) {

//     console.log("请求来了");
//     response.writeHead(201,{'Content-Type':'text-plain'});
//     response.write('<head><meta charset="utf-8"/></head>');
//     response.end('hello,world,孙','utf8');


// }).listen(8124);

var url = require('url');
http.createServer(function (request, response) {
    console.log(request.url);
    console.log(url.parse(request.url));
    console.log("请求来了");
    var body = [];

    console.log(request.method);
    console.log(request.headers);

    request.on('data', function (chunk) {
        console.log("request data!!",chunk);
        body.push(chunk);
    });

    request.on('end', function () {
        console.log("request end!!");
        body = Buffer.concat(body);
        console.log(body.toString());
    });

    response.end('hello,world,孙','utf8');
}).listen(8124);