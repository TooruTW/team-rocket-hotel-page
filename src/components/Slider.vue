<script setup>
import{ ref, onMounted } from 'vue';

defineProps:{
    dataArr: Array;
}

let currentPage = ref(0)
let isLastPhoto = false

function createInterval(){
    return setInterval(()=>{
        if(isLastPhoto){
            currentPage.value = 0
            isLastPhoto = false
            return
        }
        currentPage.value ++
        isLastPhoto = currentPage.value === dataArr.length - 1 &&  true
    },5000)
}
onMounted(()=>{
    createInterval()
})

function handleMouseEnter(index){
    clearInterval(photoInterval)
    currentPage.value = index
}
function handleMouseOut(){
    photoInterval = createInterval()
}

const currentImg = ref(dataArr[currentPage.value])

</script>

<template>
    <div>
        <!-- slide show -->
        <img :src="currentImg" alt="image driver" class="w-full object-cover">
        <!-- slide indicator -->
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

</template>