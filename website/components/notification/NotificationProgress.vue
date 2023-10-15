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
    class="relative h-8 w-8"
    :class="duration == -1 && 'hidden'">
    <svg
      class="h-full w-full"
      :style="{ strokeDashoffset: strokeDashoffset }"
      viewBox="0 0 100 100">
      <circle
        class="stroke-current text-surface-200"
        stroke-width="10"
        cx="50"
        cy="50"
        r="40"
        fill="transparent" />
      <circle
        class="origin-[50%_50%] stroke-dash-400 stroke-current text-accent-500 -rotate-90"
        stroke-width="10"
        cx="50"
        cy="50"
        r="40"
        fill="transparent" />
    </svg>
  </div>
</template>
