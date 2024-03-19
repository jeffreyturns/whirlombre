<script setup lang="ts">
const { isLoading, progress } = useLoadingIndicator()

const loaderWrapperRef = ref()
const loaderHeight = ref('0px')

const loaderStyles = computed(() => ({ maxHeight: loaderHeight.value }))

const changeHeight = () => {
  if (loaderWrapperRef.value) {
    if (isLoading.value) {
      loaderHeight.value = `${loaderWrapperRef.value?.scrollHeight}px`
    } else {
      loaderHeight.value = '0px'
    }
  }
}

watch(isLoading, () => {
  changeHeight()
})

onMounted(() => {
  nextTick(() => changeHeight())
})
</script>

<!-- eslint-disable tailwindcss/no-custom-classname -->
<template>
  <div ref="loaderWrapperRef" class="relative overflow-hidden transition-[max-height] duration-150 ease-quick-snap" :style="loaderStyles">
    <div class="bg-primary-200 dark:bg-primary-700 bottom-0 z-50 h-1.5 w-full">
      <div class="dark:bg-primary-200 bg-primary-600 flex h-full rounded-sm transition-all" :style="{ width: `${progress}%` }">
        <div class="dark:bg-primary-200 bg-primary-600 absolute right-0 size-1.5 rounded-sm" />
      </div>
    </div>
  </div>
</template>
