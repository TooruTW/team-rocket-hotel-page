<script setup>
import Header from "../../Header.vue";
import Footer from "../../Footer.vue";
import RoomAlbum from "./RoomAlbum.vue";
import RoomTextContent from "./RoomTextContent.vue";
import DatePicker from "./DatePicker.vue";
import { computed, ref } from "vue";

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
const numPerson = ref(2)
const bookingDate = ref(null)
function getBooking(date){
  console.log("date passed,here the date :",date)
  bookingDate.value = date
}
function handlePerson(isPlus){
    if(isPlus){
        if(numPerson.value >= sampleObj.value.maxPeople) return
        numPerson.value ++
    }else{  
        if(numPerson.value <= 0) return
        numPerson.value --
    }
}

function handleBooking(){
  console.log("date", bookingDate.value)
  console.log("person", numPerson.value)
}

</script>

<template>
  <div>
    <!-- header -->
    <div class="w-full bg-theme-neutral-bg flex justify-center px-20 fixed">
      <Header></Header>
    </div>
    <!-- content -->
    <div class="w-full bg-theme-primary-10">
      <!-- album -->
      <div class="p-20">
        <RoomAlbum
          :album="sampleObj.imageUrlList"
          class="rounded-20px overflow-hidden"
        ></RoomAlbum>
      </div>
      <div class="p-30 flex justify-center gap-18">
        <!-- text content -->
        <RoomTextContent :dataObj="sampleObj"></RoomTextContent>
        <!-- reservation -->
        <div
          class="h-fit w-full max-w-120 flex flex-col gap-10 p-10 rounded-20px bg-theme-neutral-0 --drop-shadow-3xl"
        >
          <!-- section title -->
          <div class="w-full border-b-2 border-theme-neutral-40">
            <h5 class="text-24 font-bold leading-[1.2] tracking-wider mb-4">
              預訂房型
            </h5>
          </div>
          <!-- room type -->
          <div>
            <h2 class="text-40 font-bold leading-[1.2] tracking-wider">
              {{ sampleObj.name }}
            </h2>
            <p class="text-base font-medium leading-[1.5] tracking-wide">
              {{ sampleObj.description }}
            </p>
          </div>
          <!-- inputs -->
          <div class="flex flex-col gap-4">
            <!-- date -->
            <div class="w-full">
                <DatePicker @update="getBooking"></DatePicker>
            </div>
            <!-- person -->
            <div class="w-full flex items-center justify-between">
              <h6 class="text-base font-bold leading-[1.5] tracking-wide">人數</h6>
              <div class="h-full flex items-center">

                <div @click="handlePerson(false)"
                  class="rounded-full border-1 border-theme-neutral-40 w-14 h-14 flex justify-center items-center"
                >
                  <svg class=" pointer-events-none"
                    width="14"
                    height="2"
                    viewBox="0 0 14 2"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M14 2H0V0H14V2Z" fill="black" />
                  </svg>
                </div>
                <h6 class="px-4 text-20 font-bold leading-[1.2] tracking-wider">
                  {{ numPerson }}
                </h6>
                <div @click="handlePerson(true)"
                  class="rounded-full border-1 border-theme-neutral-40 w-14 h-14 flex justify-center items-center"
                >
                  <svg class=" pointer-events-none"
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M14 8H8V14H6V8H0V6H6V0H8V6H14V8Z" fill="black" />
                  </svg>
                </div>

              </div>
            </div>
          </div>
          <!-- price -->
          <h5  class="text-24 font-bold leading-[1.2] tracking-wider text-theme-primary-100">
            NT$ {{ sampleObj.price }}
          </h5>
          <!-- submit -->
          <button @click="handleBooking"  class="text-16 font-bold leading-[1.5] tracking-wid text-theme-neutral-0 w-full bg-theme-primary-100 py-4 rounded-md">立即預訂</button>
        </div>
      </div>
    </div>
    <!-- footer -->
    <div class="w-full bg-theme-neutral-bg flex justify-center px-20">
      <Footer></Footer>
    </div>
  </div>
</template>
