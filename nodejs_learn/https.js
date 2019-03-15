


var https = require('https');
var fs = require('fs');
var options = {
    key:fs.readFileSync('./ssl/default.key'),
    cert:fs.readFileSync('./ssl/default.cer')
}

var server = https.createServer(options, function (request, response) {
    // ...
});