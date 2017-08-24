let express = require('express');
let app = express();
let bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json()); //将数据转换成对象放到req.body上
let session = require('express-session'); //session中间件
let mongoStore = require('connect-mongo')(session);
app.use(session({
    resave:true,
    saveUninitialized:true,
    secret:'zfpx',
    store:new mongoStore({
        url:'mongodb://localhost:27017/ketang'
    })
}));
app.listen(3000);
app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:8080"); //允许8080端口访问
    res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With"); //允许接收的头
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS"); //允许的方法
    res.header('Access-Control-Allow-Credentials','true');
    // 允许跨域设置cookie
    //如果发的是options的请求 响应ok 即可
    if(req.method==="OPTIONS") res.send(200);/*让options请求快速返回*/
    else  next();
});
//获取轮播图数据 当访问/slider的时候将数据返回
let sliders = require('./mock/slider');
app.get('/slider',function (req,res) {
   res.json(sliders);
});
let lessonList = require('./mock/lessonList');
app.get('/lessonList/:type/:offset/:limit',function (req,res) {
    let {type,offset,limit} = req.params;
    console.log(type,offset,limit);
    res.json(lessonList);
});
//实现注册功能
let crypto = require('crypto');
//md5摘要算法
//1.任意字符串转换出来的大小都相同
//2.不同内容转化出来的值不同
//3.不可逆
let md5 = (val)=>{
    return crypto.createHash('md5').update(val).digest('hex')
};
let User = require('./model');
app.post('/reg',function (req,res) {
    //加密密码
    req.body.password = md5(req.body.password);
    console.log(req.body);
    User.findOne({username:req.body.username}).then(doc=>{
        console.log(doc);
        if(doc){
            res.json({err:'用户存在了'})
        }else{
            User.create(req.body).then(doc=>{
                req.session.user = doc;//将当前用户存入到session中
                res.json(req.session.user);
            });
        }
    });
});



