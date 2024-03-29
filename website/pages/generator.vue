<script setup lang="ts">
import { generateShades } from '../../library/src'

import { ShadeItem } from '~/types/shade'

useHead({ title: 'Palette Generator' })

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
  const removedItem = palette.value.find(item => item.id === targetId)
  palette.value = palette.value.filter(item => item.id !== targetId)
  createNotification({
    id: removedItem?.id,
    title: 'Shade has been deleted',
    duration: 3000,
    actions: [
      {
        title: 'Undo',
        action: () => {
          if (removedItem) {
            palette.value.push(removedItem)
            dismissNotification(removedItem.id)
          }
        }
      }
    ]
  })
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
      :item="palette.find(item => item.id === editItemId) || { id: '', name: '', hue: 0, chroma: 0, harmonize: null, isDark: false }"
      @save-changes="updateItem" />
    <ModalExportTheme v-model="showExportTheme" />
    <BaseContainer>
      <div class="sm:flex flex-auto sm:gap-x-3">
        <BaseButton class="mr-3 sm:mr-0" text="Add Shade" icon-left="add" @click="showCreateShade = true" />
        <BaseButton text="Export" variant="outlined" icon-left="download" @click="showExportTheme = true" />
        <div class="sm:flex-1 flex-auto" />
        <BaseButton class="mt-3 sm:mt-0" text="Add Random" icon-right="shuffle" @click="addRandom()" />
      </div>
      <div class="py-6">
        <div class="h-[1px] bg-surface-950/12" />
      </div>
      <div class="grid grid-cols-1 gap-x-2 gap-y-8">
        <div
          v-if="palette.length === 0"
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
            <BaseButton icon-left="edit" text="Edit" @click="openItemEdit(item.id)" />
            <a
              class="h-10 inline-flex items-center rounded-wl-small bg-transparent px-4 py-2.5 text-sm leading-6 text-red-700 transition-colors focus:bg-red-700/12 hover:bg-red-700/12 dark:text-red-300 hover:dark:bg-red-300/12"
              @click="removeItem(item.id)">
              <BaseIcon
                class="mr-1"
                icon="delete"
                :size="16" />
              Delete
            </a>
          </div>
          <div class="grid grid-cols-1 mt-3 gap-x-2 gap-y-3 sm:grid-cols-4 xl:grid-cols-6 2xl:mt-0 sm:mt-2">
            <div
              v-for="(it, key) in generateShades(item.hue, item.chroma, item.isDark, item.harmonize ?? undefined)"
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
                    <BaseButton icon="content_copy" :icon-size="18" class="absolute bottom-2.5 right-2.5" @click="copyHEX(`${it}`)" />
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
