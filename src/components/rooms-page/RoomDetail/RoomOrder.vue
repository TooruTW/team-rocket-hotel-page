<script setup>
import Header from "../../Header.vue";
import Footer from "../../Footer.vue";
import BookingData from "./BookingData.vue";
import { computed, ref } from "vue";
import RoomTextContent from "./RoomTextContent.vue";

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

const bookInfo = ref({
  roomType: "尊爵雙人房",
  date: {
    checkIn: new Date(2025, 4, 27),
    checkOut: new Date(2025, 5, 1),
  },
  person: 2,
});
function formateDate(time) {
  const year = time.getFullYear();
  const months = time.getMonth() + 1;
  const data = time.getDate();
  const day = time.getDay();

  const week = ["日", "一", "二", "三", "四", "五", "六"];

  return `${year} 年 ${months} 月 ${data} 日星期${week[day]}`;
}
</script>

<template>
  <div class=" bg-theme-primary-10 flex flex-col items-center">
    <!-- header -->
    <div
      class="w-full bg-theme-neutral-bg flex justify-center px-20 fixed z-100 max-xl:px-3 max-xl:relative max-xl:overflow-x-hidden"
    >
      <Header></Header>
    </div>
    <!-- content -->
    <div class="mt-30 pt-30 w-full max-w-324">
      <div class="flex items-center mb-10">
        <svg
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_406_5430)">
            <path
              d="M25.682 27.65L18.0487 20L25.682 12.35L23.332 10L13.332 20L23.332 30L25.682 27.65Z"
              fill="black"
            />
          </g>
          <defs>
            <clipPath id="clip0_406_5430">
              <rect width="40" height="40" fill="white" />
            </clipPath>
          </defs>
        </svg>
        <h3 class="font-bold text-32 leading-[1.2] tracking-wider">
          確認訂房資訊
        </h3>
      </div>

      <div>
        <!-- right -->
        <div class="flex flex-col gap-12">

          <!-- 訂房資訊 -->
          <div class="flex flex-col gap-10 text-base">
            <h4 class="font-bold text-28 leading-[1.2] tracking-wider">
              訂房資訊
            </h4>

            <div class=" flex flex-col gap-6">
              <div class="flex flex-col gap-3">
                <div class="flex item-center gap-3">
                  <div class="h-6 w-1 rounded-sm bg-theme-primary-100"></div>
                  <h5 class="font-bold leading-[1.2] tracking-wider">
                    選擇房型
                  </h5>
                </div>
                <h5>{{ bookInfo.roomType }}</h5>
              </div>

              <div class="flex flex-col gap-3">
                <div class="flex item-center gap-3">
                  <div class="h-6 w-1 rounded-sm bg-theme-primary-100"></div>
                  <h5 class="font-bold leading-[1.2] tracking-wider">
                    訂房日期
                  </h5>
                </div>

                <div class="flex flex-col">
                  <h5>{{ formateDate(bookInfo.date.checkIn) }}</h5>
                  <h5>{{ formateDate(bookInfo.date.checkOut) }}</h5>
                </div>
              </div>

              <div class="flex flex-col gap-3">
                <div class="flex item-center gap-3">
                  <div class="h-6 w-1 rounded-sm bg-theme-primary-100"></div>
                  <h5 class="font-bold leading-[1.2] tracking-wider">
                    房客人數
                  </h5>
                </div>
                <h5>{{ bookInfo.person }}</h5>
              </div>
            </div>
          </div>

          <hr />
          <!-- 訂房人資料 -->
          <div class="flex flex-col gap-10 text-base">
            <h4 class="font-bold text-28 leading-[1.2] tracking-wider">
              訂房人資訊
            </h4>
            <BookingData></BookingData>
          </div>

          <hr>

          <div class="flex flex-col gap-10 text-base">
            <h4 class="font-bold text-28 leading-[1.2] tracking-wider">
              房間資訊
            </h4>
            <RoomTextContent
              :dataObj="sampleObj"
              :rule="false"
            ></RoomTextContent>
          </div>

        </div>
        <!-- left -->
        <div></div>
      </div>
    </div>
    <!-- footer -->
    <div
      class="w-full bg-theme-neutral-bg flex justify-center px-20 max-xl:px-3"
    >
      <Footer></Footer>
    </div>
  </div>
</template>
