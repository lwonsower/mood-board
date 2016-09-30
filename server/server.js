const express = require("express");
const app = express();
const path = require("path");
const http = require('http');
const fs = require('fs');
const tumblr = require('tumblr.js');
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))

const client = tumblr.createClient( require('./apiKeys') || 
	{ consumer_key: process.env.CONSUMER_KEY,
	consumer_secret: process.env.CONSUMER_SECRET,
	token: process.env.TOKEN,
	token_secret: process.env.TOKEN_SECRET });

app.use(express.static(path.join(__dirname, '../client')));

app.post('/', function(req, res){
	client.taggedPosts(req.body.tag, function (err, data) {
		res.send(data)
  });
})


app.listen(8080);




