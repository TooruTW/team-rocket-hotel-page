<script setup>
import {ref} from 'vue';

const paddingFromParent = ref(null)
const loginState = ref("會員登入")
    
defineProps({
        classFromParent: String
})

const basicClass = "text-theme-white text-base h-14 flex items-center justify-center w-full"
const basicClassMd = "text-theme-white text-base h-14 flex items-center justify-end pr-2 w-full"
const toggleMenu = ref("max-md:hidden")
function handleMenu(){
    if(toggleMenu.value === "max-md:flex"){
        toggleMenu.value = "max-md:hidden"
        return
    }
    toggleMenu.value = "max-md:flex"
}

</script>
<template>
    <nav class="w-auto flex items-center justify-between py-6 relative" :class="[classFromParent]"  >
        <img class="h-18" src="/hotel-icon.png" alt="hotel-icon">
        <img @click="handleMenu" class="hidden max-md:block" src="/buger-menu.png" alt="buger-menu">
        <ul class="flex gap-4 w-auto max-md:hidden">
            <a class="w-24" href=""><li :class="[basicClass]">客房旅宿</li></a>
            <a class="w-24" href=""><li :class="[basicClass]">{{ loginState }}</li></a>
            <a class="w-32" href=""><li :class="[basicClass]" class="bg-theme-primary-100  rounded-md">立即訂房</li></a>
        </ul>
        <ul class="hidden flex-col items-center absolute right-0 top-20" :class="[toggleMenu]" >
            <a class="w-32" href=""><li :class="[basicClassMd]">客房旅宿</li></a>
            <a class="w-32" href=""><li :class="[basicClassMd]">{{ loginState }}</li></a>
            <a class="w-32" href=""><li :class="[basicClassMd]" class="bg-theme-primary-100  rounded-l-full">立即訂房</li></a>
        </ul>
    </nav>
</template>