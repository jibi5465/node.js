// เขียนโปรแกรมดาวโหลดไฟล์

const url1 = "kong.dev/file.json"
const url2 = "kong.dev/file.json"
const url3 = "kong.dev/file.json"
const url4 = "kong.dev/file.json"
const url5 = "kong.dev/file.json"

// function downloading(url,callback) {
//     console.log(`กำลังดาวโหลด ${url}`)
//     setTimeout(() =>{
//         callback()
//     },1000)
// }

// function complete(){
//     console.log("ดาวโหลดเรียบร้อย")
// }

// // เขียน downloading ทีละตัว Promise Hell
// downloading(url1,function(complete) {
//     console.log("ดาวโหลดเรียบร้อย")
//     downloading(url2,function(complete) {
//         console.log("ดาวโหลดเรียบร้อย")
//         downloading(url3,function(complete) {
//             console.log("ดาวโหลดเรียบร้อย")
//             downloading(url4,function(complete) {
//                 console.log("ดาวโหลดเรียบร้อย")
//                 downloading(url5,function(complete) {
//                     console.log("ดาวโหลดเรียบร้อย")
//                 })
//             })
//         })
//     })
// })

const connect = true

function download(url){
    return new Promise(function(resolve, reject){
        console.log(`กำลังดาวโหลด ${url}`)
        setTimeout(()=>{
            if(connect){
                resolve(`ดาวโหลด ${url} เรียบร้อย`)
            }else {
                reject('Error')
            }
        },1000)
    })
}

// // เขียนแบบใช้ then(1)
// download(url1).then(function(result){
//     console.log(result)
//     download(url2).then(function(result){
//         console.log(result)
//         download(url3).then(function(result){
//             console.log(result)
//             download(url4).then(function(result){
//                 console.log(result)
//                 download(url5).then(function(result){
//                     console.log(result)
//                 })
//             })
//         })
//     })
// })

// // เขียนแบบใช้ then|(2)
// download(url1).then(function(result){
//     console.log(result)
//     return download(url2)
// }).then(function(result){
//     console.log(result) 
//     return download(url3)
// }).then(function(result){
//     console.log(result)
//     return download(url4)
// }).then(function(result){
//     console.log(result)
//     return download(url5)
// }).then(function(result){
//     console.log(result)
// })

// Async & Await

async function start(){
    console.log(await download(url1)) 
    console.log(await download(url2))
    console.log(await download(url3))
    console.log(await download(url4))
    console.log(await download(url5))
}

start()


