// Create web server

var http = require('http');

http.createServer(function(req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello, this is a comment');
}).listen(3000);

console.log('Server running at http://localhost:3000');
