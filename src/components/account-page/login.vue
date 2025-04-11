<script setup>
import Header from '../Header.vue';

</script>
<template>
    <div class="w-full h-screen bg-theme-neutral-bg overflow-hidden relative flex flex-col max-md:justify-center">
        <Header class="w-full h-120/1080 px-20 max-md:px-3 max-md:absolute max-md:top-0"></Header>
        <div class="w-full h-960/1080 flex text-theme-neutral-0 justify-center">
            <img class="w-1/2 object-cover object-center max-md:hidden" src="https://images.unsplash.com/photo-1630587148265-761cbd139043?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="login-img">
            <div class="w-1/2 max-md:w-full flex flex-col justify-center items-center relative">
                <img class="w-full max-md:w-screen absolute top-48 max-md:-top-1.5 z-0" src="/public/wave-lines-horizone.png" alt="decroation-wave">
                <form class="z-10 min-w-416/960 max-md:w-full px-5 flex flex-col gap-10 mt-23" action="">
                    <div>
                        <p class=" text-theme-primary-100 font-bold text-base max-md:text-14 leading-[1.5] tracking-wide">享樂酒店，誠摯歡迎</p>
                        <h1 class="font-bold text-48 max-md:text-32 leading-[1.2] tracking-wider">立即開始旅程</h1>
                    </div>
                    <div class="flex flex-col gap-2">
                        <label class=" font-bold text-base max-md:text-14 leading-[1.5] tracking-wide w-full flex flex-col gap-2" for="">
                            電子信箱
                            <input class="w-full rounded-md p-4 bg-theme-neutral-40 text-theme-neutral-60" type="text" placeholder="hello@exsample.com">
                        </label>
                        <label class=" font-bold text-base max-md:text-14 leading-[1.5] tracking-wide w-full flex flex-col gap-2" for="">
                            密碼
                            <input class="w-full rounded-md p-4 bg-theme-neutral-40 text-theme-neutral-60" type="text" placeholder="請輸入密碼">
                        </label>
                        <label class="flex justify-between gap-2 font-bold text-base max-md:text-14 leading-[1.5] tracking-wide w-full" for="">
                            <span class="relative">
                                <input class="accent-theme-primary-100 text-theme-neutral-0 w-6 peer" type="checkbox">
                                <div class=" absolute left-0 top-0 peer-checked:hidden pointer-events-none w-6 border-1 border-theme-neutral-60 aspect-square  rounded-sm bg-theme-neutral-0 flex justify-center items-center">
                                </div>
                                <div class=" absolute left-0 top-0 hidden pointer-events-none w-6 aspect-square  rounded-sm bg-theme-primary-100 peer-checked:flex justify-center items-center">
                                    <svg class="w-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="#ffffff"><path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z"/></svg>
                                </div>
                                記住帳號
                            </span>
                            <a class=" justify-self-end-safe text-theme-primary-100 underline" href="">忘記密碼？</a>
                        </label>
                    </div>
                    <button class="w-full rounded-md p-4 bg-theme-neutral-40 text-theme-neutral-60 hover:bg-theme-primary-100 hover:text-theme-neutral-0">會員登入</button>
                    <h4 class="font-bold text-base max-md:text-14 leading-[1.5] tracking-wide">沒有會員嗎？
                        <a  class=" text-theme-primary-100 underline" href="">前往註冊</a>
                    </h4>
                </form>
            </div>
        </div>
    </div>
</template>