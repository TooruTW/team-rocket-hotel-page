<script setup>
    import {ref} from 'vue'
    import Footer from "../Footer.vue"
    import Header from "../Header.vue";
    import Slider from '../Slider.vue';

    const roomAlbum = ref(["/hero-img.jpeg", "/room-1-1.jpg", "/room-1-2.jpg", "/room-1-3.jpg", "/room-1-4.jpg", "/room-1-5.jpg" ])
    const currentHeroIndex = ref(0)

</script>
<template>
    <div class="flex flex-col w-full min-h-screen">
    <!-- hero -->
     <div class="w-full h-200 relative">
        <!-- img container -->
        <div class="w-full h-full absolute top-0 left-0 flex z-0
                    after:absolute after:w-full after:h-full after:bg-black after:opacity-60">
            <Slider class="w-full min-h-full" :dataArr="roomAlbum"></Slider>
        </div>
        <!-- header -->
        <Header class="px-20 z-10"></Header>
        <!-- title -->
         
     </div>
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