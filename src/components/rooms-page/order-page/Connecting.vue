<script setup>
import {  onUnmounted, ref } from 'vue';

const length = ref(3)
const dotStatus = ref(0)

function createClass(index){
    let diff = Math.abs(index - dotStatus.value)
    if(diff === 0){
        return `bg-theme-neutral-bg`
    }else if(diff < 2){
        return `bg-theme-neutral-bg/50`
    }else{
        return `bg-theme-neutral-bg/20`
    }
}

const loadingCount = setInterval(()=>{
    console.log(dotStatus.value)
    if(dotStatus.value === length.value){
        dotStatus.value = 0
        return
    }
    dotStatus.value ++
},500)

onUnmounted(()=>{
    clearInterval(loadingCount)
    console.log("clearn interval")
})

</script>
<template>
    <div class="w-screen h-screen fixed top-0 left-0 backdrop-blur-xl flex justify-center items-center bg-theme-neutral-100/40">
        <div class=" max-w-255 max-h-200 w-full h-full flex flex-col items-center justify-center bg-theme-neutral-0 rounded-20px">
            <!-- animation -->
            <div class="flex gap-4 mb-15">
                <div v-for="n in length" class="rounded-full w-4 h-4 transition-colors" :class="createClass(n - 1)"></div>
            </div>
            <img src="/public/hotel-icon-color.png" alt="hotel-icon">
            <h6 class="font-bold text-24 leading-[1.2] tracking-wider">正在處理你的預訂</h6>
        </div>
    </div>
</template>