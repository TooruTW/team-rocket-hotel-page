<script setup>
import Header from "../../Header.vue";
import Footer from "../../Footer.vue";
import RoomAlbum from "./RoomAlbum.vue";
import RoomTextContent from "./RoomTextContent.vue";
import DatePicker from "./DatePicker.vue";
import Slider from "../../Slider.vue";
import { ref, onMounted, inject } from "vue";
import DatePickerMobile from "./DatePickerMobile.vue";
import { useRoute, useRouter } from "vue-router";
import { getData } from "../../../apiFunction";

const isEditable = ref(true)

const route = useRoute();
const roomId = route.params.id;
const dayin = ref(null)
const dayout =ref(null)
const totalPrice =ref(null)
console.log(route.query.isEditable)
if(route.query.isEditable === "false"){
  isEditable.value = false
   dayin.value = route.query.checkInDate
   dayout.value = route.query.checkOutDate
   totalPrice.value = route.query.price
}

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
const roominfoURL =
  "https://team-rocket-hotelapi-from-freyja.onrender.com/api/v1/admin/rooms/";
const token = inject("token");
onMounted(async () => {
  const data = await getData(roominfoURL, token);
  const roomObj = data.find((item) => item._id === roomId);
  roomInfo.value = roomObj;
});
const numPerson = ref(2);
const bookingDate = ref(null);
function getBooking(date) {
  console.log("date passed,here the date :", date);
  bookingDate.value = date;
}
function getBookingMobile(data) {
  console.log("date passed,here the date :", data);
  numPerson.value = data.person;
  bookingDate.value = {
    checkIn: data.checkIn,
    checkOut: data.checkOut,
  };
  handleBooking();
}
function handlePerson(isPlus) {
  if (isPlus) {
    if (numPerson.value >= roomInfo.value.maxPeople) return;
    numPerson.value++;
  } else {
    if (numPerson.value <= 0) return;
    numPerson.value--;
  }
}
const router = useRouter()

function handleBooking() {
  if(!bookingDate.value) return
  router.push({
    path:`/room-order/${roomId}`,
    query:{
      people:numPerson.value,
      checkIn:bookingDate.value.checkIn,
      checkOut:bookingDate.value.checkOut,
    }
  })
}
</script>

<template>
  <div class="max-xl:overflow-x-hidden">
    <!-- header -->
    <div
      class="w-full bg-theme-neutral-bg flex justify-center px-20 fixed z-100 max-xl:px-3 max-xl:relative"
    >
      <Header></Header>
    </div>
    <!-- content -->
    <div class="w-full z-0 bg-theme-primary-10 pt-28 relative max-xl:pt-0">
      <!-- album -->
      <div class="p-20 max-lg:p-0">
        <RoomAlbum
          :album="roomInfo.imageUrlList"
          class="rounded-20px h-100 overflow-hidden max-lg:hidden"
        ></RoomAlbum>
        <Slider
          class="w-full h-60 hidden max-lg:block"
          :btn="false"
          :dataArr="roomInfo.imageUrlList"
        ></Slider>
      </div>
      <!-- main area -->
      <div class="p-30 max-xl:p-3 flex justify-center gap-18">
        <!-- text content -->
        <RoomTextContent :dataObj="roomInfo" :rule="true"></RoomTextContent>
        <!-- reservation -->
        <div
          class="h-fit w-full max-w-120 flex flex-col gap-10 p-10 rounded-20px bg-theme-neutral-0 --drop-shadow-3xl max-lg:hidden"
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
              {{ roomInfo.name }}
            </h2>
            <p class="text-base font-medium leading-[1.5] tracking-wide">
              {{ roomInfo.description }}
            </p>
          </div>
          <!-- inputs -->
          <div class="flex flex-col gap-4">
            <!-- date -->
            <div class="w-full">
              <DatePicker v-if="isEditable" @update="getBooking"></DatePicker>
            </div>
            <!-- person -->
            <div v-if="isEditable" class="w-full flex items-center justify-between">
              <h6 class="text-base font-bold leading-[1.5] tracking-wide">
                人數
              </h6>
              <div class="h-full flex items-center">
                <div
                  @click="handlePerson(false)"
                  class="rounded-full border-1 border-theme-neutral-40 w-14 h-14 flex justify-center items-center"
                >
                  <svg
                    class="pointer-events-none"
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
                <div
                  @click="handlePerson(true)"
                  class="rounded-full border-1 border-theme-neutral-40 w-14 h-14 flex justify-center items-center"
                >
                  <svg
                    class="pointer-events-none"
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
          <h5 v-if="isEditable"
            class="text-24 font-bold leading-[1.2] tracking-wider text-theme-primary-100"
          >
            NT$ {{ roomInfo.price }}
          </h5>
          <!-- unediable state -->
          <h5 v-if="!isEditable"
            class="text-24 font-bold leading-[1.2] tracking-wider text-theme-neutral-100"
          > 
             {{ dayin }} ~ {{ dayout }}
          </h5>
          <h5 v-if="!isEditable"
            class="text-20 font-bold leading-[1.2] tracking-wider text-theme-primary-100"
          > 
            NT$ {{ totalPrice }}
          </h5>
          <!-- submit -->
          <button
          v-if="isEditable"
            @click="handleBooking"
            class="text-16 font-bold leading-[1.5] tracking-wid text-theme-neutral-0 w-full bg-theme-primary-100 py-4 rounded-md"
          >
            立即預訂
          </button>
        </div>
        <!-- reservation mobile -->
        <div class="fixed bottom-0 w-screen z-1000 hidden max-lg:block">
          <!-- date picker -->
          <DatePickerMobile
          v-if="isEditable"
            @updateMobile="getBookingMobile"
            class="bg-theme-neutral-0 overflow-hidden rounded-t-20px w-full border-t-1 border-theme-neutral-40"
          ></DatePickerMobile>
        </div>
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
