<script setup>
import { provide } from "vue"
import Section1 from './Section1.vue';
import Sectioin2 from './Sectioin2.vue';
import Section3 from "./Section3.vue";
import Section4 from "./Section4.vue";
import Section5 from "./Section5.vue";
import Section6 from "./Section6.vue";

const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2N2ZjZDdmYjMzYjJlMGFjNzc3Y2JmNTMiLCJpYXQiOjE3NDQ2OTI0NjYsImV4cCI6MTc0NTI5NzI2Nn0.lmFtn76GFkGIVXV07eDP-KRFs9LIH2-36fDpeJsDwC8"

provide("token",token)


</script>
<template>
  <Section1></Section1>
  <Suspense>
    <Sectioin2></Sectioin2>
  </Suspense>
  <Section3></Section3>
  <Suspense>
    <Section4></Section4>
  </Suspense>
  <Suspense>
    <Section5></Section5>
  </Suspense>
  <Section6></Section6>
</template>
 <!-- vue router -->
<style scoped>
</style>
