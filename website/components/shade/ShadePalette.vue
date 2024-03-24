<script lang="ts" setup>
import { generateShades } from '../../../library/src'
import type { ShadeItem } from '~/types/shade'

const paletteStore = usePaletteStore()
const toast = useToast()

const props = defineProps<{ shade: ShadeItem }>()

const colors = computed(() => generateShades(props.shade.hue, props.shade.chroma))

function copyColor (text: string) {
  navigator.clipboard.writeText(text)
    .then(() => {
      toast.add({
        title: 'Color copied to clipboard',
        timeout: 2000
      })
    })
    .catch((error) => {
      toast.add({
        title: 'Error copying text to clipboard',
        description: 'Check console for details',
        timeout: 5000
      })

      console.error('Error copying text to clipboard:', error)
    })
}

</script>

<template>
  <div class="py-6 lg:flex lg:items-center lg:justify-between">
    <div class="flex min-w-0">
      <span>{{ shade.name }}</span>
    </div>
    <div class="mt-3 flex space-x-3 lg:ml-4 lg:mt-0">
      <UButton label="Delete" variant="outline" icon="i-material-symbols-delete-outline" @click="paletteStore.removeShade(props.shade.id)" />
      <UButton label="Edit" icon="i-material-symbols-edit-outline" />
    </div>
  </div>

  <ul role="list" class="mb-4 grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-6 xl:gap-4">
    <li
      v-for="(color, key) in colors"
      :key="color"
      class="p-4 ring-1 ring-gray-200 dark:ring-gray-800">
      <div class="block w-full">
        <div class="h-32 rounded-sm ring-1 ring-gray-200 dark:ring-gray-800" :style="{ backgroundColor: color }" />
      </div>
      <div class="flex items-center justify-center">
        <div class="w-full">
          <p class="pointer-events-none mt-2 block truncate text-sm font-medium text-gray-900 dark:text-gray-100">
            {{ color }}
          </p>
          <p class="pointer-events-none block text-sm font-medium text-gray-600 dark:text-gray-300">
            {{ key }}
          </p>
        </div>
        <UButton variant="ghost" square @click="copyColor(color)">
          <UIcon name="i-material-symbols-content-copy-outline-sharp" class="size-5" />
        </UButton>
      </div>
    </li>
  </ul>
</template>
