export function isEmail(str){
    const emailRegex =  /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(str)
}

export function isPassword(str){
    // 8 碼密碼 含 英文字
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/
    return passwordRegex.test(str)
}

export function isPhoneNum(str){
    const phoneRegex = /^09\d{8}$/
    return phoneRegex.test(str)
}

export function isBirthday(str){
    const birthdayRegex = /^(19\d{2}|20\d{2})\/([1-9]|1[0-2])\/(0[1-9]|[12]\d|3[01])$/
    if(!birthdayRegex.test(str)){
        console.log("生日格式錯誤")
        return false
    }
    const age = str.split("/")
    const thisYear = new Date().getFullYear()
    return ((thisYear - Number(age[0])) > 17 )
}

export function isAddress(str) {
    const cleaned = str.replace(/　/g, ' ') // 把全形空格換半形
    const addressRegex = /^[\u4e00-\u9fa5a-zA-Z0-9\s]+?\d+\s*號.*$/
    return addressRegex.test(cleaned)
}