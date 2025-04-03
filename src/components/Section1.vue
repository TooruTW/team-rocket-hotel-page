<script setup>
import {ref} from 'vue'
import Header from './Header.vue';

const heroBgImg = "bg-[url(/hero-img.jpeg)]"
    
defineProps({
        classFromParent: String
})

</script>
<template>
    <div class="w-full h-screen bg-cover flex flex-col relative after:absolute after:w-full after:h-screen after:bg-black after:opacity-60" :class = "[heroBgImg,classFromParent]">
        <Header class="w-full z-10"></Header>

        <div class="grow flex items-center justify-between z-10">
                <div class="text-theme-primary">
                    <h2 class="text-40">享樂酒店</h2>
                    <p class="text-24">Enjoyment Luxury Hotel</p>
                    <div class="w-159 h-0.5 bg-linear-to-r from-theme-primary to-theme-white"></div>
                </div>

                <div class="w-auto text-theme-white border-t-1 border-r-1 rounded-10xl py-24 pr-50 backdrop-blur-xl">
                    <div class="ml-[-48px] ">
                        <h1 class="text-100">高雄 <br>豪華住宿之選</h1>
                        <p class="text-30">我們致力於為您提供無與倫比的奢華體驗與優質服務</p>
                        <div class="flex justify-end items-center bg-theme-white p-10 mt-15 text-black rounded-md">
                            <p class="text-24 inline-flex items-center gap-4 after:inline-block after:content-[''] after:w-[150px] after:h-0.5 after:bg-black">立即訂房</p>
                        </div>
                    </div>
                </div>
        </div>
      

    </div>
</template>