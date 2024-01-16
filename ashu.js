const { writeFile, writeFileSync } = require('node:fs')

a = require('node:fs')

//b = a.readFileSync('./a.txt','utf-8')
//console.log(b)
// console.log('ashutosh')
// console.log('this is nsti patna')
// c = a.readFile('./a.txt',(error,data)=>{
//     if(error){
//         console.log(error)
//     }
//     else{
//         console.log(data)
//     }
//  })
// //  console.log(c)
//  console.log('shrey')
//  console.log('patna')


// a.writeFileSync('./ab.txt','welcome to ashu')

fs = require("node:fs")

fs.writeFile('./f.txt','i am ashu from nsti patna',{flag:"a"}(error)=>{
    if(error){
        console.log(error)
    }
    else{
        console.log('successfully created')
    }
})

