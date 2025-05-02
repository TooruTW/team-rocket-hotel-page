<script setup>
import { ref } from "vue";
import { RouterLink } from "vue-router";

const props = defineProps({
  roomType: String,
  date: Object,
  person: Number,
});

function formatDate(time) {
  const year = time.getFullYear();
  const months = time.getMonth() + 1;
  const data = time.getDate();
  const day = time.getDay();
  const week = ["日", "一", "二", "三", "四", "五", "六"];
  return `${year} 年 ${months} 月 ${data} 日星期${week[day]}`;
}
</script>
<template>
  <div class="flex flex-col gap-10 max-lg:gap-6 text-base">
    <h4 class="font-bold text-28 max-lg:text-20 leading-[1.2] tracking-wider">
      訂房資訊
    </h4>

    <div class="flex flex-col gap-6">
      <div class="flex flex-col gap-3">
        <div class="flex item-center gap-3">
          <div class="h-6 w-1 rounded-sm bg-theme-primary-100"></div>
          <h5 class="font-bold leading-[1.2] tracking-wider">選擇房型</h5>
        </div>
        <h5>{{ props.roomType }}</h5>
      </div>

      <div class="flex flex-col gap-3">
        <div class="flex item-center gap-3">
          <div class="h-6 w-1 rounded-sm bg-theme-primary-100"></div>
          <h5 class="font-bold leading-[1.2] tracking-wider">訂房日期</h5>
        </div>

        <div class="flex flex-col">
          <h5>{{ formatDate(props.date.checkIn) }}</h5>
          <h5>{{ formatDate(props.date.checkOut) }}</h5>
        </div>
      </div>

      <div class="flex flex-col gap-3">
        <div class="flex item-center gap-3">
          <div class="h-6 w-1 rounded-sm bg-theme-primary-100"></div>
          <h5 class="font-bold leading-[1.2] tracking-wider">房客人數</h5>
        </div>
        <h5>{{ props.person }}</h5>
      </div>
    </div>
  </div>
</template>
