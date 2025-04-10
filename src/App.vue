<script setup>
import { provide } from "vue"
import Section1 from './components/Section1.vue';
import Sectioin2 from './components/Sectioin2.vue';
import Section3 from "./components/Section3.vue";
import Section4 from "./components/Section4.vue";
import Section5 from "./components/Section5.vue";
import Section6 from "./components/Section6.vue";

const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2N2Y0N2YzZGQ2OTU1NDE1MzZmYzBhMjAiLCJpYXQiOjE3NDQwNzY2NDYsImV4cCI6MTc0NDY4MTQ0Nn0.OzwlHHbbPwhrNqLgK9PIBGoqwY9IM5UGIPiplAl3S5I"
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
