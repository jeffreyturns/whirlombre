<script lang="ts" setup>
const { notification } = defineProps<{
    notification: NotificationMessage
}>()

const emit = defineEmits<{
    (e: 'close'): void
}>()

onMounted(() => {
    if (notification.duration != -1) {
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
    <div
        :ref="notification.id"
        class="flex w-full flex-col items-center mb-2 sm:items-end">
        <div class="pointer-events-auto w-full max-w-sm overflow-hidden rounded-sm bg-surface-100 shadow-lg ring-1 ring-surface-200">
            <div class="p-4">
                <div class="flex items-start">
                    <NotificationProgress
                        class="h-full"
                        :duration="notification.duration" />
                    <div class="ml-3 w-0 flex-1 pt-0.5">
                        <p class="text-sm font-medium text-surface-900">{{ title }}</p>
                        <p class="mt-1 text-sm text-surface-600">{{ message }}</p>
                    </div>
                    <div class="ml-4 flex flex-shrink-0">
                        <button
                            type="button"
                            @click="close"
                            class="inline-flex rounded-sm p-1 transition-colors text-surface-600 hover:text-surface-900 hover:bg-surface-700/12">
                            <span class="sr-only">Close</span>
                            <BaseIcon
                                :size="18"
                                icon="cancel" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
