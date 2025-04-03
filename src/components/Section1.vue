<script setup>
import {ref,computed, onMounted, onUnmounted} from 'vue'
import Header from './Header.vue';

const roomAlbum = [
    "/hero-img.jpeg", 
    "/room-1-1.jpg", 
    "/room-1-2.jpg", 
    "/room-1-3.jpg", 
    "/room-1-4.jpg", 
    "/room-1-5.jpg"
    ];

let currentPhotoIndex = ref(0);
let isLastPhoto = false
let photoInterval

function createInterval(){
    return setInterval(()=>{
    if(isLastPhoto){
        currentPhotoIndex.value = 0
        isLastPhoto = false
        return
    }
    currentPhotoIndex.value ++
    isLastPhoto = currentPhotoIndex.value === roomAlbum.length - 1 &&  true
},5000)
}

onMounted(()=>{
    photoInterval = createInterval()
})

onUnmounted(()=>{
    clearInterval(photoInterval)
})

function handleMouseEnter(index){
    clearInterval(photoInterval)
    currentPhotoIndex.value = index
}
function handleMouseOut(){
    photoInterval = createInterval()
}

const heroBgImg = computed(()=>roomAlbum[currentPhotoIndex.value])
    
defineProps({
        classFromParent: String
})

</script>
<template>
    <div class="w-full min-h-screen bg-cover flex flex-col justify-between items-center relative 
                after:absolute after:w-full after:h-full after:bg-black after:opacity-60" 
        :class = "[classFromParent]"
        :style = "{ backgroundImage: `url(${heroBgImg})` }"
        >
        <Header class="w-full z-10 px-[4%]"></Header>

        <div class="flex items-center w-full justify-between z-10 px-[4%]">
                <div class="text-theme-primary-100 w-1/3">
                    <h2 class="text-40 2xl:text-40">享樂酒店</h2>
                    <p class="text-24">Enjoyment Luxury Hotel</p>
                    <div class="w-full h-0.5 bg-linear-to-r from-theme-primary-100 to-theme-white"></div>
                </div>

                <div class="w-1/2 text-theme-white border-t-1 border-r-1 rounded-10xl py-24 backdrop-blur-xl">
                    <div class="ml-[-48px] w-3/4">
                        <h1 class="text-100 max-2xl:text-80">高雄 <br>豪華住宿之選</h1>
                        <p class="text-30 max-2xl:text-24">我們致力於為您提供無與倫比的奢華體驗與優質服務</p>
                        <div class="flex justify-end items-center bg-theme-white p-10 mt-15 text-black rounded-md">
                            <p class="text-24 inline-flex items-center gap-4 after:inline-block after:content-[''] after:w-[150px] after:h-0.5 after:bg-black">立即訂房</p>
                        </div>
                    </div>
                </div>
        </div>

        <div class="w-auto z-10 pb-8 flex ">
            <div class="bg-theme-primary-40 rounded-full mx-1 w-8 h-1 transition-all ease-in duration-300"  
                v-for="(photo,index) in roomAlbum" 
                :key="index"
                :class="{
                        'bg-theme-primary-100': currentPhotoIndex === index,
                        'w-15':currentPhotoIndex === index
                        }"
                @:mouseenter="handleMouseEnter(index)"
                @:mouseout="handleMouseOut"
                ></div>
        </div>
      

    </div>
</template>