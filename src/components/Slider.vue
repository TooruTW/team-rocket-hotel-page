<script setup>
import{ ref, onMounted, computed } from 'vue';
const props = defineProps({
  dataArr: Array,
  btn: Boolean
})

const showBtn = computed(()=>{
    return props.btn ? true : false;
})


let currentPage = ref(0)
let isLastPhoto = false
let isFristPhoto = true
let photoInterval
function preloadImages(images) {
  return Promise.all(
    images.map( src => {
        new Promise((resolve, reject) => {
          const img = new Image()
          img.src = src
          img.onload = resolve
          img.onerror = reject
        })
    }))}
function createInterval(){
    return setInterval(()=>{
        if(isLastPhoto){
            currentPage.value = 0
            isLastPhoto = false
            return
        }
        currentPage.value ++
        isLastPhoto = currentPage.value === props.dataArr.length - 1 &&  true
    },5000)
}
onMounted( async ()=>{
    await preloadImages(props.dataArr)
    photoInterval = createInterval()
})
function handleMouseEnter(index){
    clearInterval(photoInterval)
    currentPage.value = index
    isLastPhoto = currentPage.value === props.dataArr.length - 1 &&  true
}
function handleMouseOut(){
    photoInterval = createInterval()
}
function handleClick(isNext){
    clearInterval(photoInterval)
    if(isNext){
        if(currentPage.value === (props.dataArr.length - 1)){
            currentPage.value = 0
            return
        }
        currentPage.value ++
    }else{
        if(currentPage.value === 0){
            currentPage.value = (props.dataArr.length)
        }
        currentPage.value --
    }
    photoInterval = createInterval()
}

const currentImg = computed(() => props.dataArr[currentPage.value])
</script>
<template>
    <!-- slide show  in bg -->
    <div class="relative transition-all duration-1000 ease-in-out bg-center bg-cover flex items-center" :style="{backgroundImage : `url(${currentImg})`}">
        <!-- optional btn -->
        <div v-if=(showBtn) class=" text-theme-neutral-80 w-full flex justify-between px-6">
            <div @click="handleClick(false)" class="w-14 aspect-square rounded-full bg-theme-neutral-0 flex justify-center items-center transition-all ease-in duration-100 hover:scale-110 active:scale-95">
                <svg class="w-1/2" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M560-240 320-480l240-240 56 56-184 184 184 184-56 56Z"/></svg>
            </div>
            <div @click="handleClick(true)" class="w-14 aspect-square rounded-full bg-theme-neutral-0 flex justify-center items-center transition-all ease-in duration-100 hover:scale-110 active:scale-95">
                <svg class="w-1/2" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z"/></svg>
            </div>
        </div>
        <!-- slide indicator -->
        <div class="flex justify-center w-full z-10 mb-6 absolute bottom-0">
            <div class="bg-theme-primary-40 rounded-full mx-1 w-8 h-1 transition-all ease-in duration-300"  
                v-for="(item,index) in dataArr" 
                :key="index"
                :class="{
                    'bg-theme-primary-100': currentPage === index,
                    'w-15':currentPage === index
                    }"
                @:mouseenter="handleMouseEnter(index)"
                @:mouseout="handleMouseOut">
            </div>
        </div>
    </div>
</template>