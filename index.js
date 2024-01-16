http = require('node:http')
server = http.createServer((req,res)=>{

    res.writeHead(200)
    res.end('This is Body')


})

server.listen(3000,()=>{console.log('success')})