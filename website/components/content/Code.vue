<script setup lang="ts">
const props = defineProps<{ title: string }>()

const codeRef = ref<HTMLElement | null>(null)

const icon = ref('copy')

const copy = () => {
    const content = Array.from(codeRef.value?.children || [])
        .map(child => child.textContent)
        .join('\n')

    copyToClipboard(`${content}`).then(success => {
        if (success) {
            icon.value = 'check'
            setTimeout(() => (icon.value = 'copy'), 1500)
        } else {
            icon.value = 'error'
        }
    })
}
</script>

<template>
    <div class="relative [&>div:last-child]:!my-0 my-5">
        <div class="flex items-center gap-1 bg-surface-100 b-b b-surface-200 rounded-t-sm overflow-hidden p-3">
            {{ props.title }}
        </div>
        <div class="relative static my-5">
            <button
                type="button"
                @click="copy()"
                class="icon-btn-text inline-flex items-center absolute top-2.5 right-2.5"
                tabindex="-1">
                <BaseIcon
                    class="flex-shrink-0"
                    :icon="icon"
                    :size="18" />
            </button>
            <div
                ref="codeRef"
                class="[&>pre]:!rounded-t-none [&>pre]:!my-0">
                <slot />
            </div>
        </div>
    </div>
</template>
