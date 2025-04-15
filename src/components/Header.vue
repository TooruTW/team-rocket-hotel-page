<script setup>
import {ref, onMounted} from 'vue';
import Menu from './icons/Menu.vue';
import { RouterLink } from 'vue-router';

const paddingFromParent = ref(null)
const loginState = ref("會員登入")
    
defineProps({
        classFromParent: String
})

const liClass = "text-theme-neutral-0 text-base h-14 flex items-center justify-center w-full"
const liClassMd = "w-full px-5 text-theme-neutral-0 text-base h-14 flex items-center justify-center w-full"
const aTagClass = "w-24"
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
</script>
<template>



    <nav  class="w-auto flex items-center justify-between py-6 max-md:py-4 relative" :class="[classFromParent]">
        <RouterLink class="h-full" to="/">
            <img class="h-full max-w-50" src="/hotel-icon.png" alt="hotel-icon">
        </RouterLink>
        <Menu class="z-50" @click="handleMenu" size="30" color="text-theme-neutral-0" :isShow="isShowBurgerMenu"></Menu>
        <ul class="flex gap-4 w-auto" :class="[ulClassState, ulPosition]">
            <a :class="aTagClassState" href=""><li :class="liClassState">
                客房旅宿</li>
            </a>
            <RouterLink :class="aTagClassState" to="/user/login">
                <li :class="liClassState">{{ loginState }}</li>
            </RouterLink>

            <a class="w-32" :class="aTagClassState" href=""><li :class="liClassState" class="bg-theme-primary-100  rounded-md">立即訂房</li></a>
        </ul>
    </nav>
</template>