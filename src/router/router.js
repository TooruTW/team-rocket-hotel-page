import { createRouter, createWebHistory } from "vue-router";
import MainPage from "../components/main-page/MainPage.vue";
import UserPage from "../components/user-page/UserPage.vue";
import LoginForm from "../components/user-page/LoginForm.vue";
import RegisterForm from "../components/user-page/RegisterForm.vue";
import RoomsPage from "../components/rooms-page/RoomsPage.vue";
import RoomDetail from "../components/rooms-page/RoomDetail/RoomDetail.vue";

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
  { path: "/rooms", name: "RoomsPage", component: RoomsPage },
  { path: "/room-detail", name: "RoomDetail", component: RoomDetail },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
