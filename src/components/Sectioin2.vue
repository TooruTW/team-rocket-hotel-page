<script setup>
import { inject,ref } from 'vue';
const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2N2Y0YjA4YTU4ZWNkOGYzNWY4N2Y2YWUiLCJpYXQiOjE3NDQwODkyMzEsImV4cCI6MTc0NDY5NDAzMX0.-XGmTM0X7ptHggl4nnyL1YR3-l0Tr2tsJlJurz4z3kg"
const isMobile = inject('isMobile')

console.log(isMobile,"section 2")

async function getDataNews(token) {
    const res = await fetch("https://team-rocket-hotelapi-from-freyja.onrender.com/api/v1/admin/news",{
        method:"GET",
        headers:{
            Authorization: token
        }
    })
    const data = await res.json()
    return data.result
}
const newsArr = await getDataNews(token)

const sectionClass = " justify-center gap-20 py-30 "
const sectionCalssMd = "flex-col gap-10 py-20 px-3 "
const sectionCalssState = ref(isMobile? sectionCalssMd:sectionClass)

</script>
<template >
    <div :class="sectionCalssState" class="flex w-full min-h-screen bg-theme-primary-10 relative">

        <img class="w-50 absolute top-[8.3%] right-[9.3%] z-0
                    max-md:w-25 max-md:top-10 max-md:right-6" 
             src="/public/dots.png" alt="decoration-dots">
        <img class="w-50 absolute left-[10%] -bottom-[6.6%] z-0
                    max-md:w-25 max-md:left-6 max-md:-bottom-15" 
        
             src="/public/dots.png" alt="decoration-dots">
        
        <div class="w-fit h-40 max-md:h-26 ">
            <h1 class="h-full text-theme-primary-100 text-48 font-bold leading-[120%] tracking-[5%] 
                        max-md:text-32 
                        ">
                最新<br/>
                消息
            </h1>
            <div class=" w-35 h-0.5 bg-linear-to-r from-theme-primary-100 to-theme-neutral-0"></div>
        </div>

        <div class="w-8/14 flex flex-col gap-10  
                    max-md:w-full">


            <div v-for="(item,index) in newsArr" 
                class=" max-h-73 flex items-center gap-6 z-10 
                        max-md:flex-col max-md:max-h-none">
                <img class="aspect-ration-info-card w-[44%] object-cover rounded-md
                            max-md:aspect-ration-info-card-mb max-md:w-full" 
                    :src="item.image" alt="room-main-img">
                <div class="gap-6 flex flex-col">
                    <h2 class="text-32 font-bold
                                max-md:text-28
                    ">{{ item.title }}</h2>
                    <p class="text-base text-theme-neutral-80 leading-[1.5] tracking-[0.02]
                            max-md:text-14
                    ">{{ item.description }}</p>
                </div>
            </div>



            
        </div>
    </div>
    
</template>