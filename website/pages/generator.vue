<script setup lang="ts">
import { generateShades } from '../../library/src'

import { ShadeItem } from '~/types/shade'

const palette = usePalette()

const showCreateShade = ref(false)
const showEditShade = ref(false)
const showExportTheme = ref(false)

const editItemId = ref<string>('')

const openItemEdit = (itemId: string) => {
  editItemId.value = itemId
  showEditShade.value = true
}

const removeItem = (targetId: string) => {
  palette.value = palette.value.filter(item => item.id !== targetId)
}

const updateItem = (updatedItem: ShadeItem) => {
  const index = palette.value.findIndex(item => item.id === updatedItem.id)

  if (index !== -1) {
    const updatedPalette = [...palette.value]
    updatedPalette[index] = updatedItem
    palette.value = updatedPalette
  }
}

const copyHEX = (hex: string) => {
  copyToClipboard(hex).then((success) => {
    if (success) {
      createNotification({
        title: 'Copied Successfully',
        message: 'The text has been copied to your clipboard.',
        duration: 1500
      })
    } else {
      createNotification({
        title: 'Copy Failed!',
        message: 'There was an error copying the text. Please try again.',
        duration: 4500
      })
    }
  })
}
</script>

<template>
  <div>
    <ModalCreateShade v-model="showCreateShade" />
    <ModalEditShade
      v-model="showEditShade"
      :item="palette.find(item => item.id === editItemId) || { id: '', name: '', hue: 0, chroma: 0, isDark: false }"
      @save-changes="updateItem" />
    <ModalExportTheme v-model="showExportTheme" />

    <BaseContainer>
      <div class="flex gap-x-3">
        <a
          class="h-10 inline-flex items-center rounded-wl-small bg-accent-600 px-4 py-2.5 text-sm leading-6 text-surface-10 transition-colors focus:bg-accent-700 hover:bg-accent-700 focus:outline-none dark:hover:bg-accent-900"
          @click="showCreateShade = true">
          <BaseIcon
            class="mr-1"
            icon="plus"
            :size="16" />
          Add Shade
        </a>
        <a
          class="h-10 inline-flex items-center rounded-wl-small bg-transparent px-4 py-2.5 text-sm leading-6 text-accent-700 ring-1 ring-surface-950/12 transition-colors focus:bg-accent-700/12 hover:bg-accent-700/12"
          @click="showExportTheme = true">
          <BaseIcon
            class="mr-1"
            icon="export"
            :size="16" />
          Export
        </a>
      </div>
      <div class="py-6">
        <div class="h-[1px] bg-surface-950/12" />
      </div>
      <div class="grid grid-cols-1 gap-x-2 gap-y-8">
        <div
          v-if="palette.length <= 0"
          class="py-64 text-center">
          No Shades!
        </div>
        <div
          v-for="(item, i) in palette"
          :key="i"
          class="2xl:contents">
          <div class="flex items-center gap-x-3">
            <div class="w-full">
              {{ item.name }}
            </div>
            <a
              class="h-10 inline-flex items-center rounded-wl-small bg-accent-600 px-4 py-2.5 text-sm leading-6 text-surface-10 transition-colors focus:bg-accent-700 hover:bg-accent-700 focus:outline-none dark:hover:bg-accent-900"
              @click="openItemEdit(item.id)">
              <BaseIcon
                class="mr-1"
                icon="edit"
                :size="16" />
              Edit
            </a>
            <a
              class="h-10 inline-flex items-center rounded-wl-small bg-transparent px-4 py-2.5 text-sm leading-6 text-red-700 transition-colors focus:bg-red-700/12 hover:bg-red-700/12 dark:text-red-300 hover:dark:bg-red-300/12"
              @click="removeItem(item.id)">
              <BaseIcon
                class="mr-1"
                icon="trash"
                :size="16" />
              Delete
            </a>
          </div>
          <div class="grid grid-cols-1 mt-3 gap-x-2 gap-y-3 sm:grid-cols-4 xl:grid-cols-6 2xl:mt-0 sm:mt-2">
            <div
              v-for="(it, key) in generateShades(item.hue, item.chroma, item.isDark)"
              :key="key"
              class="relative flex">
              <div class="w-full flex cursor-pointer items-center gap-x-3 rounded-wl-small ring-1 ring-surface-950/12 sm:block sm:space-y-1.5">
                <div
                  class="h-full w-10 rounded-wl-small sm:h-25 sm:w-full"
                  :style="{ backgroundColor: it }" />
                <div class="mt-2 flex justify-between px-1 md:py-2">
                  <div>
                    <h3 class="w-6 text-xl font-medium text-surface-900 2xl:w-full">
                      {{ it }}
                    </h3>
                    <p class="text-base font-mono text-surface-500">
                      {{ key }}
                    </p>
                  </div>
                  <p class="text-sm font-medium text-surface-500">
                    <button
                      class="absolute bottom-2.5 right-2.5 rounded-wl-small p-2 hover:bg-surface-950/12 hover:text-surface-950"
                      @click="copyHEX(it)">
                      <BaseIcon
                        icon="copy"
                        :size="18" />
                    </button>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </BaseContainer>
  </div>
</template>
