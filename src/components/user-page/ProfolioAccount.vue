<script setup>
import { ref } from 'vue';

const props = defineProps({
    userObj:Object
})
const emit = defineEmits(['updateUserPassword'])

const oldPassword = ref(null)
const newPassword = ref(null)
const confirmPassword = ref(null)
const isAccountEdit = ref(false);

function handleAccountEdit(isEdit) {
  if (isEdit) {
    isAccountEdit.value = true;
  } else {    
    passPassword()
    isAccountEdit.value = false;
  }
}
function passPassword(){
  if(newPassword.value !== confirmPassword.value){
      alert("confirm new password again")
      return
    }
    console.log(oldPassword.value)
    console.log(newPassword.value)
    console.log(confirmPassword.value)
    emit('updateUserPassword',{
      old:oldPassword.value,
      new:newPassword.value
    })
}

</script>
<template>
    <div class="max-w-132 max-lg:max-w-none w-full h-fit bg-theme-neutral-0 p-10 rounded-20px">
    <!-- card 1 -->
          <!-- 顯示 -->
          <div
            v-show="!isAccountEdit"
          >
            <h5 class="mb-10 font-bold text-24 leading-[1.2] tracking-wider">
              修改密碼
            </h5>
            <ul class="flex flex-col gap-6">
              <li>
                <p>電子信箱</p>
                <p class="font-bold">{{ userObj.email }}</p>
              </li>
              <li class="flex justify-between">
                <span>
                  <p>密碼</p>
                  <p class="font-bold text-2xl">・・・・・・・・</p>
                </span>
                <span @click="handleAccountEdit(true)">
                  <p class="text-theme-primary-100 underline">重設</p>
                </span>
              </li>
            </ul>
          </div>
          <!-- 修改 -->
          <div
            v-show="isAccountEdit"
            class="flex flex-col gap-10"
          >
            <h5 class="font-bold text-24 leading-[1.2] tracking-wider">
              修改密碼
            </h5>
            <ul class="flex flex-col gap-6">
              <li>
                <p>電子信箱</p>
                <p class="font-bold">{{ userObj.email }}</p>
              </li>
              <li class="flex flex-col gap-2">
                <label for="oldpassword">舊密碼</label>
                <input
                v-model="oldPassword"
                  class="p-4 rounded-md border-1 border-theme-neutral-40 text-theme-neutral-60"
                  id="oldPassword"
                  type="text"
                  placeholder="請輸入舊密碼"
                />
              </li>
              <li class="flex flex-col gap-2">
                <label for="oldpassword">新密碼</label>
                <input
                v-model="newPassword"
                  class="p-4 rounded-md border-1 border-theme-neutral-40 text-theme-neutral-60"
                  id="newPassword"
                  type="text"
                  placeholder="請輸入新密碼"
                />
              </li>
              <li class="flex flex-col gap-2">
                <label for="oldpassword">確認新密碼</label>
                <input
                v-model="confirmPassword"
                  class="p-4 rounded-md border-1 border-theme-neutral-40 text-theme-neutral-60"
                  id="confirmPassword"
                  type="text"
                  placeholder="請再輸入一次新密碼"
                />
              </li>
            </ul>
            <div
              @click="handleAccountEdit(false)"
              class="py-4 px-8 w-fit rounded-md bg-theme-neutral-40 text-theme-neutral-60"
            >
              儲存設定
            </div>
          </div>
        </div>
</template>