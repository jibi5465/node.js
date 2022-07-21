// ให้บริการเกี่ยวกับการทำงานต่างๆในโปรแกรม

// ฟังก์ชันเวลา
function getCurrentTime() {
    return new Date()
}

// ฟังก์ชันบวกเลข
function add(x,y){
    return x+y
}

function formatNumber(num){
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
}


// ส่งออกคำสั่งไปใช้
module.exports.getCurrentTime = getCurrentTime
module.exports.add = add
module.exports.formatNumber = formatNumber