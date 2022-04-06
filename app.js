const http = require('http');
const portNum = 3001;

const server = http.createServer((req, res)=> {
    res.setHeader('Content-type', 'application/json');
    res.setHeader('Access-Control-Allow-Origin', "*");
    res.writeHead(200) //status code HTTP 200 / ok;


    let dataObj = {"status":"ok", "message":"Welcome to Muhammad Ibrahim's server", "email":"muhdibee@gmail.com"};
    let data = JSON.stringify(dataObj);
    res.end(data);
});


server.listen(process.env.PORT || portNum, ()=>{
    console.log('Listening on port: ',portNum);
});