<script setup>
import { ref, computed } from 'vue'

let isCurrentStage = ref(true)

const stageClass = computed(()=> {
    if(!isCurrentStage.value){
        return "border-1  border-theme-neutral-60 text-theme-neutral-60"
    }
    return "border-0 bg-theme-primary-100 text-theme-neutral-0"
})

</script>
<template>
    <form class="z-10 min-w-416/960 max-md:w-full px-5 flex flex-col gap-10" action="">
                    <div>
                        <p class=" text-theme-primary-100 font-bold text-base max-md:text-14 leading-[1.5] tracking-wide">享樂酒店，誠摯歡迎</p>
                        <h1 class="font-bold text-48 max-md:text-32 leading-[1.2] tracking-wider">立即註冊</h1>
                        <div class="flex items-center pt-8">
                            <div class="w-fit text-nowrap flex flex-col items-center gap-1">
                                <div class="rounded-full w-8 h-8 flex justify-center items-center bg-theme-primary-100">1</div>
                                <h5>輸入信箱及密碼</h5>
                            </div>
                            <div class="w-full px-2 h-0.5 bg-theme-neutral-60 rounded-md"></div>
                            <div class="w-fit text-nowrap flex flex-col items-center gap-1">
                                <div class="rounded-full w-8 h-8 flex justify-center items-center" :class="stageClass">2</div>
                                <h5>填寫基本資料</h5>
                            </div>
                        </div>
                    </div>

                    <div class="flex flex-col gap-2">
                        <label class=" font-bold text-base max-md:text-14 leading-[1.5] tracking-wide w-full flex flex-col gap-2" for="">
                            電子信箱
                            <input class="w-full rounded-md p-4 bg-theme-neutral-40 text-theme-neutral-60 font-medium" type="text" placeholder="hello@exsample.com">
                        </label>

                        <label class=" font-bold text-base max-md:text-14 leading-[1.5] tracking-wide w-full flex flex-col gap-2" for="">
                            密碼
                            <input class="w-full rounded-md p-4 bg-theme-neutral-40 text-theme-neutral-60 font-medium" type="text" placeholder="請輸入密碼">
                        </label>
                        
                        <label class=" font-bold text-base max-md:text-14 leading-[1.5] tracking-wide w-full flex flex-col gap-2" for="">
                            確認密碼
                            <input class="w-full rounded-md p-4 bg-theme-neutral-40 text-theme-neutral-60 font-medium" type="text" placeholder="請再輸入一次密碼">
                        </label>


                    </div>
                    <button class="w-full rounded-md p-4 bg-theme-neutral-40 text-theme-neutral-60 hover:bg-theme-primary-100 hover:text-theme-neutral-0">下一步</button>
                    <h4 class="font-medium text-base max-md:text-14 leading-[1.5] tracking-wide">已經有會員了嗎？
                        <a  class="font-bold text-theme-primary-100 underline" href="">立即登入</a>
                    </h4>
    </form>
</template>