<script setup>
import {ref} from 'vue';

const paddingFromParent = ref(null)
const loginState = ref("會員登入")
    defineProps({
        classFromParent: String
    })

const basicClass = ref("text-theme-white text-base h-14 flex items-center justify-center w-full")

</script>
<template>
    <nav class="w-full flex items-center justify-between py-6" :class="[classFromParent]"  >
        <img class="h-18" src="/hotel-icon.png" alt="hotel-icon">
        <ul class="flex gap-4">
            <a class="w-24" href=""><li :class="[basicClass]">客房旅宿</li></a>
            <a class="w-24" href=""><li :class="[basicClass]">{{ loginState }}</li></a>
            <a class="w-32" href=""><li :class="[basicClass]" class="bg-theme-primary  rounded-md">立即訂房</li></a>
        </ul>
    </nav>
</template>