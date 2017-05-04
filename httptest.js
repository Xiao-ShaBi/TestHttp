var express = require('express');
var app = express();

app.get('/',function(req,res){

	console.log('这是个get请求');
	res.send('get成功了');

});

app.put('/put',function(req,res){
	console.log('这是个put请求');
	res.send('put成功了');
});

app.delete('/delete',function(req,res){
	console.log('这是个delete请求');
	res.send('delete成功了');
});

app.route('/route')
	.get(function(req,res,next){
		res.send('使用route-get成功');
	})
	.put(function(req,res,next){
		res.send('使用route-put成功')
	});

app.listen(3000);