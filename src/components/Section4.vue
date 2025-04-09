<script setup>
import { inject, ref } from 'vue';
import Slider from './slider.vue';
import { getData } from '../apiFunction';

const token = inject("token")

const roomInfoUrl = "https://team-rocket-hotelapi-from-freyja.onrender.com/api/v1/admin/rooms/"

const roomInfoArr = await getData(roomInfoUrl,token)

let currentRoom = 0

const currentRoomImageList = ref(roomInfoArr[currentRoom].imageUrlList)


</script>
<template>
    <div class="w-full h-screen flex items-center bg-theme-neutral-bg relative overflow-hidden">

        <img src="/wave-lines-horizone.png" class="w-[63%] object-contain absolute right-0 top-45 z-10" alt="theme-decoration-wave">
        <img src="/public/decoration-1.png" class="w-full object-cover absolute top-[50%] " alt="decoration">

        <div class="w-[46%]">
            <Slider class="bg-center bg-cover aspect-square" :dataArr="currentRoomImageList"></Slider>
        </div>
        <div>
            <div></div>
            <h3></h3>
            
        </div>

    </div>

</template>