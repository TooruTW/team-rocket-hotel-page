<script setup>
    import {ref} from 'vue'
    import Footer from "../Footer.vue"
    import Hero from './Hero.vue'
</script>
<template>
    <div class="flex flex-col w-full min-h-screen">
        <!-- hero -->
            <Hero></Hero>
        <!-- content -->
        <div>
            <!-- title -->
            <div>
                <p></p>
                <h1></h1>
            </div>
            <!-- card container -->
            <div>
                <!-- cards -->
                <div></div>
            </div>
        </div>
        <!-- footer -->
        <div class="flex justify-center items-center bg-theme-neutral-bg">
            <Footer></Footer>
        </div>
    </div>
</template>