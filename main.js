
const http = require("http");


const port = 3000;
const hostName = "localhost";

const server = http.createServer((req, res) => {
    res.statusCode = 200;  
    res.setHeader("Content-Type", "text/html");
    res.write("<h1>Hello, World</h2>");
    res.write("<p>I am happy to be here</p>");
    res.end();
});


server.listen(port, hostName, () => {
    console.log(`Server running at http://${hostName}:${port}/`)
})