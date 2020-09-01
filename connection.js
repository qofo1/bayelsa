

const http = require('http');

const hostName = 'localhost';
const port = 4200;

const server = http.createServer (function(req, res) {
	res.statusCode =200;
	res.setHeader("content-type", "text/plain");
	res.end("hello world");
});


server.listen(port, hostName, function() {

	console.log(`server running at http://${hostName}:${port}`);
});