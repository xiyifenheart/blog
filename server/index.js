const http = require('http');
const fs = require('fs');
const path = require('path');
const Url = require('url');
const zexpress = require('../lib/zexpress');
const app = zexpress();

app.get('/node', (req, res) => {
    fs.readFile(path.resolve('../template/index.html'), (err, data) => {
        if (err) {
            res.statusCode = 500;
            res.end('500 -Internal Server Error');
            return;
        }

        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');
        res.end(data);
    })
});

app.listen(3000);