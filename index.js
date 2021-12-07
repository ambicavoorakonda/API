const fs = require('fs')
const http = require('http')
const url = require('url')
const server = http.createServer((req,res)=>{
    // console.log(req)
    console.log(req.url)
    const path =req.url
    if(path === '/Profile' || path ==='/' ){
        res.end('Hello Everyone')
    }else if(path ==='/api'){
        fs.readFile('./data.json','utf-8',(err,data)=>{
            const students=JSON.parse(data)
            console.log(students)
            res.writeHead(200,{'content-type':'application/json'})
            res.end(data)
                })
    }
})
const data =fs.readFileSync('./data.json','utf-8')
const dataObj =JSON.parse(data)
server.listen(8000,'127.0.0.1',()=>{
    console.log("Port at 8000")
})
