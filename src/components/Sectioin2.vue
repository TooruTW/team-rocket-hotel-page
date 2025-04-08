<script setup>
import {ref} from 'vue';

</script>
<template >
    <div class="flex justify-center gap-20 py-30 w-full min-h-screen  overflow-hidden bg-theme-primary-10">

        <div class="w-fit h-40 relative">
            <img class="w-50 absolute top-241 right-13 z-0" src="/public/dots.png" alt="decoration-dots">

            <h1 class="h-full text-theme-primary-100 text-48 font-bold leading-[120%] tracking-[5%]">
                最新<br/>
                消息
            </h1>
            <div class=" w-35 h-0.5 bg-linear-to-r from-theme-primary-100 to-theme-neutral-0"></div>
        </div>

        <div class="w-8/14 flex flex-col gap-10 relative">
            <img class="w-50 absolute bottom-193 left-252 z-0" src="/public/dots.png" alt="decoration-dots">

            <div class=" max-h-73 flex items-center gap-6 z-10">
                <img class="aspect-ration-info-card w-[44%] object-cover rounded-md" src="/public/room-1-1.jpg" alt="room-main-img">
                <div class="gap-6 flex flex-col">
                    <h2 class="text-32 font-bold">秋季旅遊，豪華享受方案</h2>
                    <p class="text-base text-theme-neutral-80">
                        秋天就是要來場豪華的旅遊！我們為您準備了一系列的秋季特別方案，包括舒適的住宿、美食饗宴，以及精彩的活動。不論您是想來一趟浪漫之旅，還是想和家人共度美好時光，都能在這裡找到最適合的方案。
                    </p>
                </div>
            </div>

            <div class=" max-h-73 flex items-center gap-6">
                <img class="aspect-ration-info-card w-[44%] object-cover rounded-md" src="/public/room-1-1.jpg" alt="room-main-img">
                <div class="gap-6 flex flex-col">
                    <h2 class="text-32 font-bold">秋季旅遊，豪華享受方案</h2>
                    <p class="text-base text-theme-neutral-80">
                        秋天就是要來場豪華的旅遊！我們為您準備了一系列的秋季特別方案，包括舒適的住宿、美食饗宴，以及精彩的活動。不論您是想來一趟浪漫之旅，還是想和家人共度美好時光，都能在這裡找到最適合的方案。
                    </p>
                </div>
            </div>
            <div class=" max-h-73 flex items-center gap-6">
                <img class="aspect-ration-info-card w-[44%] object-cover rounded-md" src="/public/room-1-1.jpg" alt="room-main-img">
                <div class="gap-6 flex flex-col">
                    <h2 class="text-32 font-bold">秋季旅遊，豪華享受方案</h2>
                    <p class="text-base text-theme-neutral-80">
                        秋天就是要來場豪華的旅遊！我們為您準備了一系列的秋季特別方案，包括舒適的住宿、美食饗宴，以及精彩的活動。不論您是想來一趟浪漫之旅，還是想和家人共度美好時光，都能在這裡找到最適合的方案。
                    </p>
                </div>
            </div>
            
        </div>
    </div>
    
</template>