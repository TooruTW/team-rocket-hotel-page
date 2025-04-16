<script setup>
import { ref, onMounted, inject } from 'vue'
import RoomCard from './RoomCard.vue';
import { getData } from '../../apiFunction'

const roominfoURL = "https://team-rocket-hotelapi-from-freyja.onrender.com/api/v1/admin/rooms/"
const token = inject("token")
const roomInfo = ref(null)


onMounted(async ()=>{
    const data = await getData(roominfoURL,token)
    console.log("get data",data)
    roomInfo.value = data  
})

</script>
<template>
    <div class="flex justify-center w-full pt-30 pb-42 bg-theme-primary-10 px-3 max-md:pt-10 max-md:pb-10">

        <div class="flex flex-col gap-20 w-324 max-2xl:w-full max-md:gap-10">
            <!-- title -->
            <div>
                <h6 class="text-20 text-theme-neutral-80 font-bold leading-[1.2] tracking-wider max-md:text-14">房型選擇</h6>
                <h1 class="text-48 text-theme-primary-100 font-bold leading-[1.2] tracking-wider max-md:text-32">各種房型，任您挑選</h1>
            </div>
            <!-- card container -->
            <div class="w-full flex flex-col gap-12">
                <!-- cards -->
                <RoomCard v-for="(room,index) in roomInfo" :dataObj="room" ></RoomCard>
            </div>
        </div>
    </div>
</template>