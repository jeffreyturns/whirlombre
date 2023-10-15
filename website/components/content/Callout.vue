<template>
  <div
    class="group relative my-5 block rounded-wl-small bg-accent-200/25 py-3 pl-4 pr-6 text-sm/6 font-normal text-surface-950 last:mb-0">
    <ContentSlot
      :use="$slots.default"
      unwrap="p" />
  </div>
</template>
