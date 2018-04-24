//write your code here
var http = require('http');

http.createServer(function (req,res) {
    res.writeHead(200, {'Content-Type':'text/plain'});
    res.end('Hello World');
})

.listen(8080, '127.0.0.1');

console.log('Server running @ http://127.0.0.1:8080/');

// const express = require('express')
// const app = express()

// app.get('/', (req, res) => res.send('Hello World!'))

// app.listen(3000, () => console.log('Example app listening on port 3000!'))
