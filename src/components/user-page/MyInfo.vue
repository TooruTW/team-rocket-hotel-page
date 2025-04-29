<script setup>
import { ref } from 'vue';
import ProfolioAccount from "./ProfolioAccount.vue";
import ProfolioInfo from "./ProfolioInfo.vue";

const sampleProfolio = {
  address: {
    zipcode: 800,
    detail: "哩五告貴婚78號",
  },
  _id: "67fe0c83fd9a024ad5c83d9e",
  name: "巧克力",
  email: "testing@test.com",
  phone: "0918273647",
  birthday: "1993-04-15T00:00:00.000Z",
  createdAt: "2025-04-15T07:36:35.399Z",
  updatedAt: "2025-04-15T07:36:35.399Z",
};

</script>
<template>
  <div class="flex justify-between gap-10 max-lg:flex-col max-lg:items-center max-lg:gap-6">
    <!-- card 1 -->
    <ProfolioAccount :userObj="sampleProfolio"></ProfolioAccount>
    <ProfolioInfo :userObj="sampleProfolio"></ProfolioInfo>
    <!-- card 2 -->
  </div>
</template>
