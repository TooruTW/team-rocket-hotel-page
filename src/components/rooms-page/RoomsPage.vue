<script setup>
    import {ref} from 'vue'
    import Footer from "../Footer.vue"
    import Hero from './Hero.vue'
    import RoomList from './RoomList.vue'
</script>
<template>
    <div class="flex flex-col w-full min-h-screen">
        <!-- hero -->
            <Hero></Hero>
        <!-- content -->
            <RoomList></RoomList>
        <!-- footer -->
        <div class="flex justify-center items-center bg-theme-neutral-bg max-md:h-screen">
            <Footer></Footer>
        </div>
    </div>
</template>