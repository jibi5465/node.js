// ทบทวน callback function

function calculate(x,y,callback) {
    console.log("กำลังคำนวณ.....")
    setTimeout(()=>{
        const sum = x+y
        callback(sum)
    },3000)
}

function display(result){
    console.log(`ผลบวก = ${result}`)
}

// ฟังก์ชันแบบปกติ
// const sum = calculate(100,50)
// display(sum)

// ฟังก์ชันแบบcallback
calculate(100,50,display)