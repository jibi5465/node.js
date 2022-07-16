// เขียนโปรแกรมดาวโหลดไฟล์

const url1 = "kong.dev/file.json"
const url2 = "kong.dev/file.json"
const url3 = "kong.dev/file.json"


function downloading(url,callback) {
    console.log(`กำลังดาวโหลด ${url}`)
    setTimeout(() =>{
        callback()
    },3000)
}

// function complete(){
//     console.log("ดาวโหลดเรียบร้อย")
// }

// เขียน downloading ทีละตัว
downloading(url1,function(complete) {
    console.log("ดาวโหลดเรียบร้อย")
    downloading(url2,function(complete) {
        console.log("ดาวโหลดเรียบร้อย")
        downloading(url3,function(complete) {
            console.log("ดาวโหลดเรียบร้อย")
        })
    })
})


