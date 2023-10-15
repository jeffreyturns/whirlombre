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
      class="cursor-pointer"
      @click="toggle()">
      <div class="w-full flex items-start justify-between px-3 py-5 text-left text-surface-900">
        <slot
          :is-expanded="open"
          name="header" />
      </div>
    </dt>
    <dd
      ref="contentRef"
      :style="contentStyles"
      class="ease-test">
      <slot name="content" />
    </dd>
  </div>
</template>
