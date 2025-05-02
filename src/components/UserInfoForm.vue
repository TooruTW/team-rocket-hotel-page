<script setup>
import { ref, computed, watch } from "vue";
import cityName from "./asset/CityCountyData.json";

const porps = defineProps({
  name: String,
  phone: String,
  birthday: String,
  address: Object,
});

const oldCity = cityName.find((item) => {
  return item.AreaList.some(
    (item) => item.ZipCode === String(porps.address.zipcode)
  );
});
const oldArea = oldCity.AreaList.find(
  (item) => item.ZipCode === String(porps.address.zipcode)
);

const user = ref({
  name: porps.name,
  phone: porps.phone,
  birthday: porps.birthday,
  address: porps.address,
});

const emit = defineEmits(["updateUserInfo"]);

watch(user.value,()=>{
  emit('updateUserInfo',{
    newUserInfo:user.value
  })
})


// validate
const validatorName = ref(null);
const validatorPhone = ref(null);
const validatorBirthday = ref(null);
const validatorAddress = ref(null);
// birthday
const today = new Date();
const years = Array.from({ length: 100 }, (_, i) => today.getFullYear() - i);
const months = Array.from({ length: 12 }, (_, i) => i + 1);
const selectedYear = ref(new Date(porps.birthday).getFullYear());
const selectedMonth = ref(new Date(porps.birthday).getMonth() + 1);
const selectedDay = ref(new Date(porps.birthday).getDate());
const days = computed(() => {
  const lastDay = new Date(
    selectedYear.value,
    selectedMonth.value,
    0
  ).getDate();
  return Array.from({ length: lastDay }, (_, i) => i + 1);
});

watch([selectedYear,selectedMonth,selectedDay],()=>{
  user.value.birthday = new Date(selectedYear.value,selectedMonth.value - 1,selectedDay.value)
})
// address
const selectedCity = ref(oldCity.CityName);
const selectedZone = ref(oldArea.AreaName);

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
watch(selectedZipCode, () => {
  updateZipCode();
  console.log("update user info", user.value.address);
});

const isAccountEdit = ref(false);
</script>
<template>
  <div class="flex flex-col gap-6">
    <label
      class="font-bold text-base leading-[1.5] tracking-wide w-full flex flex-col gap-2"
      for="fullName"
    >
      <p class="flex items-center gap-2">
        姓名
        <span class="text-14 text-theme-alert-100">{{ validatorName }}</span>
      </p>
      <input
        v-model="user.name"
        id="fullName"
        class="w-full rounded-md p-4 text-theme-neutral-60 font-medium border border-theme-neutral-40"
        type="text"
        placeholder="請輸入姓名"
      />
    </label>
    <label
      class="font-bold text-base leading-[1.5] tracking-wide w-full flex flex-col gap-2"
      for="phoneNum"
    >
      <p class="flex items-center gap-2">
        手機號碼
        <span class="text-14 text-theme-alert-100">{{ validatorPhone }}</span>
      </p>
      <input
        v-model="user.phone"
        id="phoneNum"
        class="w-full rounded-md p-4 text-theme-neutral-60 font-medium border border-theme-neutral-40"
        type="text"
        placeholder="請輸入手機號碼"
      />
    </label>
    <label class="font-bold text-base leading-[1.5] tracking-wide" for="year">
      <p class="flex items-center gap-2">
        生日
        <span class="text-14 text-theme-alert-100">{{
          validatorBirthday
        }}</span>
      </p>
      <div class="flex font-medium justify-between gap-2 text-theme-neutral-80">
        <!-- year -->
        <div class="w-full flex items-center relative">
          <select
            @change="formatorBirthday"
            class="appearance-none p-4 w-full border border-theme-neutral-40 rounded-md"
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
        <div class="w-full flex items-center relative">
          <select
            @change="formatorBirthday"
            class="appearance-none p-4 w-full border border-theme-neutral-40 rounded-md"
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
        <div class="w-full flex items-center relative">
          <select
            @change="formatorBirthday"
            class="appearance-none p-4 w-full border border-theme-neutral-40 rounded-md"
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
      class="font-bold text-base leading-[1.5] tracking-wide w-full flex flex-col gap-4"
      for=""
    >
      <p class="flex items-center gap-2">
        地址
        <span class="text-14 text-theme-alert-100">{{ validatorAddress }}</span>
      </p>
      <div class="flex gap-2 text-theme-neutral-80">
        <div class="w-full flex items-center relative">
          <select
            class="appearance-none p-4 w-full border border-theme-neutral-40 rounded-md"
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
        <div class="w-full flex items-center relative">
          <select
            class="appearance-none p-4 w-full border border-theme-neutral-40 rounded-md"
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
        class="w-full p-4 text-theme-neutral-60 font-medium border border-theme-neutral-40 rounded-md"
        type="text"
        placeholder="請輸入詳細地址"
      />
    </label>
  </div>
</template>
