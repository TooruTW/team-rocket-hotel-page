<script setup>
import { ref, computed, watch } from "vue";

const today = new Date();
const todayStart = new Date(
  today.getFullYear(),
  today.getMonth(),
  today.getDate()
);
const thisYear = today.getFullYear();
const thisMonth = today.getMonth();

const dateCheckIn = ref(null);
const dateCheckOut = ref(null);
const dateCheckInFormted = computed(() => formateDate(dateCheckIn.value));
const dateCheckOutFormted = computed(() => formateDate(dateCheckOut.value));

function formateDate(time) {
    if (!time) {
    return ``;
  }  const year = time.getFullYear();
  const month = time.getMonth() + 1;
  const date = time.getDate();
  return `${year} / ${month} / ${date}`;
}

const nights = computed(() => {
  const diffDay =
    (dateCheckOut.value - dateCheckIn.value) / (1000 * 60 * 60 * 24);
  return diffDay;
});

const stayDay = computed(()=>{
    if(dateCheckIn.value && dateCheckOut.value){
        return `${nights.value} 晚`
    }
    return '選擇入住日期'
})

const dueDay = computed(()=>{
    if(dateCheckInFormted.value && dateCheckOutFormted.value){
        return `${dateCheckInFormted.value} ~ ${dateCheckOutFormted.value}`
    }

    return ''
})

const dateCheckBtnClass = computed(()=>{
   return (dateCheckIn.value && dateCheckOut.value) ? 'bg-theme-primary-100 text-theme-neutral-0':'bg-theme-neutral-40 text-theme-neutral-60'
})

watch(dateCheckIn,()=>{
    console.log(dateCheckIn.value,"in")
})
watch(dateCheckOut,()=>{
    console.log(dateCheckOut.value,"out")
})

function createCalendarArr(year, month) {
  const fristDay = new Date(year, month - 1, 1).getDay();
  const numDate = new Date(year, month, 0).getDate();
  const dateArr = Array(numDate)
    .fill(null)
    .map((_, i) => i + 1);
  const dayArr = Array(fristDay).fill(null);
  return [...dayArr, ...dateArr];
}

function createDateClass(year, month, day) {
  let dateClass = "";
  // 處理跨年問題
  if (month === 13) {
    year++;
    month = 1;
  }
  const thisDay = new Date(year, month , day);
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

function handlePickDay(year, month, day) {
  const thisDay = new Date(year, month , day);

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

const monthList = computed(() => {
  const arr = [];
  for (let i = 0; i < 12; i++) {
    let year = thisYear
    let month = thisMonth + i
    
    if(month > 11){
        month = month - 12
        year ++
    }
    arr.push({
      year: year,
      month: month,
    });
  }
  return arr
});

</script>

<template>
  <div>
    <!-- upper line -->
    <div class="flex flex-col item-center gap-4 py-4 px-6">
      <div class="w-full flex flex-col gap-4">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_4323_7100)">
            <path
              d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z"
              fill="black"
            />
          </g>
          <defs>
            <clipPath id="clip0_4323_7100">
              <rect width="24" height="24" fill="white" />
            </clipPath>
          </defs>
        </svg>
        <h6 class="text-20 font-bold leading-[1.2] tracking-wide flex items-center gap-4">
          {{ stayDay }} <span class="text-14 font-medium leading-[1.2] tracking-wider ">{{ dueDay }}</span>
        </h6>
      </div>
      <div
        class="text-14 font-bold text-center leading-1.5 tracking-wider grid grid-cols-7"
      >
        <h6 class="p-2.5">日</h6>
        <h6 class="p-2.5">一</h6>
        <h6 class="p-2.5">二</h6>
        <h6 class="p-2.5">三</h6>
        <h6 class="p-2.5">四</h6>
        <h6 class="p-2.5">五</h6>
        <h6 class="p-2.5">六</h6>
      </div>
    </div>
    <!-- calender -->
    <div class="h-120 overflow-y-scroll ">
        <!-- month -->
      <div v-for="(item,index) in monthList" class="p-6 ">
        <h6 class="font-bold text-14 leading-1.5 tracking-wide mb-4">
          {{ item.year }} 年 {{ item.month + 1 }} 月
        </h6>
        <div>
          <div class="grid grid-cols-7 w-full gap-y-1">
            <div
              class="font-bold text-base leading-[1.2] tracking-wider flex justify-center items-center py-3 aspect-square w-full"
              v-for="(date, index) in createCalendarArr(item.year, item.month + 1)"
              :key="index"
              :class="createDateClass(item.year, item.month, date)"
              @click="handlePickDay(item.year, item.month, date)"
            >
              {{ date }}
            </div>
          </div>
        </div>
      </div>

    </div>
    <!-- buttons -->
    <div class="flex justify-between border-1 border-theme-neutral-40 gap-4 p-3">
      <button @click="handleClearnBtn" class="py-4 px-8 w-full">
        清除日期
      </button>
      <button
        class="py-4 px-8 w-full rounded-md"
        :class="dateCheckBtnClass"
      >
        確定日期
      </button>
    </div>
  </div>
</template>
