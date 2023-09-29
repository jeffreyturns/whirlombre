<script setup lang="ts">
const props = defineProps<{ question: string; answer: string }>()

const open = ref(false)

const contentRef = ref<HTMLElement | null>(null)
const contentHeight = ref('0px')

const contentStyles = computed(() => ({
    maxHeight: contentHeight.value,
    overflow: 'hidden',
    transition: 'max-height 150ms ease-in-out'
}))

const toggle = () => {
    open.value = !open.value
    changeHeight()
}

const changeHeight = () => {
    if (contentRef.value) {
        if (open.value) {
            contentHeight.value = `${contentRef.value.scrollHeight}px`
        } else {
            contentHeight.value = '0px'
        }
    }
}

onMounted(() => {
    nextTick(() => changeHeight())
})
</script>

<template>
    <div class="bg-surface-50 hover:bg-surface-100 transition-colors rounded-sm">
        <dt
            @click="toggle()"
            class="cursor-pointer">
            <div class="flex py-5 px-3 w-full items-start justify-between text-left text-surface-900">
                <span class="text-base font-semibold leading-7">{{ props.question }}</span>
                <span class="ml-6 flex h-7 items-center">
                    <BaseIcon
                        class="shrink-0"
                        :icon="open ? 'navArrowUp' : 'navArrowDown'"
                        :size="24" />
                </span>
            </div>
        </dt>
        <dd
            :style="contentStyles"
            ref="contentRef"
            class="">
            <p class="text-base leading-7 text-surface-600 mb-3 mx-3">{{ props.answer }}</p>
        </dd>
    </div>
</template>
