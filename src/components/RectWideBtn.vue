<script setup>
import {ref} from 'vue';
    const porps = defineProps({
        content: String
    })
    const lineStyle = ref("bg-black")

    function handleBtnEnter(){
        lineStyle.value = "bg-theme-neutral-0"
    }
    function handleBtnOut(){
        lineStyle.value = "bg-black"
    }

</script>

<template>
    <div class="flex justify-end items-center gap-4 p-10 rounded-md bg-theme-neutral-0 text-black
     hover:bg-theme-primary-100 hover:text-theme-neutral-0
        max-md:p-5" 
    @:mouseenter="handleBtnEnter"
    @:mouseout="handleBtnOut">
        <p class="text-24 max-md:text-base text-nowrap">{{ porps.content }}</p>
        <div class="w-1/5 h-0.5" :class="[lineStyle]"></div>
    </div>
</template>