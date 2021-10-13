
const http = require('http');
const debug = require('debug')('nodestr:server');
const express = require('express');7


const app = require('../src/app');
const port = 3000;
app.set('port', port);

const server = http.createServer(app);
const router = express.Router();

const jwt = require('jsonwebtoken');

const SECRET = '&$2.^8%Lg!q}$kM6b3uX';



server.listen(port);
console.log('Api rodando na porta ' + port);

