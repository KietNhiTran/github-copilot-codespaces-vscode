// create a web server that listens to a port and returns a comment
// in response to a request
// Run this server using node comments.js and open http://localhost:3000 in your browser
// To stop the server, press Ctrl+C

var http = require('http');

http.createServer(function(req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello, this is a comment');
}).listen(3000);

console.log('Server running at http://localhost:3000');
