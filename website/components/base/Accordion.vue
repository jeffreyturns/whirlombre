<script setup lang="ts">
const open = ref(false)

const contentRef = ref<HTMLElement | null>(null)
const contentHeight = ref('0px')

const contentStyles = computed(() => ({
    maxHeight: contentHeight.value,
    overflow: 'hidden',
    transition: 'max-height 150ms cubic-bezier(.87,0,.13,1)'
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
    <div>
        <dt
            @click="toggle()"
            class="cursor-pointer">
            <div class="flex py-5 px-3 w-full items-start justify-between text-left text-surface-900">
                <slot
                    :isExpanded="open"
                    name="header" />
            </div>
        </dt>
        <dd
            :style="contentStyles"
            ref="contentRef">
            <slot name="content" />
        </dd>
    </div>
</template>
