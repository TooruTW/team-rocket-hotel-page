<script setup>
import { ref, computed } from "vue";
import cityName from "../../asset/CityCountyData.json";
import { isPhoneNum, isAddress, isEmail } from "../../../validator";

// stage-1
const validatorEmail = ref(null);
const validatorName = ref(null);
const validatorPhone = ref(null);
const validatorAddress = ref(null);

const user = ref({
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

const emit = defineEmits(['userInfoUpdate'])
function passUserData(){
  emit('userInfoUpdate', user.value)
}


function userInfoChecker() {
  console.log("start checking")
  validatorName.value = user.value.name ? null : "Hello Miss./Mr. Unknow.";
  if (user.value.phone) {
    validatorPhone.value = isPhoneNum(user.value.phone)
      ? null
      : "手機號碼格式有誤。";
  }
  if (user.value.address.detail) {
    validatorAddress.value = isAddress(user.value.address.detail)
      ? null
      : "你住這？";
  }
  if (user.value.email) {
    validatorEmail.value = isEmail(user.value.email)
      ? null
      : "請輸入有效的電子信箱";
  }
  if(!validatorAddress.value && !validatorEmail.value && !validatorName.value && !validatorPhone.value ){
    updateZipCode()
    passUserData()
  }
}

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
</script>
<template>
  <form
    class="z-10 min-w-416/960 max-2xl:w-full flex flex-col gap-10"
    action=""
  >
    <div class="flex flex-col gap-2">
      <label
        class="font-bold text-base max-md:text-14 leading-[1.5] tracking-wide w-full flex flex-col gap-2"
        for="fullName"
      >
        <p class="flex items-center gap-2">
          姓名
          <span class="text-14 text-theme-alert-100">{{ validatorName }}</span>
        </p>
        <input
          @change="userInfoChecker"
          v-model="user.name"
          id="fullName"
          class="w-full rounded-md p-4 bg-theme-neutral-0 text-theme-neutral-60 font-medium"
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
          @change="userInfoChecker"
          v-model="user.phone"
          id="phoneNum"
          class="w-full rounded-md p-4 bg-theme-neutral-0 text-theme-neutral-60 font-medium"
          type="text"
          placeholder="請輸入手機號碼"
        />
      </label>
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
        <input
          @change="userInfoChecker"
          v-model="user.email"
          id="email"
          class="w-full rounded-md p-4 bg-theme-neutral-0 text-theme-neutral-60 font-medium"
          type="text"
          placeholder="hello@exsample.com"
        />
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
          @change="userInfoChecker"
          v-model="user.address.detail"
          class="w-full rounded-md p-4 bg-theme-neutral-0 text-theme-neutral-60 font-medium"
          type="text"
          placeholder="請輸入詳細地址"
        />
      </label>
    </div>
  </form>
</template>
