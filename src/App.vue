<script setup>
import {provide} from "vue"
import Section1 from './components/Section1.vue';
import Sectioin2 from './components/Sectioin2.vue';
import Section3 from "./components/Section3.vue";

const isMobile = window.innerWidth <= 768 ? true:false;
console.log(isMobile)
provide("isMobile", isMobile)


</script>
<template>
  <Section1></Section1>
  <Suspense>
    <Sectioin2></Sectioin2>
  </Suspense>
  <Section3></Section3>
</template>
 <!-- vue router -->
<style scoped>
</style>
