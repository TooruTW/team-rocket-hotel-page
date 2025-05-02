<script setup>
import { inject, onMounted, ref, computed } from "vue";
import Comming from "./Comming.vue";
import History from "./History.vue";
import { getData } from "../../apiFunction";
const token = inject("token");
const orderHistory = ref([
  {
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
  },
  {
    userInfo: {
      address: {
        zipcode: 802,
        detail: "文山路23號",
      },
      name: "Chocolate Olan",
      phone: "0912345678",
      email: "example@gmail.com",
    },
    _id: "68109284948202ae3839d472",
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
    createdAt: "2025-04-29T08:49:08.317Z",
    updatedAt: "2025-04-29T08:49:08.317Z",
  },
  {
    userInfo: {
      address: {
        zipcode: 802,
        detail: "文山路23號",
      },
      name: "Chocolate Olan",
      phone: "0912345678",
      email: "example@gmail.com",
    },
    _id: "6810a0ac45f62a80bfdadaeb",
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
    checkInDate: "2023-07-18T00:00:00.000Z",
    checkOutDate: "2023-07-20T00:00:00.000Z",
    peopleNum: 2,
    orderUserId: "67fe0c83fd9a024ad5c83d9e",
    status: 0,
    createdAt: "2025-04-29T09:49:32.131Z",
    updatedAt: "2025-04-29T09:49:32.131Z",
  },
  {
    userInfo: {
      address: {
        zipcode: 802,
        detail: "文山路23號",
      },
      name: "Chocolate Olan",
      phone: "0912345678",
      email: "example@gmail.com",
    },
    _id: "6810a0c845f62a80bfdadaf0",
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
    checkInDate: "2023-10-18T00:00:00.000Z",
    checkOutDate: "2023-10-20T00:00:00.000Z",
    peopleNum: 2,
    orderUserId: "67fe0c83fd9a024ad5c83d9e",
    status: 0,
    createdAt: "2025-04-29T09:50:00.918Z",
    updatedAt: "2025-04-29T09:50:00.918Z",
  },
]);

onMounted(async () => {
  const url = `https://team-rocket-hotelapi-from-freyja.onrender.com/api/v1/orders/`;
  const data = await getData(url, token)
  orderHistory.value.length = 0
  orderHistory.value.push(...data);
  console.log("order History",orderHistory.value)
  findNearstOrder(orderHistory.value)
});

function findNearstOrder(list){
  let nearst = list[0]
  let smallestDiff = Infinity; 
  let today = new Date().getTime()
  for (let i = 0; i < list.length; i++) {
    let diffDay = new Date(list[i].checkInDate).getTime() - today
    if(diffDay < 0) continue
    if(diffDay < smallestDiff){
      smallestDiff = diffDay
      nearst = list[i]
    }
  }
  console.log("nearst room id",nearst.roomId._id)
  return nearst
}

const comming = computed(() => findNearstOrder(orderHistory.value));

</script>
<template>
  <div>
    <Comming
      :roomObj="comming"
      class="max-w-182 h-fit max-lg:max-w-none w-full rounded-20px bg-theme-neutral-0 p-10"
    ></Comming>
    <History
      :roomArr="orderHistory"
      class="max-w-132 h-fit max-lg:max-w-none w-full rounded-20px bg-theme-neutral-0 p-10"
    ></History>
  </div>
</template>
