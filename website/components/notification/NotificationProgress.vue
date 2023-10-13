<script setup lang="ts">
const { duration } = defineProps<{
    duration: MessageDuration
}>()

const percent = ref(0)

onMounted(() => setInterval(() => percent.value < 100 && percent.value++, duration / 100))

const strokeDashoffset = computed(() => 400 - (400 * percent.value) / 160)
</script>

<template>
    <div
        class="relative w-8 h-8"
        :class="duration == -1 && 'hidden'">
        <svg
            class="w-full h-full"
            :style="{ strokeDashoffset: strokeDashoffset }"
            viewBox="0 0 100 100">
            <circle
                class="text-surface-200 stroke-current"
                stroke-width="10"
                cx="50"
                cy="50"
                r="40"
                fill="transparent" />
            <circle
                class="text-accent-500 -rotate-90 origin-[50%_50%] stroke-dash-400 stroke-current"
                stroke-width="10"
                cx="50"
                cy="50"
                r="40"
                fill="transparent" />
        </svg>
    </div>
</template>
