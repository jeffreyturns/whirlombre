<script setup lang="ts">
const props = defineProps<{ title: string }>()

const codeRef = ref<HTMLElement | null>(null)

const icon = ref('content_copy')

const copy = () => {
  const content = Array.from(codeRef.value?.children || [])
    .map(child => child.textContent)
    .join('\n')

  copyToClipboard(`${content}`).then((success) => {
    if (success) {
      icon.value = 'done'
      setTimeout(() => (icon.value = 'content_copy'), 1500)
    } else {
      icon.value = 'error'
    }
  })
}
</script>

<template>
  <div class="relative my-5 [&>div:last-child]:!my-0">
    <div class="flex items-center gap-1 overflow-hidden b-b b-surface-200 rounded-t-wl-small bg-surface-100 p-3.5">
      {{ props.title }}
    </div>
    <div class="relative static my-5">
      <button
        type="button"
        class="absolute right-2.5 top-2.5 inline-flex items-center icon-btn-wl-text"
        tabindex="-1"
        @click="copy()">
        <Transition :duration="150" name="fade" mode="out-in">
          <BaseIcon
            v-if="icon"
            :key="icon"
            class="flex-shrink-0"
            :icon="icon"
            :size="20" />
        </Transition>
      </button>
      <div
        ref="codeRef"
        class="[&>pre]:!my-0 [&>pre]:!rounded-b-wl-small [&>pre]:!rounded-t-none">
        <slot />
      </div>
    </div>
  </div>
</template>
