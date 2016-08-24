var express = require("express");
var app = express();
var path = require("path");
var http = require('http');
var fs = require('fs');
var tumblr = require('tumblr.js');
var bodyParser = require('body-parser')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))

var client = tumblr.createClient({
  consumer_key: 'luEr2hNSAnqAleDZ5ny3clJ8oIDC6SvMLCMfw8GXHUvRbJXeD0',
  consumer_secret: '252l7z5WICul7yKe6nG12b0vMSlHFO4tF5gNOfltViv04Agw7b',
  token: 'CM3t5HS7TmKGqq56ePOHBCIyXyoFrmx7Lokcts8qwrOxKziiUJ',
  token_secret: '2GtZlnfXPIGODHFef82dssaxQ4WPHxJQlB0pTKquyI8tsJA80N'
});

app.use(express.static(path.join(__dirname, '../client')))

app.post('/', function(req, res){
	client.taggedPosts(req.body.tag, function (err, data) {
		res.send(data)
  });
})


app.listen(8080);




