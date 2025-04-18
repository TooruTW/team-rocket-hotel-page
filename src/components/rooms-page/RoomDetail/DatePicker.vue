<script setup>
import { ref, computed } from "vue";
import Slider from "../../Slider.vue";

const isShow = ref(false);

const today = new Date();
const todayStart = new Date(
  today.getFullYear(),
  today.getMonth(),
  today.getDate()
);
function formateDate(time) {
  if (!time) {
    return `-- / -- / --`;
  }
  const year = time.getFullYear();
  const month = time.getMonth() + 1;
  const date = time.getDate();
  return `${year} / ${month} / ${date}`;
}
const dateCheckIn = ref(null);
const dateCheckOut = ref(null);
const dateCheckInFormted = computed(() => formateDate(dateCheckIn.value));
const dateCheckOutFormted = computed(() => formateDate(dateCheckOut.value));

const select = ref({
  year: new Date().getFullYear(),
  month: new Date().getMonth() + 1,
});

const nights = computed(() => {
  if (!dateCheckIn.value || !dateCheckOut.value) {
    return 0;
  }
  const diffDay =
    (dateCheckOut.value - dateCheckIn.value) / (1000 * 60 * 60 * 24);
  return diffDay;
});
function createCalendarArr(year, month) {
  const fristDay = new Date(year, month - 1, 1).getDay();
  const numDate = new Date(year, month, 0).getDate();
  const dateArr = Array(numDate)
    .fill(null)
    .map((_, i) => i + 1);
  const dayArr = Array(fristDay).fill(null);
  return [...dayArr, ...dateArr];
}
const dayArr = ["日", "一", "二", "三", "四", "五", "六"];
const calendarArrLeft = computed(() => {
  return createCalendarArr(select.value.year, select.value.month);
});
const calendarArrRight = computed(() => {
  if (select.value.month === 11) {
    return createCalendarArr(select.value.year + 1, 1);
  }
  return createCalendarArr(select.value.year, select.value.month + 1);
});

function handleArrowBtn(isNext) {
  if (isNext) {
    if (select.value.month === 12) {
      select.value.month = 1;
      select.value.year++;
      return;
    }
    select.value.month++;
  } else {
    if (select.value.month === 1) {
      select.value.month = 12;
      select.value.year--;
      return;
    }
    select.value.month--;
  }
}

function handlePickDay(year, month, day) {
  const thisDay = new Date(year, month - 1, day);

  if (thisDay.getTime() <= todayStart.getTime()) return;

  const dateinCode = thisDay;
  if (!dateCheckIn.value) {
    dateCheckIn.value = dateinCode;
    return;
  }
  if (!dateCheckOut.value) {
    if (dateCheckIn.value.getTime() > dateinCode.getTime()) {
      dateCheckOut.value = dateCheckIn.value;
      dateCheckIn.value = dateinCode;
      return;
    }
    dateCheckOut.value = dateinCode;
    return;
  }
  const minDate = Math.min(dateinCode.getTime(), dateCheckIn.value.getTime());
  dateCheckIn.value = new Date(minDate);
  const maxDate = Math.max(dateinCode.getTime(), dateCheckOut.value.getTime());
  dateCheckOut.value = new Date(maxDate);
  if (dateinCode.getTime() > dateCheckIn.value.getTime()) {
    dateCheckOut.value = dateinCode;
  }
}

function handleClearnBtn(event) {
  event.preventDefault();
  dateCheckIn.value = null;
  dateCheckOut.value = null;
}

function createDateClass(year, month, day) {
  let dateClass = "";
  month = month === 13 ? 1 : month;
  const thisDay = new Date(year, month - 1, day);
  if (!day) return;
  // today
  if (thisDay.getTime() === todayStart.getTime()) {
    dateClass += `border-b-2 border-theme-primary-100 `;
  }
  if (thisDay.getTime() < todayStart.getTime()) {
    dateClass += `text-theme-neutral-40 `;
  }
  if (dateCheckIn.value) {
    if (dateCheckIn.value.getTime() === thisDay.getTime()) {
      dateClass += `rounded-full bg-theme-neutral-100 text-theme-neutral-0 `;
    }
  }
  if (dateCheckOut.value) {
    if (dateCheckOut.value.getTime() === thisDay.getTime()) {
      dateClass += `rounded-full bg-theme-neutral-100 text-theme-neutral-0 `;
    }
  }

  if (dateCheckIn.value && dateCheckOut.value) {
    if (
      thisDay.getTime() > dateCheckIn.value.getTime() &&
      thisDay.getTime() < dateCheckOut.value.getTime()
    ) {
      dateClass += `bg-theme-neutral-10 `;
    }
  }
  return dateClass;
}

function handlePicker(show) {
  isShow.value = show ? true : false;
}
</script>
<template>
  <!-- inshort -->
  <div class="relative z-10">
    <div
      @click="handlePicker(true)"
      class="flex justify-between gap-2 z-10 relative"
    >
      <div class="p-4 w-full border-1 rounded-md">
        <p>入住</p>
        <p>{{ dateCheckInFormted }}</p>
      </div>
      <div class="p-4 w-full border-1 rounded-md">
        <p>退房</p>
        <p>{{ dateCheckOutFormted }}</p>
      </div>
    </div>

    <!-- full -->
    <div
      v-show="isShow"
      class="w-200 bg-theme-neutral-0 -z-0 absolute -right-10 -top-6 p-8 rounded-20px flex flex-col gap-10"
    >
      <!-- state -->
      <div class="flex flex-col justify-center gap-2 w-1/3">
        <h5 class="text-24 font-bold leading-[1.2] tracking-wider">
          {{ nights }} 晚
        </h5>
        <p
          class="text-base font-medium leading-[1.5] tracking-wide text-theme-neutral-80 text-nowrap"
        >
          {{ dateCheckInFormted }} - {{ dateCheckOutFormted }}
        </p>
      </div>
      <!-- calendar -->
      <div class="flex justify-between gap-15">
        <div class="relative w-full">
          <svg
            class="text-theme-neutral-100 hover:text-theme-neutral-60 absolute left-0"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            @click="handleArrowBtn(false)"
          >
            <path
              d="M15.4102 7.41L10.8302 12L15.4102 16.59L14.0002 18L8.00016 12L14.0002 6L15.4102 7.41Z"
              fill="currentColor"
            />
          </svg>

          <h6
            class="text-20 font-bold leading-[1.2] tracking-wider text-center"
          >
            {{ select.year }} 年 {{ select.month }}月
          </h6>

          <div class="grid grid-cols-7 w-full gap-y-1">
            <div
              v-for="(day, index) in dayArr"
              :key="index"
              class="font-bold text-base leading-[1.2] tracking-wider flex justify-center items-center py-3 aspect-square w-full"
            >
              {{ day }}
            </div>
            <div
              class="font-bold text-base leading-[1.2] tracking-wider flex justify-center items-center py-3 aspect-square w-full"
              v-for="(date, index) in calendarArrLeft"
              :key="index"
              :class="createDateClass(select.year, select.month, date)"
              @click="handlePickDay(select.year, select.month, date)"
            >
              {{ date }}
            </div>
          </div>
        </div>
        <div class="relative w-full">
          <svg
            class="text-theme-neutral-100 hover:text-theme-neutral-60 absolute right-0"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            @click="handleArrowBtn(true)"
          >
            <path
              d="M8.58984 16.59L13.1698 12L8.58984 7.41L9.99984 6L15.9998 12L9.99984 18L8.58984 16.59Z"
              fill="currentColor"
            />
          </svg>

          <h6
            class="text-20 font-bold leading-[1.2] tracking-wider text-center"
          >
            {{ select.month === 12 ? select.year + 1 : select.year }} 年
            {{ select.month === 12 ? 1 : select.month + 1 }}月
          </h6>
          <div class="grid grid-cols-7 w-full gap-y-1">
            <div
              v-for="(day, index) in dayArr"
              :key="index"
              class="font-bold text-base leading-[1.2] tracking-wider flex justify-center items-center py-3 aspect-square w-full"
            >
              {{ day }}
            </div>
            <div
              class="font-bold text-base leading-[1.2] tracking-wider flex justify-center items-center py-3 aspect-square w-full"
              v-for="(date, index) in calendarArrRight"
              :key="index"
              :class="createDateClass(select.year, select.month + 1, date)"
              @click="handlePickDay(select.year, select.month + 1, date)"
            >
              {{ date }}
            </div>
          </div>
        </div>
      </div>
      <!-- buttons -->
      <div class="flex justify-end gap-4">
        <button class="py-4 px-6 rounded-md" @click="handleClearnBtn">
          清除日期
        </button>
        <button
          @click="handlePicker(false)"
          class="py-4 px-6 rounded-md bg-theme-primary-100 text-theme-neutral-0"
          type="button"
        >
          確定日期
        </button>
      </div>
    </div>
  </div>
  <div
    v-show="isShow"
    class="fixed w-screen h-screen bg-theme-neutral-100/40 backdrop-blur-xl top-0 left-0 z-0"
  ></div>
</template>
