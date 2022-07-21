// เขียนแบบสากล
const util = require('./modules/mymodule')
// เขียนแบบฉบับ function
const now = require('./modules/mymodule').getCurrentTime
const plus = require('./modules/mymodule').add
const format = require('./modules/mymodule').formatNumber

// เขียนได้ 2 แบบ
console.log(util.getCurrentTime())  //แบบที่1
console.log(now())                  //แบบที่2

console.log(util.add(50,100))       //แบบที่1
console.log(plus(100,50))           //แบบที่2

const number = 50000000
console.log(util.formatNumber(number)) 
console.log(format(number))