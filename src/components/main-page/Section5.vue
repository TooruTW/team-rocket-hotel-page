<script setup>
    import { getData } from '../../apiFunction'
    import {ref, inject} from 'vue';

    const token = inject("token")
    const culiaryUrl = "https://team-rocket-hotelapi-from-freyja.onrender.com/api/v1/admin/culinary/"
    const culiaryArr = await getData(culiaryUrl,token)

</script>
<template>
    <div class="min-h-screen w-full flex items-center justify-end bg-theme-primary-10 relative ">
        <!-- decoration -->
        <img class="w-50 absolute -top-10 right-20 max-xl:hidden" src="/public/dots.png" alt="decroation-dot">
        <img class="h-screen absolute top-13.5 left-10 max-xl:hidden" src="/public/wave-line-vertical.png" alt="decroation-wave-vertical">

            <div class="w-[80%] h-200 flex flex-col justify-between gap-10 my-20
                        max-xl:w-full max-xl:px-3 max-xl:h-180">
                <!-- title -->
                <div class="flex items-center gap-10 leading-[1.2] tracking-wider">
                    <h1 class="h-full text-theme-primary-100 text-48 font-bold leading-[1.2] tracking-wider max-md:text-32">
                        佳餚<br/>美饌
                    </h1>
                    <div class=" w-35 h-0.5 bg-linear-to-r from-theme-primary-100 to-theme-neutral-0"></div>
                </div>
                <!-- cardcontainer -->
                <div class="w-full h-full flex gap-6 overflow-x-scroll snap-x">
                    <!-- card -->
                    <div    v-for="(culiary,index) in culiaryArr"
                                class="h-full w-1/3 max-2xl:w-1/2 max-md:w-full 
                                    border-1 rounded-md flex flex-col justify-end flex-shrink-0
                                  text-theme-neutral-0 bg-center bg-cover snap-center"
                                :style="{backgroundImage: `url(${culiary.image})`}">
                            <!-- textcontent --> 
                            <div class="h-1/3 rounded-b-md p-6 flex flex-col gap-6
                                        backdrop-blur-xl bg-linear-to-b from-[#000000 0%] to-theme-neutral-bg">
                                <div class="flex justify-between">
                                    <h3 class="leading-[1.2] tracking-wider text-24 font-bold">{{ culiary.title }}</h3>
                                    <h4 class="leading-[1.5] tracking-tight text-base max-md:text-14 font-bold">{{ culiary.diningTime }}</h4>
                                </div>
                                <p class="leading-[1.5] tracking-tight text-base max-md:text-14  font-medium">{{ culiary.description }}</p>
                            </div>
                    </div>
                </div>

            </div>

    </div>
</template>