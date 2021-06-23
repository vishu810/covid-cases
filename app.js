var express = require("express");
var app = express();
var request = require("request");

app.get("/",function(req,res){ 
res.redirect("completion.ejs");
});

 app.get("/cases",function(req,res){
	 request("https://corona.lmao.ninja/v2/countries",function(error,response,body){

	if(!error && response.statusCode ==200){
		var data = JSON.parse(body)
		console.log(data);
		res.render("completion.ejs",{data:data});
	}
});
 });



app.listen(process.env.port||3500,function(req,res){
	console.log("server is running");
});