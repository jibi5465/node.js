// blocking

const fs = require('fs')

// อ่านไฟล์ input.txt
const data = fs.readFileSync('./myfile/input.txt','utf-8')
console.log(data)
console.log("จบการทำงาน")

// เขียนไฟล์
const outputText = `Hello Node.js\n${data}\nไฟล์ถูกเขียนเมื่อ${new Date()}`
fs.writeFileSync("./myfile/input.txt",outputText)
console.log("เขียนไฟล์เรียบร้อย!")

// Non-blocking
const nfs = require('fs')

// อ่านไฟล์ input.text
nfs.readFile("./myfile/input.txt",'utf-8',(err, data) => {
    if(err) return console.log("เกิดข้อผิดพลาด",err)
    const outputText = `Hello node.js\n${data}\nไฟล์นี้ถูกเขียนเมื่อ ${new Date()}`
    fs.writeFile("./myfile/output.txt",outputText,err=>{
        if(err) return console.log("เกิดข้อผิดพลาด",err)
        console.log("เขียนไฟล์เรียบร้อย")
    })
})

