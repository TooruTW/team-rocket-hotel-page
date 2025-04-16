<script setup>
    import {ref} from 'vue'
    import Header from "../Header.vue";
    import Slider from '../Slider.vue';

    const roomAlbum = ref(["/hero-img.jpeg", "/room-1-1.jpg", "/room-1-2.jpg", "/room-1-3.jpg", "/room-1-4.jpg", "/room-1-5.jpg" ])

</script>
<template>
    <div class="w-full h-200 max-md:h-116 relative flex justify-center items-center">
        <Header class="px-20 z-30 absolute top-0 left-0 max-md:px-3 "></Header>
        <!-- img container -->
        <div class="w-full h-full absolute top-0 left-0 flex z-0">
            <Slider class="w-full min-h-full z-0 
                    max-md:bg-[47%_0%] max-md:bg-size-[320%] 
                    after:absolute after:w-full after:h-full after:bg-black after:opacity-60" 
                    :dataArr="roomAlbum"></Slider>
        </div>
        <!-- title -->
        <div class="h-fit z-20 relative flex items-center justify-between gap-20 max-md:gap-10 max-md:flex-col">
            <div class="w-125 max-md:w-full h-fit text-theme-primary-100 tracking-wider leading-[1.2] font-bold flex flex-col gap-10 items-center">
                <div class="gap-2 max-md:flex max-md:flex-col max-md:items-center">
                    <h2 class="text-40 max-md:text-28">享樂酒店</h2>
                    <h5 class="text-24 max-md:text-16">Enjoyment Luxury Hotel</h5>
                </div>
                <div class="w-full h-0.5 bg-linear-to-r from-theme-primary-100 to-theme-neutral-0 max-md:bg-linear-to-b max-md:w-0.5 max-md:h-21"></div>
            </div>
            <h1 class="text-48 max-md:text-32 text-theme-neutral-0 tracking-wider leading-[1.2] font-bold">客房旅宿</h1>
        </div>
    </div>
</template>