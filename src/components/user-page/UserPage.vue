<script setup>
import Header from '../Header.vue';
import LoginForm from './LoginForm.vue';
import RegisterForm from './RegisterForm.vue';

</script>
<template>
    <div class="w-full h-auto bg-theme-neutral-bg overflow-hidden relative flex flex-col max-md:justify-center">

        <Header class="w-full h-120/1080 px-20 max-md:px-3 max-md:absolute max-md:h-18 max-md:top-0 z-20"></Header>

        <div class="w-full h-960/1080 flex text-theme-neutral-0 justify-center max-md:py-24">
            <img class="w-1/2 max-h-240 object-cover object-center max-md:hidden" 
            src="https://images.unsplash.com/photo-1630587148265-761cbd139043?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
            alt="login-img">
            <div class="w-1/2 max-md:w-full h-full flex flex-col justify-center max-md:justify-start items-center relative">
                <img class="w-full max-md:w-screen absolute top-48 max-md:-top-15 z-0" src="/public/wave-line-h-light.png" alt="decroation-wave">
                 <RegisterForm></RegisterForm>
            </div>
        </div>
    </div>
</template>