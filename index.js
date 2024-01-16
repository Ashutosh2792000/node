http = require('node:http')
server = http.createServer((req,res)=>{

    res.writeHead(200,{'content-type':'text/plain'})
    res.end('This is Body')


})

server.listen(3000,()=>{console.log('success')})