const http = require('http');

// // เขียนแบบปกติ
// const server = http.createServer(function(req, res){
//     res.write("<h1>Hello node.js\nHi jeep</h1>")
//     res.end()
// })
// server.listen(5000)

// // เขียนแบบ arrow function
// const server = http.createServer((req, res) => {
//     res.write("<h1>Hello</h1>")
//     res.end()
// })
// server.listen(5000,()=>{
//     console.log("start server in port 8080")
// })

// // เขียนแบบ arrow function ย่อ
// http.createServer((req, res) => {
//     res.write("<h1>Hello</h1>")
//     res.end()
// }).listen(5000,()=>{
//     console.log("start server in port 8000")
// })

// เขียนเเบบเต็มรูปแบบ
const server = http.createServer((req, res)=>{
    const myhtml = `<h1>Hello Node.js</h1>
    <p>Jeep studio | 2021</p>`

    res.write(myhtml)
    res.end()
})
server.listen(5000,'localhost', ()=>{
    console.log("start server in port 5000")
})