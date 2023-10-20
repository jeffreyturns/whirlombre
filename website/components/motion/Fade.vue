<script lang="ts" setup>
type FadeInProps = {
    delay?: number
}

const props = withDefaults(defineProps<FadeInProps>(), { delay: 0 })

const isVisible = ref(false)
const fadeRef = ref(null)

const computedStyle = computed(() => ({ transitionDelay: `${props.delay}ms` }))

let observer: IntersectionObserver | null = null

onMounted(() => {
  observer = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
      isVisible.value = true
      if (observer && fadeRef.value) {
        observer.unobserve(fadeRef.value)
      }
    }
  })

  if (fadeRef.value) {
    observer.observe(fadeRef.value)
  }
})

onBeforeUnmount(() => {
  if (observer && fadeRef.value) {
    observer.unobserve(fadeRef.value)
  }
})
</script>

<template>
  <div ref="fadeRef" :class="{ 'fade-hidden': !isVisible, 'fade-visible': isVisible }" :style="computedStyle">
    <slot />
  </div>
</template>

<style scoped>
.fade-hidden {
    opacity: 0;
}

.fade-visible {
    opacity: 1;
    transition: opacity 0.5s cubic-bezier(.4, 0, .2, 1);
}
</style>
