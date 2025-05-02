<script setup>
import { onMounted, ref, inject, computed } from 'vue';
import ProfolioAccount from "./ProfolioAccount.vue";
import ProfolioInfo from "./ProfolioInfo.vue";
import { getData,putDate } from '../../apiFunction';

const token = inject("token")
const url = `https://team-rocket-hotelapi-from-freyja.onrender.com/api/v1/user`



const userProfolio = ref({
  address: {
    zipcode: 800,
    detail: "fake address",
  },
  _id: "fake id",
  name: "fake name",
  email: "fake email",
  phone: "fakephone",
  birthday: "1993-04-15T00:00:00.000Z",
  createdAt: "2025-04-15T07:36:35.399Z",
  updatedAt: "2025-04-15T07:36:35.399Z",
});

const oldP = ref()
const newP = ref()

const updateForm = computed(()=>({
  "userId": userProfolio.value._id,
  "name": userProfolio.value.name,
  "phone": userProfolio.value.phone,
  "birthday": userProfolio.value.birthday,
  "address": {
    "zipcode": userProfolio.value.address.zipcode,
    "detail": userProfolio.value.address.detail
  },
  "oldPassword": oldP.value,
  "newPassword": newP.value
}))

onMounted(async()=>{
  await getUserInfo()
})
async function getUserInfo(){
  const data = await getData(url,token)
  userProfolio.value = {
  ...userProfolio.value,
  ...data,
};
userProfolio.value.address = {
  ...userProfolio.value.address,
  ...data.address,
}
}
function handleNewPassword(data){
  console.log('update password',data)
  oldP.value = data.old
  newP.value = data.new
  console.log("data to update",updateForm.value)
  updateUserInfo(updateForm.value)
}
function handleNewInfo(){

}

async function updateUserInfo(body){
  console.log(body)
    const data = await putDate(url,token,body)
    console.log("update result",data)
}

</script>
<template>
  <div>
    <!-- card 1 -->
    <ProfolioAccount @updateUserPassword="handleNewPassword" :userObj="userProfolio"></ProfolioAccount>
    <ProfolioInfo :userObj="userProfolio"></ProfolioInfo>
    <!-- card 2 -->
  </div>
</template>
