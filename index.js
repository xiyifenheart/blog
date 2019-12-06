const http = require('http');
const fs = require('fs');
const path = require('path');
const Url = require('url');

http.createServer((req, res) => {
    const {url, method} = req;
    const {pathname} = Url.parse(url, true);

    console.log(pathname);

    res.statusCode = 200;
    res.end('<h1>张明明</h1>');
}).listen(3000);