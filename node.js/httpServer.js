// const http=require('http');

import http from 'node:http'; // from Node 17+ explicit specifier

const port=process.env.PORT || 3000 ;
 
const server=http.createServer((req,res) => {
    res.statusCode=200;
    res.setHeader('contenp-type','text/html');
    res.end('<h1> hello nikhil this side</h1> <p> i am the mafia<p>');

});
server.listen(port,()=>{
    console.log(`server is listening on the port ${port}`);
});