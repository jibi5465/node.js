// const http = require('http');

// // เขียนแบบปกติ
// const http = require('http');
// const server = http.createServer(function(req, res){
//     res.write("<h1>Hello node.js\nHi jeep</h1>")
//     res.end()
// })
// server.listen(5000)

// // เขียนแบบ arrow function
// const http = require('http');
// const server = http.createServer((req, res) => {
//     res.write("<h1>Hello</h1>")
//     res.end()
// })
// server.listen(5000,()=>{
//     console.log("start server in port 8080")
// })

// // เขียนแบบ arrow function ย่อ
// const http = require('http');
// http.createServer((req, res) => {
//     res.write("<h1>Hello</h1>")
//     res.end()
// }).listen(5000,()=>{
//     console.log("start server in port 8000")
// })

// // เขียนเเบบเต็มรูปแบบ
// const http = require('http');
// const server = http.createServer((req, res)=>{
//     const myhtml = `<h1>Hello Node.js</h1>
//     <p style = "background:green">Jeep studio | 2021</p>`

//     res.write(myhtml)
//     res.end()
// })
// server.listen(5000,'localhost', ()=>{
//     console.log("start server in port 5000")
// })

// // เขียนเเบบเต็มรูปแบบ &สวยงาม
// const http = require('http');
// const server = http.createServer((req, res)=>{
//     const myhtml = `<h1>Hello Node.js</h1>
//     <p style = "background:green">Jeep studio | 2021</p>`

//     res.end(myhtml)
// })
// server.listen(5000,'localhost', ()=>{
//     console.log("start server in port 5000")
// })

// // เขียนเเบบเต็มรูปแบบ &สวยงาม
// const http = require('http');
// const server = http.createServer((req, res)=>{
//     const pathName = req.url
//     console.log("url = ",pathName)
//     if(pathName=="/" || pathName==="/home"){
//         const myhtml = `
//         <h1>Hello Homepage</h1>
//         <p>jeep studio |2021</p>`
//         res.end(myhtml)
//     }else if(pathName==='/product'){
//         res.end("<h1>Hello product</h1>")
//     }else{
//         res.writeHead(404)
//         res.end("Not found")
//     }
// })
// server.listen(5000,'localhost', ()=>{
//     console.log("start server in port 5000")
// })

// มีการเชื่อมเชิงระหว่างserver กับ client
const http = require('http');
const fs = require('fs')

const indexPage = fs.readFileSync(`${__dirname}/webpage/index.html`,'utf-8')
const productPage = fs.readFileSync(`${__dirname}/webpage/product.html`,'utf-8')

const server = http.createServer((req, res)=>{
    const pathName = req.url
    console.log("url = ",pathName)
    if(pathName=="/" || pathName==="/home"){
        res.end(indexPage)
    }else if(pathName==='/product'){
        res.end(productPage)
    }else{
        res.writeHead(404)
        res.end("Not found")
    }
})
server.listen(5000,'localhost', ()=>{
    console.log("start server in port 5000")
})