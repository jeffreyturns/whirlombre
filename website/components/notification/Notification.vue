<script lang="ts" setup>
const { notification } = defineProps<{
  notification: NotificationMessage
}>()

const emit = defineEmits<{
  (e: 'close'): void
}>()

onMounted(() => {
  if (notification.duration !== -1) {
    setTimeout(() => {
      close()
    }, notification.duration)
  }
})

const title = computed(() => {
  return notification.title && notification.title !== null ? notification.title : 'Title'
})

const message = computed(() => {
  return notification.message && notification.message !== null ? notification.message : 'Message'
})

const close = () => {
  emit('close')
}
</script>

<template>
  <div :ref="notification.id" class="mb-2 w-full flex flex-col items-center sm:items-end">
    <div
      class="rounded-wl-small pointer-events-auto max-w-sm w-full overflow-hidden bg-surface-100 shadow-lg ring-1 ring-surface-200">
      <div class="p-4">
        <div class="flex items-start items-center">
          <NotificationProgress class="h-full" :duration="notification.duration" />
          <div class="ml-3 w-0 flex-1">
            <p class="text-sm font-medium text-surface-900">
              {{ title }}
            </p>
            <p v-if="message != 'Message'" class="mt-1 text-sm text-surface-600">
              {{ message }}
            </p>
            <div v-if="notification.actions" class="pt-2 space-x-1">
              <button
                v-for="it in notification.actions"
                :key="it.title"
                class="btn-text px-1.5 py-1 text-accent-700 focus:bg-accent-700/12 hover:bg-accent-700/12"
                @click="it.action?.()">
                {{ it.title }}
              </button>
            </div>
          </div>
          <div class="ml-4 flex flex-shrink-0">
            <button
              type="button"
              class="rounded-wl-small inline-flex p-1 text-surface-600 transition-colors hover:bg-surface-700/12 hover:text-surface-900"
              @click="close">
              <span class="sr-only">Close</span>
              <BaseIcon :size="18" icon="close" />
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
