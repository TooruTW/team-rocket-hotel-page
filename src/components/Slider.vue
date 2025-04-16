<script setup>
import{ ref, onMounted, computed } from 'vue';
const props = defineProps({
  dataArr: Array
})
let currentPage = ref(0)
let isLastPhoto = false
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
const currentImg = computed(() => props.dataArr[currentPage.value])
</script>
<template>
    <!-- slide show  in bg -->

    <div class="relative transition-all duration-1000 ease-in-out bg-center bg-cover" :style="{backgroundImage : `url(${currentImg})`}">

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