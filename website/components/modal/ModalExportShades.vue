<script setup lang="ts">
import { generateShades } from '../../../library/src'

const isOpen = ref(false)
const palette = usePaletteStore()

const uiCard = { background: 'bg-transparent dark:bg-transparent', ring: 'dark:ring-gray-700', divide: 'dark:divide-gray-700' }

function close () {
  isOpen.value = false
}
</script>

<!-- eslint-disable @stylistic/max-len -->
<template>
  <UButton variant="outline" @click="isOpen = true">
    <UIcon name="i-material-symbols-download" class="size-4" />
    Export
  </UButton>

  <UModal v-model="isOpen">
    <UCard :ui="uiCard" class="w-full">
      <template #header>
        <div class="flex items-center justify-center">
          <div class="bg-primary-100 dark:bg-primary-600 flex items-center justify-center p-3 text-gray-900 dark:text-gray-100">
            <UIcon class="size-6" name="i-material-symbols-download" />
          </div>
        </div>
        <div class="mt-4 text-center">
          <span class="font-headline">Export Shades</span>
        </div>
      </template>

      <div class="max-h-72 overflow-y-auto text-wrap rounded-sm bg-gray-50 p-2 text-sm dark:bg-gray-900">
        <pre
          v-for="(shade, index) in palette.shades"
          :key="shade.id">{{ `"${shade.name.toLowerCase().replaceAll(' ', '-')}": ` }}{{ generateShades({ hue: shade.hue, chroma: shade.chroma }) }}{{ index !== palette.shades.length - 1 ? ',' : '' }}</pre>
      </div>

      <template #footer>
        <div class="flex justify-end space-x-3">
          <UButton variant="outline" label="Cancel" @click="close" />
        </div>
      </template>
    </UCard>
  </UModal>
</template>
