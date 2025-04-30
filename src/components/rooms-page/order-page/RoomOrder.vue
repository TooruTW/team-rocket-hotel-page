<script setup>
import Header from "../../Header.vue";
import Footer from "../../Footer.vue";
import BookingData from "./BookingData.vue";
import RoomTextContent from "../RoomDetail/RoomTextContent.vue";
import PaymentBriefingCard from "./PaymentBriefingCard.vue";
import RoomInfoSection from "./RoomInfoSection.vue";
import { ref,inject,provide } from "vue";
import { postDate } from "../../../apiFunction";

const token = inject("token");

function padZero(num) {
  return num.toString().padStart(2, '0')
}

function formatDate(time) {
  const year = time.getFullYear();
  const months = time.getMonth() + 1;
  const data = time.getDate();
  return `${year}/${padZero(months)}/${padZero(data)}`
}

function postReservationToSever(){
  const url = `https://team-rocket-hotelapi-from-freyja.onrender.com/api/v1/orders/`
  const body = {
  "roomId": bookInfo.value.roomId,
  "checkInDate": formatDate(bookInfo.value.date.checkIn),
  "checkOutDate": formatDate(bookInfo.value.date.checkOut),
  "peopleNum": bookInfo.value.person,
  "userInfo": {
    "address": {
      "zipcode": userInfo.value.address.zipcode,
      "detail": userInfo.value.address.detail
    },
    "name": userInfo.value.name,
    "phone": userInfo.value.phone,
    "email": userInfo.value.email
  }
}
console.log(token)
console.log("body",body)
postDate(url,token,body)
}

const roomInfo = ref({
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
  roomId:"67f4865cd695541536fc0a50",
  roomType: "尊爵雙人房",
  date: {
    checkIn: new Date(2025, 4, 27),
    checkOut: new Date(2025, 5, 1),
  },
  nights: 2,
  person: 2,
  discount: 1000,
});

const userInfo = ref({
  name: "麥克華斯基",
  address: {
    city: null,
    zone: null,
    zipcode: 800,
    detail: "大難不死路87號",
  },
  phone: "0919102030",
  email: "test@test.com",
})

function getUserInfo(newuserInfo){
  console.log(newuserInfo,"child data")
  console.log(newuserInfo.address.zipcode)
  userInfo.value = newuserInfo
  console.log(userInfo.value , "parent data")
}

</script>

<template>
  <div
    class="bg-theme-primary-10 flex flex-col items-center -z-0 max-xl:overflow-x-hidden"
  >
    <!-- header -->
    <div
      class="w-full bg-theme-neutral-bg flex justify-center px-20 fixed z-100 max-xl:px-3 max-xl:relative"
    >
      <Header></Header>
    </div>
    <!-- content -->
    <div
      class="relative z-0 mt-30 py-30 w-full max-w-324 flex flex-col items-center px-3 max-lg:py-10 max-lg:mt-0"
    >
      <!-- title -->
      <div class="flex items-center mb-10 w-full">
        <svg
          class="max-lg:w-6 h-6"
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
        <h3
          class="font-bold text-32 leading-[1.2] tracking-wider max-lg:text-24"
        >
          確認訂房資訊
        </h3>
      </div>
      <div
        class="flex justify-between gap-4 w-full max-lg:flex-col max-lg:items-center"
      >
        <!-- right -->
        <div
          class="flex flex-col gap-12 max-lg:gap-10 w-full max-w-186 max-lg:max-w-none"
        >
          <!-- 訂房資訊 -->
          <RoomInfoSection
            :roomType="bookInfo.roomType"
            :date="bookInfo.date"
            :person="bookInfo.person"
          ></RoomInfoSection>
          <hr />
          <!-- 訂房人資料 -->
          <div class="flex flex-col gap-10 max-lg:gap-6 text-base">
            <h4
              class="font-bold text-28 max-lg:text-20 leading-[1.2] tracking-wider"
            >
              訂房人資訊
            </h4>
            <BookingData @userInfoUpdate="getUserInfo"></BookingData>
          </div>
          <hr />
          <div class="flex flex-col gap-10 max-lg:gap-6 text-base">
            <h4
              class="font-bold text-28 max-lg:text-20 leading-[1.2] tracking-wider"
            >
              房間資訊
            </h4>
            <RoomTextContent
              :dataObj="roomInfo"
              :hideRule="true"
              :hideTitle="true"
            ></RoomTextContent>
          </div>
        </div>
        <!-- card -->
        <PaymentBriefingCard
          :price="roomInfo.price"
          :nights="bookInfo.nights"
          :discount="bookInfo.discount"
          :imgUrl="roomInfo.imageUrl"
          @passData="postReservationToSever"
        ></PaymentBriefingCard>
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
