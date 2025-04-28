var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var rotasTarefa = require('./routes/rotasTarefa');
var app = express();

app.use(cors());

app.use(bodyParser.json());

app.use('/api/tarefa', rotasTarefa);

module.exports = app;