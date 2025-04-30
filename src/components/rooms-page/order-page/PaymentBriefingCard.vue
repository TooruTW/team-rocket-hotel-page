<script setup>
const props = defineProps({
    price:Number,
    nights:Number,
    discount:Number,
    imgUrl:String
})
</script>
<template>
  <div
    class="flex flex-col p-10 gap-10 max-lg:gap-6 bg-theme-neutral-0 w-full max-w-120 rounded-20px h-fit sticky top-40 max-lg:max-w-none max-lg:p-6"
  >
    <img
      class="w-full object-cover rounded-md aspect-10/7"
      :src="props.imgUrl"
      alt="房間照片"
    />
    <div class="flex flex-col gap-6">
      <h4 class="font-bold text-28 max-lg:text-20 leading-[1.2] tracking-wider">
        價格詳情
      </h4>
      <ul class="font-medium text-base leading-[1.5] tracking-wide">
        <li class="flex justify-between items-center">
          <span>
            <span>NT$ {{ props.price }}</span> Ｘ
            <span class="text-theme-neutral-80">{{ props.nights }} 晚</span>
          </span>
          <span>NT$ {{ props.price * props.nights }}</span>
        </li>
        <li class="flex justify-between items-center">
          <span>住宿折扣</span><span class="text-theme-primary-100">- NT$ {{ props.discount }}</span>
        </li>
      </ul>
      <hr class="w-full text-theme-neutral-40" />
      <p
        class="font-bold text-base leading-[1.5] tracking-wide flex justify-between items-center"
      >
        <span>總價</span><span>NT$ {{ props.price * props.nights - props.discount }}</span>
      </p>
    </div>
    <button
      class="rounded-md font-bold text-base bg-theme-primary-100 text-theme-neutral-0 py-4"
    >
      確認訂房
    </button>
  </div>
</template>
