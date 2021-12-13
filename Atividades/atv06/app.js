var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
require('./db/MongoDBConn')
var estudante = require('./routes/EstudanteRoutes');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser())

app.use('/estudante', estudante);

module.exports = app;
