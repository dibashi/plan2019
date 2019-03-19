

// var http = require('http');

// var url = require('url');

// var querystring = require('querystring');


// var count = 0;


// function start(route, handle) {

//     function onRequest(request, response) {
//         // console.log("请求来了！");

//         // console.log(request.url);

//         var pathname = url.parse(request.url).pathname;
//         var query = url.parse(request.url).query;


//         route(handle,pathname,response,request);

//         // console.log(pathname);
//         // console.log(query);

//         // console.log(querystring.parse(query)["a"]);
//         // console.log(querystring.parse(query)["b"]);

//         // request.setEncoding("utf8");

//         // var postData = "";
//         // request.addListener("data",function(postDataChunk) {
//         //     postData += postDataChunk;
//         //     console.log("这是一块");
//         //     console.log(postDataChunk);
//         // });
//         // request.addListener("end",function(){
//         //     console.log("数据接收完毕");
//         //     route(handle,pathname,response,postData);
//         // })

//     }

//     http.createServer(onRequest).listen(8888);

//     console.log("server has started!");
// }




// exports.start = start;


var http = require("http");
var url = require("url");

function start(route, handle) {
  function onRequest(request, response) {
    var pathname = url.parse(request.url).pathname;
    console.log("Request for " + pathname + " received.");
    route(handle, pathname, response, request);
  }

  http.createServer(onRequest).listen(8888);
  console.log("Server has started.");
}

exports.start = start;