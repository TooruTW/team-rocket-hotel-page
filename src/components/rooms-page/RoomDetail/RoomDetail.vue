<script setup>
import Header from "../../Header.vue";
import Footer from "../../Footer.vue";
import RoomAlbum from "./RoomAlbum.vue";
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
</script>

<template>
  <div>
    <!-- header -->
    <div class="w-full bg-theme-neutral-bg flex justify-center px-20">
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
      <!-- text content -->
      <div class="flex justify-center">
        <!-- detail description -->
        <div class="flex flex-col justify-between gap-20">
          <!-- Heading -->
          <div class="flex flex-col gap-6">
            <h1
              class="text-40 text-theme-neutral-100 font-bold leading-[1.2] tracking-wider max-md:text-28"
            >
              {{ sampleObj.name }}
            </h1>
            <p
              class="text-16 text-theme-neutral-80 font-medium leading-[1.5] tracking-wide max-md:text-14"
            >
              {{ sampleObj.description }}
            </p>
          </div>
          <!-- basic info -->
          <div class="flex flex-col gap-6">
            <div class="flex items-center gap-3">
              <div class="h-6 w-1 rounded-sm bg-theme-primary-100"></div>
              <h5 class="font-bold text-24 leading-[1.2] tracking-wider">
                房型基本資訊
              </h5>
            </div>

            <div class="flex gap-4">
              <div
                class="w-24 p-4 bg-theme-neutral-0 rounded-md aspect-square flex flex-col justify-center gap-2"
              >
                <svg
                  width="24"
                  height="25"
                  viewBox="0 0 24 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2 7.25C2 6.52065 2.28973 5.82118 2.80546 5.30546C3.32118 4.78973 4.02065 4.5 4.75 4.5H19.25C19.9793 4.5 20.6788 4.78973 21.1945 5.30546C21.7103 5.82118 22 6.52065 22 7.25V17.75C22 18.1111 21.9289 18.4687 21.7907 18.8024C21.6525 19.136 21.4499 19.4392 21.1945 19.6945C20.9392 19.9499 20.636 20.1525 20.3024 20.2907C19.9687 20.4289 19.6111 20.5 19.25 20.5H4.75C4.38886 20.5 4.03127 20.4289 3.69762 20.2907C3.36398 20.1525 3.06082 19.9499 2.80546 19.6945C2.5501 19.4392 2.34753 19.136 2.20933 18.8024C2.07113 18.4687 2 18.1111 2 17.75V7.25ZM16.78 7.72C16.6395 7.57931 16.4488 7.50017 16.25 7.5H13.75C13.5511 7.5 13.3603 7.57902 13.2197 7.71967C13.079 7.86032 13 8.05109 13 8.25C13 8.44891 13.079 8.63968 13.2197 8.78033C13.3603 8.92098 13.5511 9 13.75 9H14.44L12.72 10.719C12.6463 10.7877 12.5872 10.8705 12.5462 10.9625C12.5052 11.0545 12.4832 11.1538 12.4814 11.2545C12.4796 11.3552 12.4982 11.4552 12.5359 11.5486C12.5736 11.642 12.6297 11.7268 12.701 11.798C12.7722 11.8693 12.857 11.9254 12.9504 11.9631C13.0438 12.0008 13.1438 12.0194 13.2445 12.0176C13.3452 12.0158 13.4445 11.9938 13.5365 11.9528C13.6285 11.9118 13.7113 11.8527 13.78 11.779L15.5 10.06V10.75C15.5 10.9489 15.579 11.1397 15.7197 11.2803C15.8603 11.421 16.0511 11.5 16.25 11.5C16.4489 11.5 16.6397 11.421 16.7803 11.2803C16.921 11.1397 17 10.9489 17 10.75V8.25C16.9998 8.05115 16.9207 7.86052 16.78 7.72ZM7.75 17.5H10.251C10.4499 17.5 10.6407 17.421 10.7813 17.2803C10.922 17.1397 11.001 16.9489 11.001 16.75C11.001 16.5511 10.922 16.3603 10.7813 16.2197C10.6407 16.079 10.4499 16 10.251 16H9.561L11.281 14.28C11.4176 14.1385 11.4931 13.949 11.4913 13.7523C11.4895 13.5557 11.4105 13.3676 11.2714 13.2286C11.1322 13.0896 10.9441 13.0109 10.7475 13.0092C10.5508 13.0076 10.3614 13.0833 10.22 13.22L8.5 14.938V14.248C8.5 14.0491 8.42098 13.8583 8.28033 13.7177C8.13968 13.577 7.94891 13.498 7.75 13.498C7.55109 13.498 7.36032 13.577 7.21967 13.7177C7.07902 13.8583 7 14.0491 7 14.248V16.748C7 16.9469 7.07902 17.1377 7.21967 17.2783C7.36032 17.419 7.55109 17.498 7.75 17.498V17.5Z"
                    fill="#BF9D7D"
                  />
                </svg>
                <h3
                  class="text-16 font-bold text-theme-neutral-80 max-md:text-14"
                >
                  {{ sampleObj.areaInfo }}
                </h3>
              </div>
              <div
                class="w-24 p-4 bg-theme-neutral-0 rounded-md aspect-square flex flex-col justify-center gap-2"
              >
                <svg
                  width="24"
                  height="25"
                  viewBox="0 0 24 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_19302_4095)">
                    <path
                      d="M20 10.5V7.5C20 6.4 19.1 5.5 18 5.5H6C4.9 5.5 4 6.4 4 7.5V10.5C2.9 10.5 2 11.4 2 12.5V17.5H3.33L4 19.5H5L5.67 17.5H18.34L19 19.5H20L20.67 17.5H22V12.5C22 11.4 21.1 10.5 20 10.5ZM11 10.5H6V7.5H11V10.5ZM18 10.5H13V7.5H18V10.5Z"
                      fill="#BF9D7D"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_19302_4095">
                      <rect
                        width="24"
                        height="24"
                        fill="white"
                        transform="translate(0 0.5)"
                      />
                    </clipPath>
                  </defs>
                </svg>
                <h3
                  class="text-16 font-bold text-theme-neutral-80 max-md:text-14"
                >
                  {{ sampleObj.bedInfo }}
                </h3>
              </div>
              <div
                class="w-24 p-4 bg-theme-neutral-0 rounded-md aspect-square flex flex-col justify-center gap-2"
              >
                <svg
                  width="24"
                  height="25"
                  viewBox="0 0 24 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_19302_4105)">
                    <path
                      d="M12 12.5C14.21 12.5 16 10.71 16 8.5C16 6.29 14.21 4.5 12 4.5C9.79 4.5 8 6.29 8 8.5C8 10.71 9.79 12.5 12 12.5ZM12 14.5C9.33 14.5 4 15.84 4 18.5V20.5H20V18.5C20 15.84 14.67 14.5 12 14.5Z"
                      fill="#BF9D7D"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_19302_4105">
                      <rect
                        width="24"
                        height="24"
                        fill="white"
                        transform="translate(0 0.5)"
                      />
                    </clipPath>
                  </defs>
                </svg>
                <h3
                  class="text-16 font-bold text-theme-neutral-80 max-md:text-14"
                >
                  {{ sampleObj.maxPeople }} 人
                </h3>
              </div>
            </div>
          </div>
          <!-- room structure -->
          <div class="flex flex-col gap-6">
            <div class="flex items-center gap-3">
              <div class="h-6 w-1 rounded-sm bg-theme-primary-100"></div>
              <h5 class="font-bold text-24 leading-[1.2] tracking-wider">
                房間格局
              </h5>
            </div>

            <div class="flex gap-10 w-full bg-theme-neutral-0 rounded-md p-6">
              <h6 class="flex justify-center gap-2 items-center text-base leading-[1.5] tracking-wide font-bold" v-for="(item, index) in sampleObj.layoutInfo" :key="index">
                <svg class=" text-theme-primary-100 w-6 h-6"
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
          <!-- room equiment -->
          <div class="flex flex-col gap-6">
            <div class="flex items-center gap-3">
              <div class="h-6 w-1 rounded-sm bg-theme-primary-100"></div>
              <h5 class="font-bold text-24 leading-[1.2] tracking-wider">
                房間設備
              </h5>
            </div>

            <div class="grid gap-x-10 gap-y-2 grid-cols-5 w-full bg-theme-neutral-0 rounded-md p-6">
              <h6 class="flex gap-2 items-center text-base leading-[1.5] tracking-wide font-bold" v-for="(item, index) in sampleObj.facilityInfo" :key="index">
                <svg class=" text-theme-primary-100 w-6 h-6"
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
          <!-- room supply -->
          <div class="flex flex-col gap-6">
            <div class="flex items-center gap-3">
              <div class="h-6 w-1 rounded-sm bg-theme-primary-100"></div>
              <h5 class="font-bold text-24 leading-[1.2] tracking-wider">
                備品提供
              </h5>
            </div>

            <div class="grid gap-x-10 gap-y-2 grid-cols-5 w-full bg-theme-neutral-0 rounded-md p-6">
              <h6 class="flex gap-2 items-center text-base leading-[1.5] tracking-wide font-bold" v-for="(item, index) in sampleObj.amenityInfo" :key="index">
                <svg class=" text-theme-primary-100 w-6 h-6"
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
          <!-- rule -->
          <div class="flex flex-col gap-6">
            <div class="flex items-center gap-3 w-full">
              <div class="h-6 w-1 rounded-sm bg-theme-primary-100"></div>
              <h5 class="font-bold text-24 leading-[1.2] tracking-wider">
                訂房須知
              </h5>
            </div>
            <ol class="list-decimal list-inside">
                <li>入住時間為下午3點，退房時間為上午12點。</li>
                <li>如需延遲退房，請提前與櫃檯人員聯繫，視當日房況可能會產生額外費用。
                </li>
                <li>請勿在房間內抽煙，若有抽煙需求，可以使用設在酒店各樓層的專用吸煙區。
                </li>
                <li>若發現房間內的設施有損壞或遺失，將會按照價值收取賠償金。</li>
                <li>請愛惜我們的房間與公共空間，並保持整潔。</li>
                <li>如需額外的毛巾、盥洗用品或其他物品，請聯繫櫃檯。</li>
                <li>我們提供免費的Wi-Fi，密碼可以在櫃檯或是房間內的資訊卡上找到。
                </li>
                <li>請勿帶走酒店房內的物品，如有需要購買，請與我們的櫃檯人員聯繫。
                </li>
                <li>我們提供24小時櫃檯服務，若有任何需求或疑問，歡迎隨時詢問。
                </li>
                <li>為了確保所有客人的安全，請勿在走廊或公共區域大聲喧嘩，並遵守酒店的其他規定。
                </li>
            </ol class="list-decimal">
          </div>
        </div>
        <!-- reservation -->
        <div></div>
      </div>
    </div>
    <!-- footer -->
    <div class="w-full bg-theme-neutral-bg flex justify-center px-20">
      <Footer></Footer>
    </div>
  </div>
</template>
