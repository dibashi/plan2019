

const fs = require('fs');

function readText(pathname) {
    var bin = fs.readFileSync(pathname);

    console.log(bin.toString('utf8'));
}

readText("./GBK.txt");