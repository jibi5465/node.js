// Promise

const connect = true //เช็คว่าต่อเน็ต
const url1 = "kong.dev/file.json"

function downloading(url){
    return new Promise(function(resolve, reject){
        setTimeout(() =>{
            if(connect){
                resolve(`โหลด ${url} เรียบร้อย`)
                // console.log(`โหลด ${url} เรียบร้อย`)
            }else{
                reject(`เกิดข้อผิดพลาด`)
                // console.log(`เกิดข้อผิดพลาด`)
            }
        },3000)
    })
}

downloading(url1).then(result=>{
    console.log(result)
}).catch(err=>{
    console.log(err)
}).finally(()=>{
    console.log(`จบการทำงาน`)
})
