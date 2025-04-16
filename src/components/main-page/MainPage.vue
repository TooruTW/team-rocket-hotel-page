<script setup>
import { provide, computed, inject } from "vue";
import Section1 from './Section1.vue';
import Sectioin2 from './Sectioin2.vue';
import Section3 from "./Section3.vue";
import Section4 from "./Section4.vue";
import Section5 from "./Section5.vue";
import Section6 from "./Section6.vue";

const token = inject(token)

const isTokenExist = computed(()=>{
  return token? true:false;
})

</script>
<template>
  <Section1></Section1>
  <Suspense v-if="isTokenExist">
    <Sectioin2></Sectioin2>
  </Suspense>
  <Section3></Section3>
  <Suspense v-if="isTokenExist">
    <Section4></Section4>
  </Suspense>
  <Suspense v-if="isTokenExist">
    <Section5></Section5>
  </Suspense>
  <Section6></Section6>
</template>
<style scoped>
</style>
