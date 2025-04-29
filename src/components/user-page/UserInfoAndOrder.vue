<script setup>
import Header from "../Header.vue";
import Footer from "../Footer.vue";
import { ref, computed } from "vue";

import { RouterView, RouterLink } from "vue-router";

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

const isProfolio = ref(true);

function switchCard(isChangeToOrder){
  if(isChangeToOrder){
    isProfolio.value = false
  }else{
    isProfolio.value = true
  }
}

</script>
<template>
  <div class="flex flex-col items-center bg-theme-neutral-bg overflow-x-hidden">
    <!-- header -->
    <div
      class="w-full flex justify-center px-20 fixed top-0 z-100 bg-theme-neutral-100 max-xl:px-3 max-xl:relative"
    >
      <Header></Header>
    </div>
    <!-- content -->
    <div class="w-full flex flex-col items-center">
      <!-- hero -->
      <div
        class="mt-30 max-lg:mt-0 px-3 flex justify-center items-center z-0 w-full bg-center bg-cover h-96 relative after:absolute after:top-0 after:left-0 after:w-full after:h-full after:bg-theme-neutral-100/40"
        style="background-image: url(/public/profolio-bg.jpg)"
      >
        <div
          class="max-w-324 w-full flex items-center gap-6 h-fit relative z-10"
        >
          <img class="w-36" src="/public/user-avatar.png" alt="avatar" />
          <h1
            class="font-bold text-48 leading-[1.2] tracking-wider text-theme-neutral-0"
          >
            Hello，{{ sampleProfolio.name }}
          </h1>
        </div>
      </div>
      <!-- main -->
      <div
        class="max-w-324 w-full flex pt-20 pb-30 flex-col gap-20 max-lg:gap-10"
      >
        <!-- selector -->
        <div
          class="text-theme-neutral-0 flex font-bold leading-[1.2] tracking-wider"
        >
          <div class="flex flex-col items-center">
            <RouterLink to="/usinfo-and-order/myinfo" @click="switchCard(false)">
              <h6
                class="py-4 px-6"
                :class="!isProfolio ? null : `text-theme-primary-100`"
              >
                個人資料
              </h6>
            </RouterLink>

            <div
              class="w-8 h-1 bg-theme-primary-100 rounded-full transition-all ease-in-out"
              :class="isProfolio ? null : `hidden`"
            ></div>
          </div>

          <div class="flex flex-col items-center">
            <RouterLink to="/usinfo-and-order/myorder" @click="switchCard(true)">
              <h6
                class="py-4 px-6"
                :class="isProfolio ? null : `text-theme-primary-100`"
              >
                我的訂單
              </h6>
            </RouterLink>
            <div
              class="w-8 h-1 bg-theme-primary-100 rounded-full transition-all ease-in-out"
              :class="!isProfolio ? null : `hidden`"
            ></div>
          </div>
        </div>
        <!-- view -->
        <RouterView class="flex justify-between gap-10 px-3 max-lg:flex-col max-lg:items-center max-lg:gap-6"></RouterView>
      </div>
    </div>

    <picture class="w-full h-auto">
      <source
        media="(max-width: 768px)"
        srcset="/public/wave-line-horizone-full-md.png"
      />
      <img
        src="/public/wave-line-horizone-full.png"
        alt="decoration-wave-line"
      />
    </picture>

    <!-- footer -->
    <div
      class="w-full bg-theme-neutral-bg flex justify-center px-20 max-xl:px-3"
    >
      <Footer></Footer>
    </div>
  </div>
</template>
