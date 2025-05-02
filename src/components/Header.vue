<script setup>
import {ref,inject, onMounted, computed} from 'vue';
import Menu from './icons/Menu.vue';
import { RouterLink } from 'vue-router';
import Cookies from "js-cookie";
import { getData } from '../apiFunction';
const token = inject("token")
onMounted(async()=>{
  const url = `https://team-rocket-hotelapi-from-freyja.onrender.com/api/v1/user`
  const data = await getData(url,token)
  console.log("user name",data.name)
  loged.value = data.name
})
const loged = ref("已登入")

defineProps({
        classFromParent: String
})
const liClass = "text-theme-neutral-0 text-base h-14 flex items-center justify-center w-full"
const liClassMd = "w-full px-5 text-theme-neutral-0 text-base h-14 flex items-center justify-center w-full"
const aTagClass = "w-fit"
const aTagClassMd = "w-full px-5"
const ulClass = "flex gap-4 w-auto "
const ulPosition = ref("translate-x-full")
const ulClassMd = " absolute transition ease-in-out w-full h-screen left-0 top-0 flex-col items-center gap-4 justify-center bg-theme-neutral-bg "
const isShowBurgerMenu = ref(true)
const ulClassState = ref(null)
const aTagClassState = ref(null)
const liClassState = ref(null)
const windowWidth = ref(window.innerWidth)
onMounted(()=>{
    if(windowWidth.value >= 768){
        ulClassState.value = ulClass
        aTagClassState.value = aTagClass
        liClassState.value = liClass
        ulPosition.value = null
        return
    }
    ulClassState.value = ulClassMd
    aTagClassState.value = aTagClassMd
    liClassState.value = liClassMd
})
function handleMenu(){
    if(!isShowBurgerMenu.value){
        isShowBurgerMenu.value = true
        ulPosition.value = "translate-x-full"
        return
    }
    isShowBurgerMenu.value = false
    ulPosition.value = "translate-none"
}
const isLogined = computed(()=>{
    return Cookies.get("usertoken")? true:false
})

</script>
<template>
    <nav  class="w-full flex items-center justify-between py-6 max-md:py-4 overflow-x-hidden" :class="[classFromParent]">
        <RouterLink class="h-full" to="/">
            <img class="h-full max-w-50 max-md:w-27" src="/hotel-icon.png" alt="hotel-icon">
        </RouterLink>
        <Menu class="z-50" @click="handleMenu" size="30" color="text-theme-neutral-0" :isShow="isShowBurgerMenu"></Menu>
        <ul class="flex gap-8 w-auto" :class="[ulClassState, ulPosition]">
            <RouterLink :class="aTagClassState" to="/rooms">
                <li :class="liClassState">客房旅宿</li>
            </RouterLink>
            <RouterLink v-show="!isLogined" :class="aTagClassState" to="/user/login">
                <li :class="liClassState">會員登入</li>
            </RouterLink>
            <RouterLink v-show="isLogined" :class="aTagClassState" to="/userinfo-and-order/myorder">
                <li class="flex gap-2" :class="liClassState">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 2C6.477 2 2 6.477 2 12C2 17.523 6.477 22 12 22C17.523 22 22 17.523 22 12C22 6.477 17.523 2 12 2Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M4.27344 18.346C4.27344 18.346 6.50244 15.5 12.0024 15.5C17.5024 15.5 19.7324 18.346 19.7324 18.346M12.0024 12C12.7981 12 13.5611 11.6839 14.1238 11.1213C14.6864 10.5587 15.0024 9.79565 15.0024 9C15.0024 8.20435 14.6864 7.44129 14.1238 6.87868C13.5611 6.31607 12.7981 6 12.0024 6C11.2068 6 10.4437 6.31607 9.88112 6.87868C9.31851 7.44129 9.00244 8.20435 9.00244 9C9.00244 9.79565 9.31851 10.5587 9.88112 11.1213C10.4437 11.6839 11.2068 12 12.0024 12V12Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
                    {{ loged }}
                </li>
            </RouterLink>
            <RouterLink class="w-32" :class="aTagClassState" to="/rooms">
                <li :class="liClassState" class="bg-theme-primary-100 px-8 rounded-md">立即訂房</li>
            </RouterLink>
        </ul>
    </nav>
</template>