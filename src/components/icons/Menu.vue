<script setup> 
    import { ref,withDefaults } from 'vue';


    defineProps({
        size: String,
        color: String,
        isShow: Boolean
    })


    

</script>
<template>
     <div class="hidden max-md:block">
        <!-- buger menu -->
        <svg v-if="isShow" :width="size" :height="size" :class = "[color]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20.05 11H3.95C3.42533 11 3 11.4253 3 11.95V12.05C3 12.5747 3.42533 13 3.95 13H20.05C20.5747 13 21 12.5747 21 12.05V11.95C21 11.4253 20.5747 11 20.05 11Z" fill="currentColor"/>
            <path d="M20.05 16H3.95C3.42533 16 3 16.4253 3 16.95V17.05C3 17.5747 3.42533 18 3.95 18H20.05C20.5747 18 21 17.5747 21 17.05V16.95C21 16.4253 20.5747 16 20.05 16Z" fill="currentColor"/>
            <path d="M20.05 6H3.95C3.42533 6 3 6.42533 3 6.95V7.05C3 7.57467 3.42533 8 3.95 8H20.05C20.5747 8 21 7.57467 21 7.05V6.95C21 6.42533 20.5747 6 20.05 6Z" fill="currentColor"/>
        </svg>

        <!-- close tag -->
        <svg v-if="!isShow" :width="size" :height="size" viewBox="0 0 24 24" :class = "[color]" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_14_2300)">
                <path d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z" fill="currentColor"/>
                </g>
                <defs>
                <clipPath id="clip0_14_2300">
                <rect width="24" height="24" fill="white"/>
                </clipPath>
                </defs>
        </svg>
     </div>


</template>