<template>
  <button
    class="mb-6 w-full flex flex-shrink-0 items-center justify-center gap-x-1.5 rounded-wl-small bg-surface-50 px-2.5 py-2.5 text-sm font-medium transition-wl-colors hover:bg-surface-100 focus:outline-none"
    type="button">
    <span
      class="h-5 w-5 flex-shrink-0"
      aria-hidden="true">
      <BaseIcon icon="search" :size="18" />
    </span>
    Search
    <div class="ml-auto inline-flex gap-0.5">
      <kbd
        class="h-5 min-w-[20px] inline-flex items-center justify-center rounded-wl-small bg-surface-100 px-1 text-[11px] font-medium font-sans text-surface-900 ring-1 ring-surface-300 ring-inset">
        Ctrl
      </kbd>
      <kbd
        class="h-5 min-w-[20px] inline-flex items-center justify-center rounded-wl-small bg-surface-100 px-1 text-[11px] font-medium font-sans text-surface-900 ring-1 ring-surface-300 ring-inset">
        K
      </kbd>
    </div>
  </button>
</template>
