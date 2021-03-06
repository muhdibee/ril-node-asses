const http = require('http');
const fs = require('fs');

const portNum = 3001;
const welcomeMessage = {
    "status":"ok", "message":"Welcome to Muhammad Ibrahim's server", "email":"muhdibee@gmail.com"
};
const names = {
    "status": "ok",
    "names": [
        {
            "user_id": 100,
            "name": "Muhammad"
        }
    ]
}

const server = http.createServer((req, res)=> {
    res.setHeader('Access-Control-Allow-Origin', "*");

    if(req.method == 'GET'){
        if(req.url == '/'){
            res.setHeader('Content-type', 'application/json');
            res.writeHead(200); //status code HTTP 200 / ok
            res.end(JSON.stringify(welcomeMessage));
            return;
        }
        else if(req.url == '/names'){
            res.setHeader('Content-type', 'application/json');
            res.writeHead(200); //status code HTTP 200 / ok
            res.end(JSON.stringify(names));
            return;
        }
    }

    // else if(req.method == 'POST'){
    //     if(req.url == '/names'){
    //         res.setHeader('Content-type', 'application/json');
    //         res.writeHead(200); //status code HTTP 200 / ok

    //         let data = "";
    //         let response ={
    //             "status": "ok",
    //         };

    //         req.on('data', chunk => {
    //             data +=chunk;
    //         } );
    //         req.on('end', () => {
    //             let name = JSON.parse(data).name;
    //             response = {...response, "name": name}
    //             res.end(response);
    //         })
    //         return;
    //     }

    // }
});


server.listen(process.env.PORT || portNum, ()=>{
    console.log('Listening on port: ', portNum);
});

// fs.readFile('./data.js', 'utf8', (err, data) => {
//     if (err){
//         console.log(err);
//         return;
//     }
//     var returnData = JSON.stringify(data);
//     console.log(returnData);
//     res.end(returnData);
// })