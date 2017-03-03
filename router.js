/**
 * Created by 小马哥 on 2017/2/15.
 */
var optfile = require('./models/optfile');
var url = require('url');
var querystring = require('querystring');
function getRecall(req, res) {
    res.writeHead(200, {'Content-Type': 'text/html;  charset=utf-8'});
    function recall(data) {
        res.write(data);
        res.end("");
    }

    return recall;
}
module.exports = {
    login: function (req, res) {
        //get方式接受参数
        var rdata = url.parse(req.url, true).query;
        console.log(rdata);
        if (rdata['email'] != undefined) {
            console.log(rdata['email']);
            console.log(rdata['pwd']);
        }
        //post方式接受参数
        var post = '';
        req.on('data', function (chunk) {
            post += chunk;
        });
        req.on('end', function () {
            post = querystring.parse(post);
            arr =['email','pwd']
            function recall(data) {
                var dataString = data.toString();
                for(var i=0;i<arr.length;i++){
                    re = new RegExp('{'+arr[i]+'}','g');
                    dataString = dataString.replace(re,post[arr[i]]);
                }
                // res.writeHead(200, {'Content-Type': 'text/html;  charset=utf-8'});
                res.write(dataString);
                res.end("");
            }
            // recall = getRecall(req, res);
            optfile.readfile('./views/login.html', recall);
        });

    },
    zhuce: function (req, res) {
        recall = getRecall(req, res);
        optfile.readfile('./views/zhuce.html', recall);
    }
    ,
    showimg: function (req, res) {
        res.writeHead(200, {'Content-Type': 'image/jpeg'});
        optfile.readImg('./image/pig.jpg', res);
    }
};