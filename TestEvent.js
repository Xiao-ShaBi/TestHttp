var express = require('express');
var app = express();
var admin = express();
admin.on('mount', function(parent) {
    console.log('Admin Mounted');
    console.log(parent.name); // refers to the parent app
});
admin.get('/sub', function(req, res) {
    res.send('Admin Homepage');
});

app.get('/',function(req,res){
	res.send('zhelishifuchengxu');
});

//这里用主程序加载子程序，如果不加载子程序不能使用
//子程序加载后会调用admin.on方法
//官方说法是mount事件被发射，这里on应该是监听到mount事件之后被调用
app.use('/admin', admin);

app.listen(3000);