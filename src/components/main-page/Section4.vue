<script setup>
import { inject, ref, computed } from 'vue';
import Slider from './slider.vue';
import { getData } from '../../apiFunction';
import RectWideBtn from './RectWideBtn.vue';

const token = inject("token")
const roomInfoUrl = "https://team-rocket-hotelapi-from-freyja.onrender.com/api/v1/admin/rooms/"
const roomInfoArr = await getData(roomInfoUrl,token)
const currentRoom = ref(0)
const currentRoomImageList = computed(()=>roomInfoArr[currentRoom.value].imageUrlList)
const roomType = computed(() => roomInfoArr[currentRoom.value].name)
const roomDescribe = computed(() => roomInfoArr[currentRoom.value].description)
const roomPrice = computed(() => roomInfoArr[currentRoom.value].price)

function handleArrow(diraction){
    const isRight = diraction;
    const isLastRoom = (roomInfoArr.length - 1 ) === currentRoom.value ? true : false ;
    const isFirstRoom = currentRoom.value === 0 ? true : false ;
    if(isRight){
        currentRoom.value = isLastRoom ? currentRoom.value = 0 : currentRoom.value + 1 ;
    }else{
        currentRoom.value = isFirstRoom ? currentRoom.value = (roomInfoArr.length -1) : currentRoom.value - 1 ;
    }
}

</script>
<template>
    <div class="w-full min-h-screen flex gap-20 items-end py-30 bg-theme-neutral-bg relative  px-3
                max-xl:flex-col max-xl:items-center max-xl:justify-center max-xl:h-auto max-xl:overflow-x-clip max-lg:py-20" >
            <img src="/wave-lines-horizone.png" 
            class="w-[63%] object-contain absolute right-0 top-45 z-10
                   max-xl:w-full max-xl:-top-6 max-xl:-right-20 max-xl:scale-y-127" 
            alt="theme-decoration-wave">
            <img src="/public/decoration-1.png" class="w-full object-cover absolute top-[50%] " alt="decoration">
        <div class="w-[46%] max-xl:w-full">
            <Slider class="bg-center bg-cover aspect-square" :dataArr="currentRoomImageList"></Slider>
        </div>
        <div class="w-150 flex flex-col gap-10 text-theme-neutral-0 z-20 max-xl:w-full">
            <div>
                <h2 class="text-40 font-bold leading-[1.2] tracking-wider max-md:text-28">{{ roomType }}</h2>
                <p class="text-base font-medium leading-[1.5] tracking-wide max-md:text-14 max-md:font-normal">{{ roomDescribe }}</p>
            </div>
            <h3 class="text-32 font-bold leading-[1.2] tracking-wider max-md:text-24">NT$ <span>{{ roomPrice }}</span></h3>
            <RectWideBtn class="w-full" content="查看更多"></RectWideBtn>
            <div class="text-theme-primary-100 flex items-center self-end">
                <svg @click="handleArrow(false)" class="m-3 hover:scale-150 active:scale-95 transition-all ease-in-out duration-250" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 20L13.41 18.59L7.83 13L20 13L20 11L7.83 11L13.41 5.41L12 4L4 12L12 20Z" fill="currentColor"/>
                </svg>
                <svg @click="handleArrow(true)" class="m-3 hover:scale-150 active:scale-95 transition-all ease-in-out duration-250" width="16" height="16" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 0L6.59 1.41L12.17 7H0V9H12.17L6.59 14.59L8 16L16 8L8 0Z" fill="currentColor"/>
                </svg>
            </div>
        </div>
    </div>

</template>