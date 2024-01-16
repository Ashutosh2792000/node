http = require('node:http')
server = http.createServer((req,res)=>{
    data = {name:'ashutosh',location:'Patna',age:23}

    res.writeHead(200,{'content-type':'text/plain'})
    res.end(JSON.stringify(data))


})

server.listen(3000,()=>{console.log('success')})