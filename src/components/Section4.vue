<script setup>
import { inject, ref } from 'vue';
import Slider from './slider.vue';
import { getData } from '../apiFunction';
import RectWideBtn from './RectWideBtn.vue';

const token = inject("token")

const roomInfoUrl = "https://team-rocket-hotelapi-from-freyja.onrender.com/api/v1/admin/rooms/"

const roomInfoArr = await getData(roomInfoUrl,token)

let currentRoom = 0

const currentRoomImageList = ref(roomInfoArr[currentRoom].imageUrlList)


</script>
<template>
    <div class="w-full h-screen flex gap-20 items-end pb-30 bg-theme-neutral-bg relative overflow-hidden">

        <img src="/wave-lines-horizone.png" class="w-[63%] object-contain absolute right-0 top-45 z-10" alt="theme-decoration-wave">
        <img src="/public/decoration-1.png" class="w-full object-cover absolute top-[50%] " alt="decoration">

        <div class="w-[46%]">
            <Slider class="bg-center bg-cover aspect-square" :dataArr="currentRoomImageList"></Slider>
        </div>

        <div class="w-150 flex flex-col gap-10 text-theme-neutral-0">
            <div>
                <h2 class="text-40 font-bold leading-[1.2] tracking-wider">尊爵雙人房</h2>
                <p class="text-base font-medium leading-[1.5] tracking-wide">享受高級的住宿體驗，尊爵雙人房提供給您舒適寬敞的空間和精緻的裝潢。</p>
            </div>

            <h3 class="text-32 font-bold leading-[1.2] tracking-wider">NT$ 10,000</h3>

           <RectWideBtn class="z-20 w-full" content="查看更多"></RectWideBtn>

            <div class="text-theme-primary-100 flex items-center">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 20L13.41 18.59L7.83 13L20 13L20 11L7.83 11L13.41 5.41L12 4L4 12L12 20Z" fill="currentColor"/>
                </svg>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 0L6.59 1.41L12.17 7H0V9H12.17L6.59 14.59L8 16L16 8L8 0Z" fill="currentColor"/>
                </svg>

            </div>
        </div>

    </div>

</template>