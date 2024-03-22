<script setup lang="ts">
const commandPaletteRef = ref()

const commandPalette = useCommandPallette()
const router = useRouter()

defineShortcuts({
  meta_k: {
    usingInput: true,
    handler: () => {
      commandPalette.value = !commandPalette.value
    }
  }
})

function onSelect (option: any) {
  commandPalette.value = false
  if (option.click) {
    option.click()
  } else if (option.to) {
    router.push(option.to)
  } else if (option.href) {
    window.open(option.href, '_blank')
  }
}

const suggestions = [
  { id: 'linear', label: 'Linear' },
  { id: 'figma', label: 'Figma' },
  { id: 'slack', label: 'Slack' },
  { id: 'youtube', label: 'YouTube' },
  { id: 'github', label: 'GitHub' }
]

const pages = [
  { id: 'docs', label: 'Documentation', to: '/docs' },
  { id: 'generator', label: 'Palette Generator', to: '/generator' },
  { id: 'theme', label: 'Site Color', to: '/theme' },
  { id: 'blog', label: 'Blog', to: '/blog' }
]

const groups = [{
  key: 'suggestions',
  label: 'Suggestions',
  inactive: 'Application',
  commands: suggestions
}, {
  key: 'pages',
  label: 'Pages',
  inactive: 'Page',
  commands: pages
}]

const ui = {
  wrapper: 'flex flex-col flex-1 min-h-0 divide-y divide-gray-200 dark:divide-gray-700 bg-gray-100 dark:bg-gray-800',
  container: 'relative flex-1 overflow-y-auto divide-y divide-gray-200 dark:divide-gray-700 scroll-py-2',
  input: { base: 'w-full h-14 px-4 placeholder-gray-400 dark:placeholder-gray-500 bg-transparent border-0 text-gray-900 dark:text-white focus:ring-0 focus:outline-none' },
  group: {
    label: 'px-2 my-2 text-xs font-semibold text-gray-500 dark:text-gray-400',
    command: {
      base: 'flex justify-between transition-colors select-none cursor-default items-center rounded-md px-2 py-2 gap-2 relative',
      active: 'bg-gray-200 dark:bg-gray-700/50 text-gray-900 dark:text-white',
      container: 'flex items-center gap-3 min-w-0',
      icon: {
        base: 'flex-shrink-0 w-5 h-5',
        active: 'text-gray-900 dark:text-white',
        inactive: 'text-gray-400 dark:text-gray-500'
      },
      avatar: { size: '2xs' }
    }
  }
}

const cardUi = { base: 'border-t border-gray-200 dark:border-gray-700', background: 'bg-gray-100 dark:bg-gray-800', ring: 'ring-0' }
</script>

<template>
  <UModal v-model="commandPalette">
    <UCommandPalette
      ref="commandPaletteRef"
      class="max-h-96"
      :groups="groups"
      icon="i-material-symbols-search"
      :ui="ui"
      :autoselect="false"
      placeholder="Search for apps and commands"
      @update:model-value="onSelect">
      <template #empty-state>
        <div class="flex h-96 flex-col items-center justify-center gap-3 py-6 text-center">
          <span class="text-base text-gray-900 dark:text-gray-100">No Results Found.</span>
          <span class="text-sm text-gray-700 dark:text-gray-300">Oops! It seems there's nothing matching your criteria. Try refining your search or entering a different command.</span>
        </div>
      </template>
    </UCommandPalette>

    <UCard :ui="cardUi">
      <template #footer>
        <div class="inline-flex items-stretch space-x-2 text-sm">
          <span>
            <UKbd>
              <UIcon class="size-3" name="i-material-symbols-arrow-upward" />
            </UKbd>
            <UKbd>
              <UIcon class="size-3" name="i-material-symbols-arrow-downward" />
            </UKbd>
            to navigate
          </span>
          <span>
            <UKbd>
              <UIcon class="size-3" name="i-material-symbols-subdirectory-arrow-left" />
            </UKbd>
            to select
          </span>
          <span>
            <UKbd>
              esc
            </UKbd>
            to close
          </span>
          <span>
            <UKbd>
              <UIcon class="size-3" name="i-material-symbols-arrow-back" />
            </UKbd>
            return to parent
          </span>
        </div>
      </template>
    </UCard>
  </UModal>
</template>
