<script setup>
import { ref } from "vue";
import UserInfoForm from "../UserInfoForm.vue";

const props = defineProps({
  userObj: Object,
});

const newName = ref(props.userObj.name)
const newPhone = ref(props.userObj.phone)
const newBirthday = ref(props.userObj.birthday)
const newAddress = ref(props.userObj.address)

const emit = defineEmits(['updateUserInfo'])

function formateBirthday(birthday) {
  const bri = new Date(birthday)
  return `${bri.getFullYear()}-${bri.getMonth() + 1 }-${bri.getDate()}`;
}
function handleNewUserInfo(data){
  newName.value = data.newUserInfo.name
  newPhone.value = data.newUserInfo.phone
  newBirthday.value = data.newUserInfo.birthday
  newAddress.value = data.newUserInfo.address
}

const isUserInfoEdit = ref(false);
function handleAccountEdit(isEdit) {
  if (isEdit) {
    isUserInfoEdit.value = true;
  } else {
    emit('updateUserInfo',{
    name:newName.value,
    phone:newPhone.value,
    birthday:newBirthday.value,
    address:newAddress.value
  })
    isUserInfoEdit.value = false;
  }
}
</script>
<template>
  <div class="max-w-182 max-lg:max-w-none w-full bg-theme-neutral-0 p-10 rounded-20px">
    <!-- 顯示 -->
    <h5 class="font-bold text-24 leading-[1.2] tracking-wider mb-6">基本資料</h5>
    <div v-if="!isUserInfoEdit" class="flex flex-col gap-10">
      <ul class="flex flex-col gap-6">
        <li class="flex flex-col gap-2">
          <p>姓名</p>
          <p class="font-bold">{{ userObj.name }}</p>
        </li>
        <li class="flex flex-col gap-2">
          <p>手機號碼</p>
          <p class="font-bold">{{ userObj.phone }}</p>
        </li>
        <li class="flex flex-col gap-2">
          <p>生日</p>
          <p class="font-bold">
            {{ formateBirthday(userObj.birthday) }}
          </p>
        </li>
        <li class="flex flex-col gap-2">
          <p>地址</p>
          <p class="font-bold">{{ userObj.address.detail }}</p>
        </li>
      </ul>
      <div
      @click="handleAccountEdit(true)"
        class="py-4 px-8 w-fit rounded-md border-1 border-theme-primary-100 text-theme-primary-100"
      >
        編輯
      </div>
    </div>
    <!-- 修改 -->
    <div v-if="isUserInfoEdit">
      <UserInfoForm @updateUserInfo="handleNewUserInfo" :name="userObj.name " :phone="userObj.phone" :birthday="userObj.birthday" :address="userObj.address"></UserInfoForm>
      <div
        @click="handleAccountEdit(false)"
        class="mt-6 py-4 px-8 w-fit rounded-md bg-theme-neutral-40 text-theme-neutral-60"
      >
        儲存設定
      </div>
    </div>
  </div>
</template>
