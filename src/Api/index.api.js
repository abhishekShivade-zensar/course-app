var express = require('express');
var bodyParser= require('body-parser');
var multer = require('multer');
var cookieParser = require('cookie-parser'); 

var upload = multer();
var app= express();

app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(upload.array());

var  courses = require('./courses.api');

app.use('/courses', courses);
app.use('/', function(_req,res){
	res.send(" this  will not call API");
});
var port=5000
console.log(app.listen(port)+`app is running on http://localhost:${port}/`)