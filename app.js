const http = require('http');
const portNum = 3001;
var dataObj = {"status":"ok", "message":"Welcome to Muhammad Ibrahim's server", "email":"muhdibee@gmail.com"};


const server = http.createServer((req, res)=> {
    res.setHeader('Access-Control-Allow-Origin', "*");

    if(req.method == 'GET'){
        if(req.url == '/'){
            res.setHeader('Content-type', 'application/json');
            res.writeHead(200); //status code HTTP 200 / ok
            var data = JSON.stringify(dataObj);
            res.end(data);
        }
    }
});


server.listen(process.env.PORT ||portNum, ()=>{
    console.log('Listening on port: ',portNum);
});