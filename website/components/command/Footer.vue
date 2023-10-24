<template>
  <div class="w-full border-t border-surface-200 p-4 sm:inline-flex">
    <div class="inline-flex items-center space-x-1">
      <BaseKbd icon="arrow_upward" />
      <BaseKbd icon="arrow_downward" />
      <span class="pr-2.5 text-sm">
        to navigate
      </span>
    </div>
    <div class="inline-flex items-center space-x-1">
      <BaseKbd icon="keyboard_return" />
      <span class="pr-2.5 text-sm">
        to select
      </span>
    </div>
    <div class="inline-flex items-center space-x-1">
      <BaseKbd text="Esc" />
      <span class="pr-2.5 text-sm">
        to close
      </span>
    </div>
    <div class="inline-flex items-center space-x-1">
      <BaseKbd icon="arrow_back" />
      <span class="pr-2.5 text-sm">
        return to parent
      </span>
    </div>
  </div>
</template>
