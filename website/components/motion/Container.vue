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
    opacity: 0;
    transform: translateY(24px);
}

.fade-in-visible {
    opacity: 1;
    transform: translateY(0);
    transition: opacity 0.5s, transform 0.5s cubic-bezier(.4, 0, .2, 1);
}
.fade-hidden {
    opacity: 0;
}

.fade-visible {
    opacity: 1;
    transition: opacity 0.5s cubic-bezier(.4, 0, .2, 1);
}
</style>
