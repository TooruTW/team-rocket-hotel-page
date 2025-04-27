<script setup>
import { ref,computed,watch } from "vue";

const props = defineProps({
  remindText: String,
  triggerKey: [String, Number],
});

const textContent = ref("");
const isShow = ref(false);
const isShowClass = computed(() => {
  return isShow.value ? "scale-100" : "scale-0";
});

let timeoutId;
watch(
  () => props.triggerKey,
  () => {
    textContent.value = props.remindText;
    isShow.value = true;

    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      isShow.value = false;
    }, 5000);
  }
);

</script>
<template>
  <div 
    class="max-w-1/5 py-2 px-4 w-fit h-fit fixed right-8 bottom-8 border-2 border-theme-primary-100 rounded-2xl shadow-2xl text-sm text-theme-neutral-80 bg-theme-primary-10 transition-all ease-in-out"
    :class="isShowClass"
  >
    <h5 class="">System message :</h5>
    <p class="">{{ textContent }}</p>
  </div>
</template>
