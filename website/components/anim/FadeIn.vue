<script setup lang="ts">
type FadeInProps = {
    delay?: number
}

const props = withDefaults(defineProps<FadeInProps>(), {
    delay: 0
})

const isVisible = ref(false)
const fadeInRef = ref(null)

const computedStyle = computed(() => ({
    transitionDelay: `${props.delay}ms`
}))

let observer: IntersectionObserver | null = null

onMounted(() => {
    observer = new IntersectionObserver(entries => {
        if (entries[0].isIntersecting) {
            isVisible.value = true
            if (observer && fadeInRef.value) {
                observer.unobserve(fadeInRef.value)
            }
        }
    })

    if (fadeInRef.value) {
        observer.observe(fadeInRef.value)
    }
})

onBeforeUnmount(() => {
    if (observer && fadeInRef.value) {
        observer.unobserve(fadeInRef.value)
    }
})
</script>

<template>
    <div
        ref="fadeInRef"
        :class="{ 'fade-in-hidden': !isVisible, 'fade-in-visible': isVisible }"
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
    transition: opacity 0.5s, transform 0.5s;
}
</style>
