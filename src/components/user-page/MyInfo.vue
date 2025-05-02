<script setup>
import { onMounted, ref, inject } from 'vue';
import ProfolioAccount from "./ProfolioAccount.vue";
import ProfolioInfo from "./ProfolioInfo.vue";
import { getData } from '../../apiFunction';
const token = inject("token")

const userProfolio = ref({
  address: {
    zipcode: 800,
    detail: "fake address",
  },
  _id: "faleid",
  name: "fake name",
  email: "fake email",
  phone: "fakephone",
  birthday: "1993-04-15T00:00:00.000Z",
  createdAt: "2025-04-15T07:36:35.399Z",
  updatedAt: "2025-04-15T07:36:35.399Z",
});
onMounted(async()=>{
  const url = `https://team-rocket-hotelapi-from-freyja.onrender.com/api/v1/user`
  const data = await getData(url,token)
  userProfolio.value = {
  ...userProfolio.value,
  ...data,
};
userProfolio.value.address = {
  ...userProfolio.value.address,
  ...data.address,
}
  console.log("user info",userProfolio.value) 
  
  console.log("user info from sever", data)
})

</script>
<template>
  <div>
    <!-- card 1 -->
    <ProfolioAccount :userObj="userProfolio"></ProfolioAccount>
    <ProfolioInfo :userObj="userProfolio"></ProfolioInfo>
    <!-- card 2 -->
  </div>
</template>
