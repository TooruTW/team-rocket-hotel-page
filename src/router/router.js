import { createRouter, createWebHistory } from "vue-router";
import MainPage from "../components/main-page/MainPage.vue";
import UserPage from "../components/user-page/UserPage.vue";
import LoginForm from "../components/user-page/LoginForm.vue";
import RegisterForm from "../components/user-page/RegisterForm.vue";
import RoomsPage from "../components/rooms-page/RoomsPage.vue";
import RoomDetail from "../components/rooms-page/RoomDetail/RoomDetail.vue";
import RoomOrder from "../components/rooms-page/RoomDetail/RoomOrder.vue";
import OrderComplete from "../components/rooms-page/orderComplete/OrderComplete.vue";
import UserInfoAndOrder from "../components/user-page/UserInfoAndOrder.vue";
import MyInfo from "../components/user-page/MyInfo.vue";
import MyOrder from "../components/user-page/MyOrder.vue";

const routes = [
  { path: "/", name: "MainPage", component: MainPage },
  {
    path: "/user",
    name: "UserPage",
    component: UserPage,
    children: [
      { path: "login", component: LoginForm },
      { path: "register", component: RegisterForm },
    ],
  },
  { path: "/usinfo-and-order", name: "usinfo-and-order", component: UserInfoAndOrder,
    children:[
      { path: "myinfo", component: MyInfo },
      { path: "myorder", component: MyOrder },


    ]
   },
  { path: "/rooms", name: "RoomsPage", component: RoomsPage },
  { path: "/room-detail", name: "RoomDetail", component: RoomDetail },
  { path: "/room-order", name: "RoomOrder", component: RoomOrder },
  { path: "/room-order-complete", name: "OrderComplete", component: OrderComplete }

  
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
