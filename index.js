const http = require('http');

const hostname = 'localhost';
const port = 3001;

const server = http.createServer((req, res)=> {
    console.log(req.headers);

    res.setHeader('Content-type', 'text/html');
    res.setHeader('Access-Control-Allow-Origin', "*");
    res.writeHead(200); //status code HTTP 200 / ok
    res.end('<html><body><h1>Hello</h1></body></html>');

});

server.listen(port, ()=>{console.log(`Listening on port ${port}`)});