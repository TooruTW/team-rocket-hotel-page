export function isEmail(str){
    const emailRegex =  /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(str)
}

export function isPassword(str){
    // 8 碼密碼 含 英文字
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/
    return passwordRegex.test(str)
}