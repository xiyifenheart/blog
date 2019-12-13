const http = require('http');
const fs = require('fs');
const path = require('path');
const Url = require('url');
const zexpress = require('../lib/zexpress');
const app = zexpress();

const contentIndexObj = {
    "code": 0,
    "data_version": "cba095159b86391d52dd69a62c792eec",
    "suggestDomain": "",
    "forceDomain": "",
    "shop_url": "http://bravetime.vyohui.cn",
    "visitor_status": 0,
    "sess_key": "c7dfda42b218293c5c55eea4f2db201000000001",
    "sys_time": 1563593787,
    "share_seller_name": "18844199637",
    "data": {
        "iden": 1, //会员身份 1-有效凤凰，0-不是有效凤凰
        "indexList": [{ //tab列表
                "tabName": "哈哈哈", //tab名称
                "sort": 1, //tab排序值
                "goodsList": [ //每个tab下包含内容
                    {
                        "goods_id": 23845, //商品id
                        "goods_img": "https://9i.dvmama.com/supplier/2019/10/21/800_800_5fc5fa26654c09397f8b9d69c77a0648.jpg?x-oss-process=image/resize,m_fill,w_320,h_320/format,webp", //商品图片;
                        "goods_commond": "好吃不贵", //商品推荐语
                        "goods_name": "宝宝", //商品名称
                        "goods_act": "一键购", //商品活动
                        "shop_price": 10, //售价
                        "income_price": 1, //会员返
                        "market_price": 100, //市场价
                        "sell_amount": 288, //已售件数
                        "share_times": 1000, //已推次数
                        "will_income": 3.44, //凤凰赚
                        "team_income": 23.44, //团队销售奖
                        "ad_img": "http://bravetime.vyohui.cn", //广告图  goods_id == 0
                        "ad_url": "http://bravetime.vyohui.cn" //广告链接 goods_id == 0
                    },
                    {
                        "goods_id": 23845, //商品id
                        "goods_img": "https://9i.dvmama.com/supplier/2019/10/26/800_800_517865efca649857c604be88080bd62e.jpg?x-oss-process=image/resize,m_fill,w_320,h_320/format,webp", //商品图片;
                        "goods_commond": "好吃不贵", //商品推荐语
                        "goods_name": "宝宝", //商品名称
                        "goods_act": "一键购", //商品活动
                        "shop_price": 10, //售价
                        "income_price": 1, //会员返
                        "market_price": 100, //市场价
                        "sell_amount": 288, //已售件数
                        "share_times": 1000, //已推次数
                        "will_income": 3.44, //凤凰赚
                        "team_income": 23.44, //团队销售奖
                        "ad_img": "http://bravetime.vyohui.cn", //广告图  goods_id == 0
                        "ad_url": "http://bravetime.vyohui.cn" //广告链接 goods_id == 0
                    },
                ],
            },
            { //tab列表
                "tabName": "嘿嘿嘿", //tab名称
                "sort": 2, //tab排序值
                "goodsList": [ //每个tab下包含内容
                    {
                        "goods_id": 23845, //商品id
                        "goods_img": "https://9i.dvmama.com/supplier/2019/10/21/800_800_cf0c9da98bb1c1552a2e9c6eef5e9f3a.jpg?x-oss-process=image/resize,m_fill,w_320,h_320/format,webp", //商品图片;
                        "goods_commond": "好吃不贵", //商品推荐语
                        "goods_name": "宝宝", //商品名称
                        "goods_act": "一键购", //商品活动
                        "shop_price": 10, //售价
                        "income_price": 1, //会员返
                        "market_price": 100, //市场价
                        "sell_amount": 288, //已售件数
                        "share_times": 1000, //已推次数
                        "will_income": 3.44, //凤凰赚
                        "team_income": 23.44, //团队销售奖
                        "ad_img": "http://bravetime.vyohui.cn", //广告图  goods_id == 0
                        "ad_url": "http://bravetime.vyohui.cn" //广告链接 goods_id == 0
                    },
                    {
                        "goods_id": 0, //商品id
                        "ad_img": "https://9i.dvmama.com/supplier/2019/10/21/800_800_cf0c9da98bb1c1552a2e9c6eef5e9f3a.jpg?x-oss-process=image/resize,m_fill,w_320,h_320/format,webp", //广告图  goods_id == 0
                        "ad_url": "http://bravetime.vyohui.cn" //广告链接 goods_id == 0
                    }
                ],
            },
        ]
    }
}

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

app.post('/node/users', (req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({
        name: '张明明',
        age: 18
    }));
});

app.post('/node/content', (req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(contentIndexObj));
});



app.listen(3000);