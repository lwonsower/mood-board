var express = require("express");
var app = express();
var path = require("path");
var http = require('http');
var fs = require('fs');

app.use(express.static(path.join(__dirname, '../client')))

// app.get('/api.tumblr', function(req, res){
// 	req.body='';
// 	req.on('data', function(chunk){
// 		req.body += chunk;
// 	})
// 	res.send(JSON.parse(req.body));
// })

app.listen(8080);




