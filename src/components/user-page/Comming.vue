<script setup>
import { ref } from 'vue';
import { RouterLink } from 'vue-router';

const props = defineProps({
  roomObj: Object,
});
const roomInfo = ref(props.roomObj)
const showConfirm = ref(false)

function handleClose(isClose){
   if(isClose){ showConfirm.value = false}
   else{showConfirm.value = true}
}
function handleCancel(){
    console.log('room cancel')
}

</script>
<template>
      <div class=" text-theme-neutral-80 p-10 flex flex-col gap-10 max-lg:p-4 max-lg:gap-6">
        <!-- title -->
        <div>
          <p class=" font-medium text-base leading-1.5 tracking-wide mb-2 max-lg:text-14">預訂參考編號： <span>HH2302183151222</span></p>
          <h5 class=" font-bold text-24 leading-[1.2] tracking-wider text-theme-neutral-100 max-lg:text-base">即將來的行程</h5>
        </div>
        <!-- img -->
        <img class="rounded-md aspect-65/24 w-full" src="/public/fakeImg.webp" alt="房間照片" />
        <!-- date -->
        <div class="font-bold max-lg:text-14">
          <h6 class="text-20 leading-[1.2] tracking-wider mb-6 max-lg:text-14">
            尊爵雙人房，1 晚
            <span class="mx-2 text-theme-neutral-40">|</span> 住宿人數：2 位
          </h6>
          <div class="flex items-center gap-3 mb-2">
            <div class="h-6 w-1 rounded-sm bg-theme-primary-100"></div>
            <p>入住：6 月 10 日星期二，15:00 可入住</p>
          </div>
          <div class="flex items-center gap-3 mb-6">
            <div class="h-6 w-1 rounded-sm bg-theme-neutral-60"></div>
            <p>退房：6 月 11 日星期三，12:00 前退房</p>
          </div>
          <p>NT$ 10,000</p>
        </div>
        <hr class="text-theme-neutral-40" />
        <!-- 設備 -->
        <div>
          <div class="flex items-center gap-3 mb-6">
            <div class="h-6 w-1 rounded-sm bg-theme-primary-100"></div>
            <h6 class="font-bold leading-=[1.2] tracking-wider">房內設備</h6>
          </div>

          <div
            class="grid gap-y-2 grid-cols-6 max-xl:grid-cols-4 max-lg:grid-cols-3 max-md:grid-cols-2 w-full rounded-md border-1 border-theme-neutral-40 p-4 text-nowrap"
          >
            <h6
              class="flex gap-2 items-center text-base leading-[1.5] tracking-wide font-bold"
              v-for="(item, index) in roomInfo.roomId.facilityInfo"
              :key="index"
            >
              <svg
                class="text-theme-primary-100 w-6 h-6"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_40_7654)">
                  <path
                    d="M8.99844 16.2L4.79844 12L3.39844 13.4L8.99844 19L20.9984 6.99998L19.5984 5.59998L8.99844 16.2Z"
                    fill="currentColor"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_40_7654">
                    <rect width="24" height="24" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              <span>{{ item.title }}</span>
            </h6>
          </div>
        </div>
        <!-- 備品 -->
        <div>
          <div class="flex items-center gap-3 mb-6">
            <div class="h-6 w-1 rounded-sm bg-theme-primary-100"></div>
            <h6 class="font-bold leading-=[1.2] tracking-wider">備品提供</h6>
          </div>
          <div
          class="grid gap-y-2 grid-cols-6 max-xl:grid-cols-4 max-lg:grid-cols-3 max-md:grid-cols-2 w-full rounded-md border-1 border-theme-neutral-40 p-4 text-nowrap"
          >
            <h6
              class="flex gap-2 items-center text-base leading-[1.5] tracking-wide font-bold"
              v-for="(item, index) in roomInfo.roomId.amenityInfo"
              :key="index"
            >
              <svg
                class="text-theme-primary-100 w-6 h-6"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_40_7654)">
                  <path
                    d="M8.99844 16.2L4.79844 12L3.39844 13.4L8.99844 19L20.9984 6.99998L19.5984 5.59998L8.99844 16.2Z"
                    fill="currentColor"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_40_7654">
                    <rect width="24" height="24" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              <span>{{ item.title }}</span>
            </h6>
          </div>
        </div>
        <!-- btn -->
         <div class="flex gap-4">
            <div @click="handleClose(false)" class="w-full flex justify-center items-center py-4 border-1 rounded-md border-theme-primary-100 text-theme-primary-100">取消預訂</div>
            <RouterLink to="/room-detail"  class="w-full flex justify-center items-center py-4 rounded-md  bg-theme-primary-100 text-theme-neutral-0">
                查看詳情
            </RouterLink>
         </div>
         <!-- popup -->
          <div v-show="showConfirm" class="fixed top-0 left-0 w-full h-full flex justify-center items-center max-md:items-end backdrop-blur-xl max-md:backdrop-blur-none bg-theme-neutral-100/40">
            <div class=" rounded-md max-md:rounded-b-none bg-theme-neutral-0 flex flex-col items-center justify-between w-150 max-md:w-full h-75 border border-red-100">
                <!-- close btn -->
                 <div class="flex justify-end max-md:justify-between items-center p-4 w-full max-md:border-b-1 border-theme-neutral-40">
                    <h6 class="font-bold text-14 leading-1.5 tracking-wide hidden max-md:block">取消預訂</h6>
                    <svg @click="handleClose(true)" width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="40" height="40" fill="white"/>
<g clip-path="url(#clip0_569_8963)">
<path d="M27 14.41L25.59 13L20 18.59L14.41 13L13 14.41L18.59 20L13 25.59L14.41 27L20 21.41L25.59 27L27 25.59L21.41 20L27 14.41Z" fill="#4B4B4B"/>
</g>
<defs>
<clipPath id="clip0_569_8963">
<rect width="24" height="24" fill="white" transform="translate(8 8)"/>
</clipPath>
</defs>
</svg>
                 </div>

                 <h6 class="font-bold text-20 max-md:text-14 leading-1.5 tracking-wide text-theme-neutral-80">確定要取消此房型的預訂嗎？</h6>
                 <!-- btns -->
                 <div  class="flex gap-4 p-3 border-t-1 border-theme-neutral-40 w-full" >
                    <div @click="handleClose(true)" class="w-full flex justify-center items-center py-4 border-1 rounded-md border-theme-primary-100 text-theme-primary-100">關閉視窗</div>
                    <div @click="handleCancel" class="w-full flex justify-center items-center py-4 rounded-md  bg-theme-primary-100 text-theme-neutral-0">確定取消</div>
                 </div>
            </div>
          </div>
      </div>
</template>
