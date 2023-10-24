<script lang="ts" setup>
const colorMode = useColorMode()

const themes = [
  {
    name: 'Auto',
    value: 'system',
    click: () => {
      colorMode.preference = 'system'
    }
  },
  {
    name: 'Light',
    value: 'light',
    click: () => {
      colorMode.preference = 'light'
    }
  },
  {
    name: 'Dark',
    value: 'dark',
    click: () => {
      colorMode.preference = 'dark'
    }
  }
]

const selectedTheme = ref(themes.find(it => it.value === colorMode.preference))
</script>

<template>
  <HeadlessListbox
    v-slot="{ open }"
    v-model="selectedTheme"
    as="div">
    <div class="relative mt-2">
      <HeadlessListboxButton
        class="relative w-48 cursor-default rounded-wl-small bg-surface-50 py-2 pl-3 pr-10 text-left text-surface-900 sm:text-sm sm:leading-6 focus:outline-none focus:ring-none">
        <span class="block truncate text-sm">{{ selectedTheme?.name }}</span>
        <span class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
          <BaseIcon
            class="shrink-0"
            :icon="open ? 'expand_less' : 'expand_more'"
            :size="18" />
        </span>
      </HeadlessListboxButton>

      <HeadlessListboxOptions
        class="absolute z-10 mt-1 max-h-60 w-48 overflow-auto rounded-wl-small bg-surface-100 px-1.5 py-1.5 shadow-lg outline-none sm:text-sm">
        <HeadlessListboxOption
          v-for="it in themes"
          :key="it.name"
          v-slot="{ active, selected }"
          as="template"
          :value="it"
          @click="it.click?.()">
          <li
            :class="[
              active ? 'bg-accent-300 text-accent-950' : 'text-surface-950',
              'relative cursor-default items-center select-none px-2 py-2 transition-colors rounded-wl-small flex'
            ]">
            <span :class="[selected ? 'font-semibold' : 'font-normal', 'w-full truncate text-sm']">{{ it.name }}</span>
            <span
              v-if="selected"
              class="flex flex-none items-center">
              <BaseIcon icon="check" :size="18" />
            </span>
          </li>
        </HeadlessListboxOption>
      </HeadlessListboxOptions>
    </div>
  </HeadlessListbox>
</template>
