<script setup>
import { ref, computed } from 'vue'
import cityName from '../asset/CityCountyData.json'

console.log(cityName)
const cityArr = computed(()=>{
    return cityName.map((city)=> city.CityName)
})

const selectedCity = ref("高雄市")
const selectedZone = ref('新興區')

const zoneArr = computed(()=>{
    if(!selectedCity.value) return []
    const zonesInfo = cityName.find((city)=> city.CityName === selectedCity.value ).AreaList
    const zoneName = zonesInfo.map(zone => zone.AreaName)
    return zoneName 
})


let isStage2 = ref(true)

const stageClass = computed(()=> {
    if(!isStage2.value){
        return "border-1  border-theme-neutral-60 text-theme-neutral-60"
    }
    return "border-0 bg-theme-primary-100 text-theme-neutral-0"
})

const years = Array.from({ length: 100 }, (_, i) => 2025 - i)
const months = Array.from({ length: 12 }, (_, i) => i + 1)

const selectedYear = ref(new Date().getFullYear())
const selectedMonth = ref(new Date().getMonth() + 1)
const selectedDay = ref(new Date().getDate())

const days = computed(() => {
  const lastDay = new Date(selectedYear.value, selectedMonth.value, 0).getDate()
  return Array.from({ length: lastDay }, (_, i) => i + 1)
})


</script>
<template>
    <form class="z-10 min-w-416/960 max-2xl:w-full px-5 flex flex-col gap-10 mb-23" action="">
                    <div>
                        <p class=" text-theme-primary-100 font-bold text-base max-md:text-14 leading-[1.5] tracking-wide">享樂酒店，誠摯歡迎</p>
                        <h1 class="font-bold text-48 max-md:text-32 leading-[1.2] tracking-wider">立即註冊</h1>
                        <!-- register stage -->
                        <div class="flex items-center pt-8">
                            <div class="w-fit text-nowrap flex flex-col items-center gap-1">
                                <div class="rounded-full w-8 h-8 flex justify-center items-center bg-theme-primary-100">1</div>
                                <h5>輸入信箱及密碼</h5>
                            </div>
                            <div class="w-full px-2 h-0.5 bg-theme-neutral-60 rounded-md"></div>
                            <div class="w-fit text-nowrap flex flex-col items-center gap-1">
                                <div class="rounded-full w-8 h-8 flex justify-center items-center" :class="stageClass">2</div>
                                <h5>填寫基本資料</h5>
                            </div>
                        </div>
                    </div>
                    <!-- stage 1 -->
                    <div v-if="!isStage2" class="flex flex-col gap-2">
                        <label class=" font-bold text-base max-md:text-14 leading-[1.5] tracking-wide w-full flex flex-col gap-2" for="">
                            電子信箱
                            <input class="w-full rounded-md p-4 bg-theme-neutral-40 text-theme-neutral-60 font-medium" type="text" placeholder="hello@exsample.com">
                        </label>
                        <label class=" font-bold text-base max-md:text-14 leading-[1.5] tracking-wide w-full flex flex-col gap-2" for="">
                            密碼
                            <input class="w-full rounded-md p-4 bg-theme-neutral-40 text-theme-neutral-60 font-medium" type="text" placeholder="請輸入密碼">
                        </label>
                        
                        <label class=" font-bold text-base max-md:text-14 leading-[1.5] tracking-wide w-full flex flex-col gap-2" for="">
                            確認密碼
                            <input class="w-full rounded-md p-4 bg-theme-neutral-40 text-theme-neutral-60 font-medium" type="text" placeholder="請再輸入一次密碼">
                        </label>
                        <button class="w-full rounded-md p-4 bg-theme-neutral-40 text-theme-neutral-60 hover:bg-theme-primary-100 hover:text-theme-neutral-0">下一步</button>
                    </div>
                    <!-- stage 2 -->
                    <div v-if="isStage2" class="flex flex-col gap-2">
                        <label class=" font-bold text-base max-md:text-14 leading-[1.5] tracking-wide w-full flex flex-col gap-2" for="fullName">
                            姓名
                            <input id="fullName" class="w-full rounded-md p-4 bg-theme-neutral-40 text-theme-neutral-60 font-medium" type="text" placeholder="請輸入姓名">
                        </label>
                        <label class=" font-bold text-base max-md:text-14 leading-[1.5] tracking-wide w-full flex flex-col gap-2" for="phoneNum">
                            手機號碼
                            <input id="phoneNum" class="w-full rounded-md p-4 bg-theme-neutral-40 text-theme-neutral-60 font-medium" type="text" placeholder="請輸入手機號碼">
                        </label>
                        <label class=" font-bold text-base max-md:text-14 leading-[1.5] tracking-wide" for="year">
                            生日
                            <div class="flex font-medium justify-between gap-2 text-theme-neutral-80">
                                <!-- year -->
                                <div class="w-full flex items-center relative bg-theme-neutral-0 rounded-md">
                                    <select class="appearance-none p-4 w-full" name="year" id="year" v-model="selectedYear">
                                        <option v-for="year in years" :key="year" :value="year">{{ year }}年</option>
                                    </select>
                                    <svg class="pointer-events-none absolute right-4" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="currentColor"><path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z"/></svg>
                                </div>
                                <!-- month -->
                                <div class="w-full flex items-center relative bg-theme-neutral-0 rounded-md">
                                    <select class="appearance-none p-4 w-full" name="month" id="month" v-model="selectedMonth">
                                        <option v-for="month in months" :key="month" :value="month">{{ month }}月</option>
                                    </select>
                                    <svg class="pointer-events-none absolute right-4" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="currentColor"><path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z"/></svg>
                                </div>
                                <!-- day -->
                                <div class="w-full flex items-center relative bg-theme-neutral-0 rounded-md">
                                    <select class="appearance-none p-4 w-full" name="day" id="day" v-model="selectedDay">
                                        <option v-for="day in days" :key="day" :value="day">{{ day }}日</option>
                                    </select>
                                    <svg class="pointer-events-none absolute right-4" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="currentColor"><path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z"/></svg>
                                </div>
                            </div>
                        </label>

                        <label class=" font-bold text-base max-md:text-14 leading-[1.5] tracking-wide w-full flex flex-col gap-2" for="">
                            地址
                            <div class="flex gap-2 text-theme-neutral-80">
                                <div class="w-full flex items-center relative bg-theme-neutral-0 rounded-md">
                                    <select class="appearance-none p-4 w-full" name="city" id="city" v-model="selectedCity">
                                        <option v-for="city in cityArr" :key="city" :value="city">{{ city }}</option>
                                    </select>
                                    <svg class="pointer-events-none absolute right-4" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="currentColor"><path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z"/></svg>
                                </div>
                                <div class="w-full flex items-center relative bg-theme-neutral-0 rounded-md">
                                    <select class="appearance-none p-4 w-full" name="zone" id="zone" v-model="selectedZone">
                                        <option v-for="zone in zoneArr" :key="zone" :value="zone">{{ zone }}</option>
                                    </select>
                                    <svg class="pointer-events-none absolute right-4" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="currentColor"><path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z"/></svg>
                                </div>
                            </div>
                            <input class="w-full rounded-md p-4 bg-theme-neutral-40 text-theme-neutral-60 font-medium" type="text" placeholder="請輸入詳細地址">
                        </label>
                        <label for="reade" class="flex gap-2">
                            <input id="readed" type="checkbox">
                            <p>我已閱讀並同意本網站個資使用規範</p>
                        </label>
                        <button class="w-full rounded-md p-4 bg-theme-neutral-40 text-theme-neutral-60 hover:bg-theme-primary-100 hover:text-theme-neutral-0">完成註冊</button>
                    </div>
                    <h4 class="font-medium text-base max-md:text-14 leading-[1.5] tracking-wide">已經有會員了嗎？
                        <a  class="font-bold text-theme-primary-100 underline" href="">立即登入</a>
                    </h4>
    </form>
</template>