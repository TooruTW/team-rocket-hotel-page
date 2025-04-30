<script setup>
import { computed, ref } from "vue";

const props = defineProps({
  roomArr: Array,
});
const isOpen = ref(false);
function handleOpen() {
  isOpen.value = !isOpen.value;
}
const historyClass = computed(() => {
  return !isOpen.value && "max-h-200";
});
const buttonClass = computed(() => {
  return !isOpen.value && "rotate-180";
});

const roomArr = ref(props.roomArr);
</script>
<template>
  <div>
    <!-- title -->
    <h6 class="font-bold text-24 leading-[1.2] tracking-wider mb-10">
      歷史訂單
    </h6>
    <!-- list container -->
    <div class="h-fit overflow-y-hidden" :class="historyClass">
      <!-- card -->
      <div
        v-for="room in roomArr"
        class="flex gap-6 w-full border-b-1 border-theme-neutral-40 pb-10 mb-10"
      >
        <img
          class="w-30 h-20 object-cover rounded-md"
          :src="room.roomId.imageUrl"
          alt="roompic"
        />
        <div class="flex flex-col gap-4">
          <h6 class="text-20 leading-[1.2] tracking-wider max-lg:text-14">
            尊爵雙人房
          </h6>
          <div>
            <p class="mb-2">住宿天數： 1 晚</p>
            <p>住宿人數：2 位</p>
          </div>
          <div>
            <div class="flex items-center gap-3 mb-2">
              <div class="h-6 w-1 rounded-sm bg-theme-primary-100"></div>
              <p>入住：6 月 10 日星期二</p>
            </div>
            <div class="flex items-center gap-3">
              <div class="h-6 w-1 rounded-sm bg-theme-neutral-60"></div>
              <p>退房：6 月 11 日星期三</p>
            </div>
          </div>

          <p class="font-bold">NT$ 10,000</p>
        </div>
      </div>
    </div>
    <!-- extend btn -->
    <div
      @click="handleOpen"
      v-if="roomArr.length > 3"
      class="flex justify-center gap-1 items-center py-4 rounded-md border-1 border-theme-primary-100 text-theme-primary-100"
    >
      <h5>查看更多</h5>
      <svg
        :class="buttonClass"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clip-path="url(#clip0_19527_2530)">
          <path
            d="M7.41 8.58997L12 13.17L16.59 8.58997L18 9.99997L12 16L6 9.99997L7.41 8.58997Z"
            fill="#BF9D7D"
          />
        </g>
        <defs>
          <clipPath id="clip0_19527_2530">
            <rect width="24" height="24" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </div>
  </div>
</template>
