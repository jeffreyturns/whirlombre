<script setup lang="ts">
const isOpen = ref(false)

const uiCard = { background: 'bg-transparent dark:bg-transparent', ring: 'dark:ring-gray-700', divide: 'dark:divide-gray-700' }
const uiRange = { thumb: { ring: '[&::-webkit-slider-thumb]:ring-gray-100  [&::-webkit-slider-thumb]:ring-4 [&::-webkit-slider-thumb]:dark:ring-gray-800' } }

const shadeOptions = ref({
  name: '',
  hue: 0,
  chroma: 0
})

const canCreate = computed(() => shadeOptions.value.name === '')

function close () {
  isOpen.value = false
}

function create () {
  const palette = usePaletteStore()

  palette.addShade({
    id: generateUUID(),
    name: shadeOptions.value.name,
    hue: shadeOptions.value.hue,
    chroma: shadeOptions.value.chroma
  })
  close()
}

watch(() => isOpen.value, () => {
  shadeOptions.value = {
    name: '',
    hue: 0,
    chroma: 0
  }
})
</script>

<template>
  <UButton label="Add Shade" icon="i-material-symbols-add" @click="isOpen = true" />

  <UModal v-model="isOpen" @close="clear">
    <UCard :ui="uiCard" class="w-full">
      <template #header>
        <div class="flex items-center justify-center">
          <div class="bg-primary-100 dark:bg-primary-600 flex items-center justify-center p-3 text-gray-900 dark:text-gray-100">
            <UIcon class="size-6" name="i-material-symbols-add" />
          </div>
        </div>
        <div class="mt-4 text-center">
          <span class="font-headline">Create Shade</span>
        </div>
      </template>

      <div class="space-y-3">
        <UFormGroup label="Name">
          <UInput v-model="shadeOptions.name" />
        </UFormGroup>
        <UFormGroup :label="`Hue: ${shadeOptions.hue}`">
          <URange v-model="shadeOptions.hue" :ui="uiRange" size="lg" :min="0" :max="360" />
        </UFormGroup>
        <UFormGroup :label="`Chroma: ${shadeOptions.chroma}`">
          <URange
            v-model="shadeOptions.chroma"
            :ui="uiRange"
            :step="0.001"
            size="lg"
            :min="0"
            :max="0.5" />
        </UFormGroup>
      </div>

      <template #footer>
        <div class="flex justify-end space-x-3">
          <UButton :disabled="canCreate" label="Create" @click="create" />
          <UButton variant="outline" label="Cancel" @click="close" />
        </div>
      </template>
    </UCard>
  </UModal>
</template>
