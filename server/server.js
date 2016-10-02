const express = require("express");
const app = express();
const path = require("path");
const http = require('http');
const fs = require('fs');
const tumblr = require('tumblr.js');
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))

const client = tumblr.createClient({ 
	consumer_key: process.env.CONSUMER_KEY || require('./apiKeys').consumer_key,
	consumer_secret: process.env.CONSUMER_SECRET || require('./apiKeys').consumer_secret,
	token: process.env.TOKEN || require('./apiKeys').token,
	token_secret: process.env.TOKEN_SECRET || require('./apiKeys').token_secret,
});

app.use(express.static(path.join(__dirname, '../client')));

app.post('/', function(req, res){
	client.taggedPosts(req.body.tag, function (err, data) {
		res.send(data)
  });
})


app.listen(8080);




