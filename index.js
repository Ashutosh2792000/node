const { request } = require('node:https')

http = require('node:http')
fs = require('node:fs')
//server = http.createServer((req,res)=>{
    // data = {name:'ashutosh',location:'Patna',age:23}

    // res.writeHead(200,{'content-type':'text/plain'})
    // res.end(JSON.stringify(data))

    // html = fs.readFileSync('./index.html','utf-8')

    // res.writeHead(200,{'content-type':'text/html'})
    // res.end(req.url)

    server = http.createServer((req,res)=>{
        index = fs.readFileSync('./index.html','utf-8')
        if(req.url==='/'){res.end(index)}
    }


)

server.listen(3000,()=>{console.log('success')})