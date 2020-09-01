
const http = require('http');

const hostName = 'localhost';

const port = 5000;


const server = http.createServer(function (req, res){

	res.statusCode=200;
	res.setHeader("Content-type","text/plain");
	res.end("Successfully lunch the code");
});


server.listen(port, hostName, function(){	
	console.log(`servering running at http:// ${hostName}:${port}`);

});