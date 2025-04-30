<script setup>
import Header from "../../Header.vue";
import Footer from "../../Footer.vue";
import BookingData from "./BookingData.vue";
import RoomTextContent from "../RoomDetail/RoomTextContent.vue";
import PaymentBriefingCard from "./PaymentBriefingCard.vue";
import RoomInfoSection from "./RoomInfoSection.vue";
import { ref, inject, onMounted, computed } from "vue";
import { postDate } from "../../../apiFunction";
import { useRoute } from "vue-router";
import { getData } from "../../../apiFunction";

const route = useRoute();
const roomId = route.params.id;
const bookingInfo = route.query;

const roomInfo = ref({
  _id: null,
  name: null,
  description: null,
  imageUrl: null,
  imageUrlList: [],
  areaInfo: null,
  bedInfo: null,
  maxPeople: null,
  price: null,
  status: null,
  layoutInfo: [],
  facilityInfo: [],
  amenityInfo: [],
});

const nights = computed(() => {
  return (
    (new Date(bookingInfo.checkOut) - new Date(bookingInfo.checkIn)) /
    (1000 * 60 * 60 * 24)
  );
});
const bookInfo = ref({
  roomId: roomId,
  roomType: null,
  date: {
    checkIn: new Date(bookingInfo.checkIn),
    checkOut: new Date(bookingInfo.checkOut),
  },
  nights: nights,
  person: Number(bookingInfo.people),
  discount: 1000,
});

const userInfo = ref({
  name: null,
  address: {
    city: null,
    zone: null,
    zipcode: null,
    detail: null,
  },
  phone: null,
  email: null,
});

const roominfoURL =
  "https://team-rocket-hotelapi-from-freyja.onrender.com/api/v1/admin/rooms/";
const token = inject("token");
onMounted(async () => {
  const data = await getData(roominfoURL, token);
  const roomObj = data.find((item) => item._id === roomId);
  roomInfo.value = roomObj;
  bookInfo.value.roomType = roomInfo.value.name
  console.log(roomInfo.value)
});
function padZero(num) {
  return num.toString().padStart(2, "0");
}
function formatDate(time) {
  const year = time.getFullYear();
  const months = time.getMonth() + 1;
  const data = time.getDate();
  return `${year}/${padZero(months)}/${padZero(data)}`;
}

function postReservationToSever() {
  const url = `https://team-rocket-hotelapi-from-freyja.onrender.com/api/v1/orders/`;
  const body = {
    roomId: bookInfo.value.roomId,
    checkInDate: formatDate(bookInfo.value.date.checkIn),
    checkOutDate: formatDate(bookInfo.value.date.checkOut),
    peopleNum: bookInfo.value.person,
    userInfo: {
      address: {
        zipcode: userInfo.value.address.zipcode,
        detail: userInfo.value.address.detail,
      },
      name: userInfo.value.name,
      phone: userInfo.value.phone,
      email: userInfo.value.email,
    },
  };
  postDate(url, token, body);
}



function getUserInfo(newuserInfo) {
  console.log(newuserInfo, "child data");
  console.log(newuserInfo.address.zipcode);
  userInfo.value = newuserInfo;
  console.log(userInfo.value, "parent data");
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
