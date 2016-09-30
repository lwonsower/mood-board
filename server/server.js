const express = require("express");
const app = express();
const path = require("path");
const http = require('http');
const fs = require('fs');
const tumblr = require('tumblr.js');
const bodyParser = require('body-parser');
const apiKeys = require('./apiKeys');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))

const client = tumblr.createClient({ 
	consumer_key: apiKeys.CONSUMER_KEY,
	consumer_secret: apiKeys.CONSUMER_SECRET,
	token: apiKeys.TOKEN,
	token_secr: apiKeys.TOKEN_SECRET,
 });

app.use(express.static(path.join(__dirname, '../client')));

app.post('/', function(req, res){
	client.taggedPosts(req.body.tag, function (err, data) {
		res.send(data)
  });
})


app.listen(8080);




