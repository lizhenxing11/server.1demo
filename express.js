var express=require('express');
var app=express()
app.get('/',function(rep,res){
	res.send('shabi')
})
app.get('/shabi',function(rep,res){	
	res.send('你是真傻比')
})
app.listen(8080)