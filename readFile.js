/**
 * Created by 小马哥 on 2017/2/15.
 */
var  http  =  require('http');
var router = require('./router');
var url = require('url');
http.createServer(function  (request,  response)  {
    response.writeHead(200,  {'Content-Type':  'text/html;  charset=utf-8'});
    if(request.url!=="/favicon.ico"){  //清除第2此访问
        var pathname = url.parse(request.url).pathname.replace(/\//,'');
        router[pathname](request,response);
        // response.write("登录页面")
        // response.end("");
    }
}).listen(8000);
console.log('Server  running  at  http://127.0.0.1:8000/');