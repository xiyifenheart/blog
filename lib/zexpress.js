const http = require('http');
const url = require('url');

// 实现一个路由
let router = [];

class Application {
    get(path, handler) {
        router.push({
            path,
            method: 'get',
            handler
        })
    }
    post(path, handler) {
        router.push({
            path,
            method: 'post',
            handler
        })
    }
    listen() {
        // 创建server
        http.createServer((req, res) => {
            let { pathname } = url.parse(req.url, true);

            res.setHeader("Access-Control-Allow-Origin", "*");
            res.setHeader("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
            res.setHeader("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");

            for (const route of router) {
                if (route.path === pathname) {
                    route.handler(req, res);
                    return;
                }
            }
        }).listen(...arguments);
    }
}

module.exports = function (config) {
    return new Application();
}