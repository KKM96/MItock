const express = require('express');
const path = require('path');
const app = express();

const port = process.env.PORT || 5050;

app.use(express.json());
var cors = require('cors'); // to use ajax efficiently
app.use(cors());

// Sever connect
app.listen(port, function () {
    console.log('listening on 5050...')
});

// react - static connect
app.use(express.static(path.join(__dirname, 'react-side/build')));

// react - index.html connect
app.get('/', function(req,res) {
    res.sendFile(path.join(__dirname, 'react-side/build/index.html'));
});