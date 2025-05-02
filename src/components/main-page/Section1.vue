<script setup>
import { ref, computed, onMounted, onUnmounted } from "vue";
import Header from "../Header.vue";
import { RouterLink } from "vue-router";

const roomAlbum = [
  "/hero-img.jpeg",
  "/room-1-1.jpg",
  "/room-1-2.jpg",
  "/room-1-3.jpg",
  "/room-1-4.jpg",
  "/room-1-5.jpg",
];

let currentPhotoIndex = ref(0);
let isLastPhoto = false;
let photoInterval;

const lineStyle = ref("bg-black");

function handleBtnEnter() {
  lineStyle.value = "bg-theme-neutral-0";
}
function handleBtnOut() {
  lineStyle.value = "bg-black";
}

function createInterval() {
  return setInterval(() => {
    if (isLastPhoto) {
      currentPhotoIndex.value = 0;
      isLastPhoto = false;
      return;
    }
    currentPhotoIndex.value++;
    isLastPhoto = currentPhotoIndex.value === roomAlbum.length - 1 && true;
  }, 5000);
}
onMounted(() => {
  photoInterval = createInterval();
});
onUnmounted(() => {
  clearInterval(photoInterval);
});
function handleMouseEnter(index) {
  clearInterval(photoInterval);
  currentPhotoIndex.value = index;
}
function handleMouseOut() {
  photoInterval = createInterval();
}

const heroBgImg = computed(() => roomAlbum[currentPhotoIndex.value]);

defineProps({
  classFromParent: String,
});
</script>
<template>
  <div
    class="w-full min-h-screen bg-cover bg-center flex flex-col justify-between items-center relative overflow-hidden after:absolute after:w-full after:h-full after:bg-black after:opacity-60"
    :class="[classFromParent]"
    :style="{ backgroundImage: `url(${heroBgImg})` }"
  >
    <Header class="w-full z-20 px-[4%]"></Header>

    <div
      class="flex items-center w-full justify-between z-10 px-[4%] font-bold mb-10 max-md:flex max-md:flex-col max-md:px-8"
    >
      <div
        class="text-theme-primary-100 w-1/3 font-bold tracking-wider max-md:w-full max-md:flex max-md:flex-col max-md:items-center"
      >
        <h2 class="text-40 max-md:text-28">享樂酒店</h2>
        <p class="text-24 max-md:text-base max-md:mt-2 max-md:mb-5">
          Enjoyment Luxury Hotel
        </p>
        <div
          class="w-full h-0.5 bg-linear-to-r from-theme-primary-100 to-theme-neutral-0 max-md:w-0.5 max-md:h-20 max-md:bg-linear-to-b"
        ></div>
      </div>

      <div
        class="w-1/2 text-theme-neutral-0 border-t-1 border-r-1 rounded-10xl py-24 backdrop-blur-[20px] max-md:my-10 max-md:w-full max-md:translate-[20px] max-md:py-15"
      >
        <div class="ml-[-48px] w-fit max-md:translate-[-20px] max-md:ml-0">
          <h1
            class="text-100 max-2xl:text-80 leading-[120%] tracking-wider max-md:text-5xl"
          >
            高雄 <br />豪華住宿之選
          </h1>
          <p class="text-30 mt-6 mb-10 max-2xl:text-24 max-md:text-base">
            我們致力於為您提供無與倫比的奢華體驗與優質服務
          </p>
          <RouterLink to="/rooms">
            <div
              class="w-auto flex justify-end items-center gap-4 p-10 rounded-md bg-theme-neutral-0 text-black hover:bg-theme-primary-100 hover:text-theme-neutral-0 max-md:p-5"
              @:mouseenter="handleBtnEnter"
              @:mouseout="handleBtnOut"
            >
              <p class="text-24 max-md:text-base">立即訂房</p>
              <div class="w-1/5 h-0.5" :class="[lineStyle]"></div></div
          ></RouterLink>
        </div>
      </div>
    </div>

    <div class="w-auto z-10 pb-8 flex">
      <div
        class="bg-theme-primary-40 rounded-full mx-1 w-8 h-1 transition-all ease-in duration-300"
        v-for="(photo, index) in roomAlbum"
        :key="index"
        :class="{
          'bg-theme-primary-100': currentPhotoIndex === index,
          'w-15': currentPhotoIndex === index,
        }"
        @:mouseenter="handleMouseEnter(index)"
        @:mouseout="handleMouseOut"
      ></div>
    </div>
  </div>
</template>
