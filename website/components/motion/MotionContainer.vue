<script lang="ts" setup>

type MotionTypes = 'fade-in' | 'fade'

type ContainerProps = {
    type?:MotionTypes
    delay?: number
}

const { type = 'fade', delay = 0 } = defineProps<ContainerProps>()

const isVisible = ref(false)
const containerRef = ref(null)

const computedStyle = computed(() => ({ transitionDelay: `${delay}ms` }))

let observer: IntersectionObserver | null = null

onMounted(() => {
  observer = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
      isVisible.value = true
      if (observer && containerRef.value) {
        observer.unobserve(containerRef.value)
      }
    }
  })

  if (containerRef.value) {
    observer.observe(containerRef.value)
  }
})

onBeforeUnmount(() => {
  if (observer && containerRef.value) {
    observer.unobserve(containerRef.value)
  }
})
</script>

<template>
  <div
    ref="containerRef"
    :class="!isVisible ? `${type}-hidden` : `${type}-visible`"
    :style="computedStyle">
    <slot />
  </div>
</template>

<style scoped>
.fade-in-hidden {
  @apply opacity-0 translate-y-6;
}

.fade-in-visible {
  @apply opacity-100 translate-y-0 transition-all duration-500 ease-out-glide
}
.fade-hidden {
    @apply opacity-0;
}

.fade-visible {
  @apply opacity-100 transition-opacity duration-500 ease-out-glide;
}
</style>
