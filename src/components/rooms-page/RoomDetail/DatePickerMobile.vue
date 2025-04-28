<script setup>
import { ref, computed, watch } from "vue";

const sampleObj = ref({
  _id: "67f4865cd695541536fc0a50",
  name: "尊爵雙人房",
  description:
    "享受高級的住宿體驗，尊爵雙人房提供給您舒適寬敞的空間和精緻的裝潢。",
  imageUrl:
    "https://images.unsplash.com/photo-1560448205-4d9b3e6bb6db?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  imageUrlList: [
    "https://images.unsplash.com/photo-1560448205-4d9b3e6bb6db?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?q=80&w=2942&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1472232533367-7fea57261049?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1497215457980-d57c69aee12d?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1482867899247-e295efdd8c1a?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ],
  areaInfo: "24坪",
  bedInfo: "1 張大床",
  maxPeople: 4,
  price: 10000,
  status: 1,
  layoutInfo: [
    {
      title: "市景",
      isProvide: true,
    },
    {
      title: "獨立衛浴",
      isProvide: true,
    },
    {
      title: "客廳",
      isProvide: true,
    },
    {
      title: "書房",
      isProvide: true,
    },
    {
      title: "樓層電梯",
      isProvide: true,
    },
  ],
  facilityInfo: [
    {
      title: "平面電視",
      isProvide: true,
    },
    {
      title: "吹風機",
      isProvide: true,
    },
    {
      title: "冰箱",
      isProvide: true,
    },
    {
      title: "熱水壺",
      isProvide: true,
    },
    {
      title: "檯燈",
      isProvide: true,
    },
    {
      title: "衣櫃",
      isProvide: true,
    },
    {
      title: "除濕機",
      isProvide: true,
    },
    {
      title: "浴缸",
      isProvide: true,
    },
    {
      title: "書桌",
      isProvide: true,
    },
    {
      title: "音響",
      isProvide: true,
    },
  ],
  amenityInfo: [
    {
      title: "衛生紙",
      isProvide: true,
    },
    {
      title: "推鞋",
      isProvide: true,
    },
    {
      title: "沐浴用品",
      isProvide: true,
    },
    {
      title: "清潔用品",
      isProvide: true,
    },
    {
      title: "刮鬍刀",
      isProvide: true,
    },
    {
      title: "吊衣架",
      isProvide: true,
    },
    {
      title: "浴巾",
      isProvide: true,
    },
    {
      title: "刷牙用品",
      isProvide: true,
    },
    {
      title: "罐裝水",
      isProvide: true,
    },
    {
      title: "梳子",
      isProvide: true,
    },
  ],
  createdAt: "2025-04-08T02:13:48.267Z",
  updatedAt: "2025-04-08T02:26:28.344Z",
});

const emit = defineEmits(['updateMobile'])

function passDate(){
  emit('updateMobile',{
    checkIn: dateCheckIn.value,
    checkOut: dateCheckOut.value,
    person: person.value,
  })
}


const roomInfo = ref(sampleObj.value)
const step = ref(0)
const person = ref(2);
const limit = ref(sampleObj.maxPeople)

function handleSearchDateBtn(event){
    event.preventDefault()
    handleNextStep(true)
}
function handleConfirmDate(event){
    event.preventDefault()
    handleNextStep(true)
}
function handleRePick(event){
    event.preventDefault()
    handleNextStep(false)
}
function handleSave(event){
    event.preventDefault()
    handleNextStep(true)
}
function handleBooking(event){
    event.preventDefault()
    book(dateCheckIn.value,dateCheckOut.value, person.value)
}
function book(checkIn,checkOut,person){

    passDate()

}
function handleNextStep(isNext){
    if(isNext) return step.value ++
    step.value --
}
function handleClose(){
    step.value = 0
}


function handlePerson(isPlus) {
  if (isPlus) {
    if (limit <= person.value) return;
    person.value++;
  } else {
    if (person.value <= 1) return;
    person.value--;
  }
}
const personBtnClassDec = computed(() => {
  return person.value === 1 ? `text-theme-neutral-60` : ``;
});
const personBtnClassInc = computed(() => {
  return person.value === limit ? `text-theme-neutral-60` : ``;
});

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
  }
  const year = time.getFullYear();
  const month = time.getMonth() + 1;
  const date = time.getDate();
  return `${year} / ${month} / ${date}`;
}

const nights = computed(() => {
  const diffDay =
    (dateCheckOut.value - dateCheckIn.value) / (1000 * 60 * 60 * 24);
  return diffDay !== 0? diffDay:"";
});

const stayDay = computed(() => {
  if (dateCheckIn.value && dateCheckOut.value) {
    return `${nights.value} 晚`;
  }
  return "選擇入住日期";
});

const dueDay = computed(() => {
  if (dateCheckInFormted.value && dateCheckOutFormted.value) {
    return `${dateCheckInFormted.value} ~ ${dateCheckOutFormted.value}`;
  }

  return "";
});

const dateCheckBtnClass = computed(() => {
  return dateCheckIn.value && dateCheckOut.value
    ? "bg-theme-primary-100 text-theme-neutral-0"
    : "bg-theme-neutral-40 text-theme-neutral-60";
});

watch(dateCheckIn, () => {
  console.log(dateCheckIn.value, "in");
});
watch(dateCheckOut, () => {
  console.log(dateCheckOut.value, "out");
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

function createDateClass(year, month, day) {
  let dateClass = "";
  // 處理跨年問題
  if (month === 13) {
    year++;
    month = 1;
  }
  const thisDay = new Date(year, month, day);
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
  const thisDay = new Date(year, month, day);

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
    let year = thisYear;
    let month = thisMonth + i;

    if (month > 11) {
      month = month - 12;
      year++;
    }
    arr.push({
      year: year,
      month: month,
    });
  }
  return arr;
});
</script>

<template>
  <div>
    <!-- upper line -->
    <div v-show=" step === 1 || step === 2 "
      class="flex flex-col item-center gap-4 py-4 px-6 border-1 border-theme-neutral-40"
    >
      <div  class="w-full flex flex-col gap-4">
        <svg @click="handleClose"
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
        <h6
          class="text-20 font-bold leading-[1.2] tracking-wide flex items-center gap-4"
        >
          {{ stayDay }}
          <span class="text-14 font-medium leading-[1.2] tracking-wider">{{
            dueDay
          }}</span>
        </h6>
      </div>
      <div v-show=" step === 1"
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
    <div v-show="step === 1" class="h-120 overflow-y-scroll">
      <!-- month -->
      <div v-for="(item, index) in monthList" class="p-6">
        <h6 class="font-bold text-14 leading-1.5 tracking-wide mb-4">
          {{ item.year }} 年 {{ item.month + 1 }} 月
        </h6>
        <div>
          <div class="grid grid-cols-7 w-full gap-y-1">
            <div
              class="font-bold text-base leading-[1.2] tracking-wider flex justify-center items-center py-3 aspect-square w-full"
              v-for="(date, index) in createCalendarArr(
                item.year,
                item.month + 1
              )"
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
    <!-- 人數 -->
    <div v-show="step === 2" class="p-6 flex flex-col gap-4">
      <div>
        <h6 class="font-bold text-20 leading-[1.2] tracking-wider mb-1">
          選擇人數
        </h6>
        <p
          class="font-medium text-14 leading-[1.5] tracking-wide text-theme-neutral-80"
        >
          此房型最多供 4 人居住，不接受寵物入住。
        </p>
      </div>
      <div class="flex items-center gap-4">
        <svg
          @click="handlePerson(false)"
          :class="personBtnClassDec"
          width="56"
          height="56"
          viewBox="0 0 56 56"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="0.5"
            y="0.5"
            width="55"
            height="55"
            rx="27.5"
            stroke="#ECECEC"
          />
          <path d="M35 29H21V27H35V29Z" fill="currentColor" />
        </svg>

        <h6 class="font-bold text-20 leading-[1.2] tracking-wider">
          {{ person }}
        </h6>
        <svg
          @click="handlePerson(true)"
          :class="personBtnClassInc"
          width="56"
          height="56"
          viewBox="0 0 56 56"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="0.5"
            y="0.5"
            width="55"
            height="55"
            rx="27.5"
            stroke="#ECECEC"
          />
          <path
            d="M35 29H29V35H27V29H21V27H27V21H29V27H35V29Z"
            fill="currentColor"
          />
        </svg>
      </div>
    </div>
    <!-- buttons -->
     <!-- status  -->
    <div v-show="step === 0"
      class="w-full p-3 flex justify-between items-center bg-theme-neutral-0 border-t-1 border-theme-neutral-40"
    >  
    <div>
        <p>NT $ {{ roomInfo.price }} /  晚 </p>
    </div>
      <button @click="handleSearchDateBtn"
        class="rounded-md bg-theme-primary-100 py-4 px-12 text-theme-neutral-0"
      >
        查看可訂日期
      </button>
    </div>
    <!-- picking -->
    <div v-show="step === 1"
      class="flex justify-between border-1 border-theme-neutral-40 gap-4 p-3"
    >
      <button @click="handleClearnBtn" class="py-4 px-8 w-full">
        清除日期
      </button>
      <button @click="handleConfirmDate" class="py-4 px-8 w-full rounded-md" :class="dateCheckBtnClass">
        確定日期
      </button>
    </div>

    <div v-show="step === 2"
      class="flex justify-between border-1 border-theme-neutral-40 gap-4 p-3"
    >
      <button @click="handleRePick" class="py-4 px-8 w-full">
        重新選擇日期
      </button>
      <button @click="handleSave" class="py-4 px-8 w-full rounded-md" :class="dateCheckBtnClass">
        儲存
      </button>
    </div>
         <!-- status  -->
         <div v-show="step === 3"
      class="w-full p-3 flex justify-between items-center bg-theme-neutral-0 border-t-1 border-theme-neutral-40"
    >  
    <div>
        <p>NT $ {{ roomInfo.price }} / {{ nights }} 晚 {{ `/ ${person} 人` }}</p>
        <p>{{ dueDay }}</p>
    </div>
      <button @click="handleBooking"
        class="rounded-md bg-theme-primary-100 py-4 px-12 text-theme-neutral-0"
      >
        立即預訂
      </button>
    </div>
    
  </div>
</template>
