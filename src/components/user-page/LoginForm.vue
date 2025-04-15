<script setup>
import { postDate } from '../../apiFunction'
import { ref, computed } from 'vue'
import { RouterLink, useRouter } from 'vue-router'
import Cookies from 'js-cookie'
const url = 'https://team-rocket-hotelapi-from-freyja.onrender.com/api/v1/user/login'
const router = useRouter()

const userEmail = ref(null)
const userPassword = ref(null)
const isSaveUser = ref(false)
const accountdWarn = ref(null)
const passwordWarn = ref(null)

function saveUserAccount(account){
    Cookies.set('account',account, { expires: 7, path: '/' })
    console.log( "User save to cookie", Cookies.get('account') )
}
function getAccountFromCookie(){
    const userAccount = Cookies.get('account')
    if(userAccount){
        userEmail.value = userAccount 
        isSaveUser.value = true
    }
}

async function login(email,password){
    const body = {
                email: `${email}`,
                password: `${password}`
                }
    try {
        const data = await postDate(url, null, body)
        const token = data.token 

    if (data.status) {
        Cookies.set('usertoken', token, { expires: 7, path: '/' })
        console.log("✅ Login success and token saved in cookie:", Cookies.get('usertoken'))
        isSaveUser.value && saveUserAccount(email);
        router.replace('/')

    } else {
        const message = data.message
        console.log(message)
        passwordWarn.value = null
        accountdWarn.value = null
        userPassword.value = null
        switch (message) {
            case "密碼錯誤":
                passwordWarn.value = "密碼錯誤"
                break;
            case "密碼需至少 8 碼以上":
                passwordWarn.value = "密碼需至少 8 碼以上"
                break;
            case "此使用者不存在":
                accountdWarn.value = "此使用者不存在"
                break;
            default:
                break;
        }
        }
    } catch (error) {
        console.error("🚨 Login error:", error)
    }
}
function handleLogin(event){
    event.preventDefault()
    console.log("email", userEmail.value)
    console.log("password", userPassword.value)
    login(userEmail.value,userPassword.value)
}

// 取得已記錄帳號
getAccountFromCookie()

</script>
<template>
    <form class="z-10 min-w-416/960 max-md:w-full px-5 flex flex-col gap-10 " action="">
                    <div>
                        <p class=" text-theme-primary-100 font-bold text-base max-md:text-14 leading-[1.5] tracking-wide">享樂酒店，誠摯歡迎</p>
                        <h1 class="font-bold text-48 max-md:text-32 leading-[1.2] tracking-wider">立即開始旅程</h1>
                    </div>
                    <div class="flex flex-col gap-2">
                        <label class=" font-bold text-base max-md:text-14 leading-[1.5] tracking-wide w-full flex flex-col gap-2" for="">
                            <p>電子信箱 <span class="text-14 text-theme-alert-100">{{ accountdWarn }}</span></p>
                            <input v-model= "userEmail" class="w-full rounded-md p-4 bg-theme-neutral-40 text-theme-neutral-60" type="text" placeholder="hello@exsample.com">
                        </label>
                        <label class=" font-bold text-base max-md:text-14 leading-[1.5] tracking-wide w-full flex flex-col gap-2" for="">
                            <p>密碼 <span class="text-14 text-theme-alert-100">{{ passwordWarn }}</span></p>
                            <input v-model= "userPassword" class="w-full rounded-md p-4 bg-theme-neutral-40 text-theme-neutral-60" type="text" placeholder="請輸入密碼">
                        </label>
                        <label class="flex justify-between gap-2 font-bold text-base max-md:text-14 leading-[1.5] tracking-wide w-full" for="">
                            <span class="relative">
                                <input v-model="isSaveUser" class="accent-theme-primary-100 text-theme-neutral-0 w-6 peer" type="checkbox">
                                <div class=" absolute left-0 top-0 peer-checked:hidden pointer-events-none w-6 border-1 border-theme-neutral-60 aspect-square  rounded-sm bg-theme-neutral-0 flex justify-center items-center">
                                </div>
                                <div class=" absolute left-0 top-0 hidden pointer-events-none w-6 aspect-square  rounded-sm bg-theme-primary-100 peer-checked:flex justify-center items-center">
                                    <svg class="w-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="#ffffff"><path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z"/></svg>
                                </div>
                                記住帳號
                            </span>
                            <a class=" justify-self-end-safe text-theme-primary-100 underline" href="">忘記密碼？</a>
                        </label>
                    </div>
                    <button @click="handleLogin" class="w-full rounded-md p-4 bg-theme-neutral-40 text-theme-neutral-60 hover:bg-theme-primary-100 hover:text-theme-neutral-0">會員登入</button>
                    <h4 class="font-bold text-base max-md:text-14 leading-[1.5] tracking-wide">沒有會員嗎？
                        <RouterLink class=" text-theme-primary-100 underline" to="/user/register">前往註冊</RouterLink>
                    </h4>
    </form>
</template>