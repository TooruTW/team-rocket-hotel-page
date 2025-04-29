<script setup>
import Header from "../../Header.vue";
import Footer from "../../Footer.vue";

const orderSample = {
  userInfo: {
    address: {
      zipcode: 802,
      detail: "文山路23號",
    },
    name: "Chocolate Olan",
    phone: "0912345678",
    email: "example@gmail.com",
  },
  _id: "681036cf9cdbacd52b2326c8",
  roomId: {
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
    updatedAt: "2025-04-17T03:08:33.086Z",
  },
  checkInDate: "2023-06-18T00:00:00.000Z",
  checkOutDate: "2023-06-19T00:00:00.000Z",
  peopleNum: 2,
  orderUserId: "67fe0c83fd9a024ad5c83d9e",
  status: 0,
  createdAt: "2025-04-29T02:17:51.121Z",
  updatedAt: "2025-04-29T02:17:51.121Z",
};
</script>
<template>
  <div class="flex flex-col items-center bg-theme-neutral-bg">
    <!-- header -->
    <div
      class="w-full flex justify-center px-20 fixed top-0 z-100 max-xl:px-3 max-xl:relative"
    >
      <Header></Header>
    </div>

    <!-- content -->
    <div
      class="w-full py-30 mt-30 flex justify-between text-theme-neutral-0 max-w-325"
    >
      <!-- text content -->
      <div class="flex flex-col max-w-186 w-full gap-20 justify-between">
        <div>
          <div class="flex items-center gap-10 mb-10">
            <svg
              width="56"
              height="56"
              viewBox="0 0 56 56"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="56" height="56" rx="28" fill="#52DD7E" />
              <g clip-path="url(#clip0_423_8954)">
                <path
                  d="M22.9974 35L15.9974 28L13.6641 30.3333L22.9974 39.6667L42.9974 19.6667L40.6641 17.3333L22.9974 35Z"
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="clip0_423_8954">
                  <rect
                    width="40"
                    height="40"
                    fill="white"
                    transform="translate(8 8)"
                  />
                </clipPath>
              </defs>
            </svg>
            <h1 class="font-bold text-48 leading-[1.2] tracking-wider">
              <span>恭喜，Jessica！</span> <br />
              <span>您已預訂成功</span>
            </h1>
          </div>
          <p
            class="text-theme-neutral-40 font-medium text-base leading-[1.5] tracking-wide"
          >
            我們已發送訂房資訊及詳細內容至你的電子信箱，入住時需向櫃檯人員出示訂房人證件。
          </p>
        </div>
        <hr class="text-theme-neutral-40" />
        <div>
          <h5 class="font-bold text-24 leading-[1.2] tracking-wider mb-10">
            立即查看您的訂單紀錄
          </h5>
          <button
            class="font-bold text-base leading-[1.5] tracking-wide bg-theme-primary-100 rounded-md py-4 px-15"
          >
            前往我的訂單
          </button>
        </div>
        <hr class="text-theme-neutral-40" />
        <div>
          <h5 class="font-bold text-24 leading-[1.2] tracking-wider mb-10">
            訂房人資訊
          </h5>
          <ul
            class="flex flex-col gap-6 text-base leading-[1.5] tracking-wide font-medium text-theme-neutral-40"
          >
            <li>
              <p>姓名</p>
              <p class="font-bold text-theme-neutral-0">Jessica Ｗang</p>
            </li>
            <li>
              <p>手機號碼</p>
              <p class="font-bold text-theme-neutral-0">+886 912 345 678</p>
            </li>
            <li>
              <p>電子信箱</p>
              <p class="font-bold text-theme-neutral-0">jessica@sample.com</p>
            </li>
          </ul>
        </div>
      </div>
      <!-- card -->
      <div class=" rounded-md bg-theme-neutral-0 text-theme-neutral-80 p-10 max-w-120 w-full flex flex-col gap-10">
        <div>
          <p class=" font-medium text-base leading-1.5 tracking-wide mb-2">預訂參考編號： <span>HH2302183151222</span></p>
          <h5 class=" font-bold text-24 leading-[1.2] tracking-wider text-theme-neutral-100">即將來的行程</h5>
        </div>
        <img class="rounded-md aspect-5/3 w-full" src="/public/fakeImg.webp" alt="房間照片" />
        <div class="font-bold">
          <h6 class="text-20 leading-[1.2] tracking-wider mb-6">
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
            class="grid gap-x-8 gap-y-2 grid-cols-3 max-md:grid-cols-2 w-full rounded-md border-1 border-theme-neutral-40 p-6 text-nowrap"
          >
            <h6
              class="flex gap-2 items-center text-base leading-[1.5] tracking-wide font-bold"
              v-for="(item, index) in orderSample.roomId.facilityInfo"
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
            class="grid gap-x-8 gap-y-2 grid-cols-3 max-md:grid-cols-2 w-full rounded-md border-1 border-theme-neutral-40 p-6 text-nowrap"
          >
            <h6
              class="flex gap-2 items-center text-base leading-[1.5] tracking-wide font-bold"
              v-for="(item, index) in orderSample.roomId.amenityInfo"
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
