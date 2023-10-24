<script setup lang="ts">
const scrollContainer = ref<HTMLElement | null>(null)
const scrollContent = ref<HTMLElement | null>(null)
const scrollBar = ref<HTMLElement | null>(null)

const isDragging = ref(false)
const lastY = ref(0)

onMounted(() => {
  updateScrollbarHeight()
  scrollContent.value?.addEventListener('scroll', onScroll)
  document.addEventListener('mousemove', drag)
  document.addEventListener('mouseup', stopDrag)
})

onBeforeUnmount(() => {
  scrollContent.value?.removeEventListener('scroll', onScroll)
  document.removeEventListener('mousemove', drag)
  document.removeEventListener('mouseup', stopDrag)
})

function updateScrollbarHeight () {
  const contentHeight = scrollContent.value?.scrollHeight || 0
  const containerHeight = scrollContainer.value?.clientHeight || 0
  const scrollbarHeight = (containerHeight / contentHeight) * containerHeight
  if (scrollBar.value) { scrollBar.value.style.height = `${scrollbarHeight}px` }
}

function onScroll () {
  const contentHeight = scrollContent.value?.scrollHeight || 0
  const containerHeight = scrollContainer.value?.clientHeight || 0
  const scrollPos = scrollContent.value?.scrollTop || 0
  const scrollbarHeight = scrollBar.value?.clientHeight || 0
  const maxScroll = contentHeight - containerHeight

  if (scrollBar.value) { scrollBar.value.style.transform = `translateY(${(scrollPos / maxScroll) * (containerHeight - scrollbarHeight)}px)` }
}

function startDrag (e: MouseEvent) {
  isDragging.value = true
  lastY.value = e.clientY
}

function drag (e: MouseEvent) {
  if (!isDragging.value) { return }

  const deltaY = e.clientY - lastY.value
  lastY.value = e.clientY

  const contentHeight = scrollContent.value?.scrollHeight || 0
  const containerHeight = scrollContainer.value?.clientHeight || 0
  const scrollbarHeight = scrollBar.value?.clientHeight || 0
  const maxScroll = contentHeight - containerHeight

  const deltaScroll = (deltaY / (containerHeight - scrollbarHeight)) * maxScroll
  if (scrollContent.value) { scrollContent.value.scrollTop += deltaScroll }
}

function stopDrag () {
  isDragging.value = false
}
</script>

<template>
  <div ref="scrollContainer" class="custom-scroll-container">
    <div ref="scrollContent" class="custom-scroll-content">
      <slot />
    </div>
    <div ref="scrollBar" class="custom-scroll-bar" @mousedown="startDrag" />
  </div>
</template>

<style>
.custom-scroll-container {
  position: relative;
  overflow: hidden;
  height: 100%;
}

.custom-scroll-content {
  overflow-y: scroll;
  width: 100%;  /* Adjusted to 100% to let content take full width */
  height: 100%;
  padding-right: 15px; /* Make space for scrollbar */
  box-sizing: content-box;
  -webkit-overflow-scrolling: touch; /* Smooth scrolling on iOS */
}

/* Hide the default scrollbar for browsers that support it */
.custom-scroll-content::-webkit-scrollbar {
  display: none;
}
.custom-scroll-content {
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* IE and Edge */
}

.custom-scroll-bar {
  top: 0;
  right: 0;
  margin-right: 2px;
  width: 10px;
  @apply absolute bg-surface-300 cursor-pointer transition-wl-colors transfor translate-y-0 rounded-wl-small opacity-70 border-surface-10 border-solid;
}

.custom-scroll-bar:hover {
  @apply bg-surface-500 opacity-100;
}
</style>
