<script setup>
import { ref, computed } from "vue";
import cityName from "../asset/CityCountyData.json";
import {
  isEmail,
  isPassword,
  isPhoneNum,
  isBirthday,
  isAddress,
} from "../../validator";
import { postDate, isEmailRegisted } from "../../apiFunction";
import { RouterLink, useRouter } from "vue-router";

const router = useRouter();
const url =
  "https://team-rocket-hotelapi-from-freyja.onrender.com/api/v1/user/signup";
const isStage2 = ref(false);
const isStage1Pass = ref(false);
const isStage2Pass = ref(false);
const today = new Date();
const stageClass = computed(() => {
  if (!isStage2.value) {
    return "border-1  border-theme-neutral-60 text-theme-neutral-60";
  }
  return "border-0 bg-theme-primary-100 text-theme-neutral-0";
});
const user = ref({
  name: null,
  email: null,
  password: null,
  phone: null,
  birthday: null,
  address: {
    zipcode: null,
    detail: null,
  },
  isReaded: false,
});
// stage-1
const userPasswordConfirm = ref(null);
const validatorEmail = ref(null);
const validatorPassword = ref(null);
const validatorPasswordConfirem = ref(null);
const validatorName = ref(null);
const validatorPhone = ref(null);
const validatorBirthday = ref(null);
const validatorAddress = ref(null);
const validatorAggrement = ref(null);
const isRegisted = ref(null);

function stage1Checker() {
  // stage 1
  validatorEmail.value = isEmail(user.value.email)
    ? null
    : "電子郵件格式有誤。";
  validatorPassword.value = isPassword(user.value.password)
    ? null
    : "請輸入至少 8 碼密碼，且需包含至少一個英文字。";
  validatorPasswordConfirem.value =
    user.value.password === userPasswordConfirm.value ? null : "與輸入密碼不符";
  if (
    !validatorEmail.value &&
    !validatorPassword.value &&
    !validatorPasswordConfirem.value &&
    !isRegisted.value
  ) {
    isStage1Pass.value = true;
    console.log("Stage 1 pass");
  }
}
function stage2Checker() {
    console.log("userinfo",user.value)
  // stage 2
  validatorName.value = user.value.name ? null : "Hello Miss./Mr. Unknow.";
  validatorPhone.value = isPhoneNum(user.value.phone)
    ? null
    : "手機號碼格式有誤。";
  validatorBirthday.value = isBirthday(user.value.birthday)
    ? null
    : "這麼小就想訂房間？？？";
  validatorAddress.value = isAddress(user.value.address.detail)
    ? null
    : "你住這？";
  validatorAggrement.value = user.value.isReaded
    ? null
    : "我知道你不會讀 但還是要勾。";
  if (
    !validatorEmail.value &&
    !validatorPassword.value &&
    !validatorPasswordConfirem.value &&
    !validatorName.value &&
    !validatorPhone.value &&
    !validatorBirthday.value &&
    !validatorAddress.value &&
    !validatorAggrement.value
  ) {
    console.log("stage 2 pass");
    isStage2Pass.value = true;
  }
}
function handleRegiserNext(event) {
  event.preventDefault();
  stage1Checker();
  isStage1Pass.value ? (isStage2.value = true) : false;
}

// stage-2
// birthday
function formatorBirthday() {
  user.value.birthday = `${selectedYear.value}/${selectedMonth.value}/${selectedDay.value}`;
}
const years = Array.from({ length: 100 }, (_, i) => today.getFullYear() - i);
const months = Array.from({ length: 12 }, (_, i) => i + 1);
const selectedYear = ref(today.getFullYear());
const selectedMonth = ref(today.getMonth() + 1);
const selectedDay = ref(today.getDate());
const days = computed(() => {
  const lastDay = new Date(
    selectedYear.value,
    selectedMonth.value,
    0
  ).getDate();
  return Array.from({ length: lastDay }, (_, i) => i + 1);
});
// address
const selectedCity = ref("高雄市");
const selectedZone = ref("新興區");
const cityArr = computed(() => {
  return cityName.map((city) => city.CityName);
});
const zoneArr = computed(() => {
  if (!selectedCity.value) return [];
  const zonesInfo = cityName.find(
    (city) => city.CityName === selectedCity.value
  ).AreaList;
  const zoneName = zonesInfo.map((zone) => zone.AreaName);
  return zoneName;
});
const selectedZipCode = computed(() => {
  const zonesInfo = cityName.find(
    (city) => city.CityName === selectedCity.value
  ).AreaList;
  const zipCode = zonesInfo.find(
    (zone) => zone.AreaName === selectedZone.value
  ).ZipCode;
  return zipCode;
});
function updateZipCode() {
  user.value.address.zipcode = Number(selectedZipCode.value);
}
async function handleSubmit(event) {
  event.preventDefault();
  updateZipCode();
  formatorBirthday();
  stage2Checker();
  if (isStage1Pass.value && isStage2Pass.value) {
    console.log("Register Compeleted sending data to server");
    delete user.value.isReaded;
    const data = await postDate(url, null, user.value);
    if (data.status) {
      router.push("/user/login");
    }
    return;
  }
  console.log("Validate fail", user.value);
}
async function checkEmailIsRegisted(useremail) {
  const email = { email: `${useremail}` };
  const data = await isEmailRegisted(email);
  console.log(data.result.isEmailExists);
  if (data.result.isEmailExists) {
    isRegisted.value = "Email 已被註冊";
  } else {
    isRegisted.value = null;
  }
}
</script>
<template>
  <form
    class="z-10 min-w-416/960 max-2xl:w-full p-5 flex flex-col gap-10"
    action=""
  >
    <div>
      <p
        class="text-theme-primary-100 font-bold text-base max-md:text-14 leading-[1.5] tracking-wide"
      >
        享樂酒店，誠摯歡迎
      </p>
      <h1 class="font-bold text-48 max-md:text-32 leading-[1.2] tracking-wider">
        立即註冊
      </h1>
      <!-- register stage -->
      <div class="flex items-center pt-8">
        <div class="w-fit text-nowrap flex flex-col items-center gap-1">
          <div
            class="rounded-full w-8 h-8 flex justify-center items-center bg-theme-primary-100"
          >
            1
          </div>
          <h5>輸入信箱及密碼</h5>
        </div>
        <div class="w-full px-2 h-0.5 bg-theme-neutral-60 rounded-md"></div>
        <div class="w-fit text-nowrap flex flex-col items-center gap-1">
          <div
            class="rounded-full w-8 h-8 flex justify-center items-center"
            :class="stageClass"
          >
            2
          </div>
          <h5>填寫基本資料</h5>
        </div>
      </div>
    </div>
    <!-- stage 1 -->
    <div v-if="!isStage1Pass" class="flex flex-col gap-2">
      <label
        class="font-bold text-base max-md:text-14 leading-[1.5] tracking-wide w-full flex flex-col gap-2"
        for="email"
      >
        <p class="flex gap-2 items-center">
          電子信箱
          <span class="text-14 text-theme-alert-100">
            {{ validatorEmail }}
          </span>
        </p>
        <p class="text-14 text-theme-alert-100">{{ isRegisted }}</p>
        <input
          @change="checkEmailIsRegisted(user.email)"
          v-model="user.email"
          id="email"
          class="w-full rounded-md p-4 bg-theme-neutral-40 text-theme-neutral-60 font-medium"
          type="text"
          placeholder="hello@exsample.com"
        />
      </label>
      <label
        class="font-bold text-base max-md:text-14 leading-[1.5] tracking-wide w-full flex flex-col gap-2"
        for=""
      >
        <p class="flex gap-2 items-center">
          密碼
          <span class="text-14 text-theme-alert-100">
            {{ validatorPassword }}
          </span>
        </p>
        <input
          v-model="user.password"
          class="w-full rounded-md p-4 bg-theme-neutral-40 text-theme-neutral-60 font-medium"
          type="text"
          placeholder="請輸入密碼"
        />
      </label>
      <label
        class="font-bold text-base max-md:text-14 leading-[1.5] tracking-wide w-full flex flex-col gap-2"
        for=""
      >
        <p class="flex gap-2 items-center">
          確認密碼
          <span class="text-14 text-theme-alert-100">
            {{ validatorPasswordConfirem }}
          </span>
        </p>
        <input
          v-model="userPasswordConfirm"
          class="w-full rounded-md p-4 bg-theme-neutral-40 text-theme-neutral-60 font-medium"
          type="text"
          placeholder="請再輸入一次密碼"
        />
      </label>
      <button
        @click="handleRegiserNext"
        class="w-full mt-10 rounded-md p-4 bg-theme-neutral-40 text-theme-neutral-60 hover:bg-theme-primary-100 hover:text-theme-neutral-0"
      >
        下一步
      </button>
    </div>
    <!-- stage 2 -->
    <div v-if="isStage1Pass" class="flex flex-col gap-2">
      <label
        class="font-bold text-base max-md:text-14 leading-[1.5] tracking-wide w-full flex flex-col gap-2"
        for="fullName"
      >
        <p class="flex items-center gap-2">
          姓名
          <span class="text-14 text-theme-alert-100">{{ validatorName }}</span>
        </p>
        <input
          v-model="user.name"
          id="fullName"
          class="w-full rounded-md p-4 bg-theme-neutral-40 text-theme-neutral-60 font-medium"
          type="text"
          placeholder="請輸入姓名"
        />
      </label>
      <label
        class="font-bold text-base max-md:text-14 leading-[1.5] tracking-wide w-full flex flex-col gap-2"
        for="phoneNum"
      >
        <p class="flex items-center gap-2">
          手機號碼
          <span class="text-14 text-theme-alert-100">{{ validatorPhone }}</span>
        </p>
        <input
          v-model="user.phone"
          id="phoneNum"
          class="w-full rounded-md p-4 bg-theme-neutral-40 text-theme-neutral-60 font-medium"
          type="text"
          placeholder="請輸入手機號碼"
        />
      </label>
      <label
        class="font-bold text-base max-md:text-14 leading-[1.5] tracking-wide"
        for="year"
      >
        <p class="flex items-center gap-2">
          生日
          <span class="text-14 text-theme-alert-100">{{
            validatorBirthday
          }}</span>
        </p>
        <div
          class="flex font-medium justify-between gap-2 text-theme-neutral-80"
        >
          <!-- year -->
          <div
            class="w-full flex items-center relative bg-theme-neutral-0 rounded-md"
          >
            <select
              @change="formatorBirthday"
              class="appearance-none p-4 w-full"
              name="year"
              id="year"
              v-model="selectedYear"
            >
              <option v-for="year in years" :key="year" :value="year">
                {{ year }}
              </option>
            </select>
            <svg
              class="pointer-events-none absolute right-4"
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="currentColor"
            >
              <path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z" />
            </svg>
          </div>
          <!-- month -->
          <div
            class="w-full flex items-center relative bg-theme-neutral-0 rounded-md"
          >
            <select
              @change="formatorBirthday"
              class="appearance-none p-4 w-full"
              name="month"
              id="month"
              v-model="selectedMonth"
            >
              <option v-for="month in months" :key="month" :value="month">
                {{ month }}
              </option>
            </select>
            <svg
              class="pointer-events-none absolute right-4"
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="currentColor"
            >
              <path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z" />
            </svg>
          </div>
          <!-- day -->
          <div
            class="w-full flex items-center relative bg-theme-neutral-0 rounded-md"
          >
            <select
              @change="formatorBirthday"
              class="appearance-none p-4 w-full"
              name="day"
              id="day"
              v-model="selectedDay"
            >
              <option v-for="day in days" :key="day" :value="day">
                {{ day }}
              </option>
            </select>
            <svg
              class="pointer-events-none absolute right-4"
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="currentColor"
            >
              <path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z" />
            </svg>
          </div>
        </div>
      </label>
      <label
        class="font-bold text-base max-md:text-14 leading-[1.5] tracking-wide w-full flex flex-col gap-2"
        for=""
      >
        <p class="flex items-center gap-2">
          地址
          <span class="text-14 text-theme-alert-100">{{
            validatorAddress
          }}</span>
        </p>
        <div class="flex gap-2 text-theme-neutral-80">
          <div
            class="w-full flex items-center relative bg-theme-neutral-0 rounded-md"
          >
            <select
              class="appearance-none p-4 w-full"
              name="city"
              id="city"
              v-model="selectedCity"
            >
              <option v-for="city in cityArr" :key="city" :value="city">
                {{ city }}
              </option>
            </select>
            <svg
              class="pointer-events-none absolute right-4"
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="currentColor"
            >
              <path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z" />
            </svg>
          </div>
          <div
            class="w-full flex items-center relative bg-theme-neutral-0 rounded-md"
          >
            <select
              class="appearance-none p-4 w-full"
              name="zone"
              id="zone"
              v-model="selectedZone"
            >
              <option v-for="zone in zoneArr" :key="zone" :value="zone">
                {{ zone }}
              </option>
            </select>
            <svg
              class="pointer-events-none absolute right-4"
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="currentColor"
            >
              <path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z" />
            </svg>
          </div>
        </div>
        <input
          v-model="user.address.detail"
          class="w-full rounded-md p-4 bg-theme-neutral-40 text-theme-neutral-60 font-medium"
          type="text"
          placeholder="請輸入詳細地址"
        />
      </label>
      <label for="reade" class="flex gap-2">
        <input v-model="user.isReaded" id="readed" type="checkbox" />
        <p class="flex items-center gap-2">
          我已閱讀並同意本網站個資使用規範
          <span class="text-14 text-theme-alert-100">{{
            validatorAggrement
          }}</span>
        </p>
      </label>
      <button
        @click="handleSubmit"
        class="w-full mt-10 rounded-md p-4 bg-theme-neutral-40 text-theme-neutral-60 hover:bg-theme-primary-100 hover:text-theme-neutral-0"
      >
        完成註冊
      </button>
    </div>
    <h4
      class="font-medium text-base max-md:text-14 leading-[1.5] tracking-wide"
    >
      已經有會員了嗎？
      <RouterLink class="text-theme-primary-100 underline" to="/user/login"
        >立即登入</RouterLink
      >
    </h4>
  </form>
</template>
