<script setup>
import { RouterLink, RouterView } from 'vue-router';
import Cookies from 'js-cookie';
import { inject,provide } from 'vue';

const token = Cookies.get('usertoken') ?  Cookies.get('usertoken'):null;
provide("token",token)


</script>
<template>
   <RouterView></RouterView>
</template>
<style scoped>
</style>
