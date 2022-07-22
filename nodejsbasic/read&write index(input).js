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