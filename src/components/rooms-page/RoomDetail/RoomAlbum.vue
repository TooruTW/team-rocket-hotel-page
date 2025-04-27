<script setup>
import { ref } from "vue";

const props = defineProps({
  album: Array,
});
const fristImgClass = ref(`row-span-2`);
</script>
<template>
  <div class="grid grid-cols-[2.5fr_1fr_1fr] grid-rows-2 gap-2">
    <img
      class="h-full"
      v-for="(img, index) in props.album"
      :src="img"
      :alt="'room-img-' + index"
      :class="index === 0 && fristImgClass"
    />
  </div>
</template>
