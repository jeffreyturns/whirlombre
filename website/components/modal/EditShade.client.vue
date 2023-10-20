<script lang="ts" setup>
import { reactive, watch, computed } from 'vue'
import { ShadeItem } from '~/types/shade'

type EditShadeProps = {
    modelValue?: boolean
    item: ShadeItem
}

const props = withDefaults(defineProps<EditShadeProps>(), { modelValue: false })

// eslint-disable-next-line func-call-spacing
const emit = defineEmits<{
    (e: 'update:modelValue', value: boolean): void
    (e: 'save-changes', value: ShadeItem): void
}>()

const value = computed({
  get: () => props.modelValue,
  set: newValue => emit('update:modelValue', newValue)
})

const localData = reactive<ShadeItem>({ ...props.item })

watch(
  () => props.item,
  (newItem) => {
    Object.assign(localData, newItem)
  }
)

const save = () => {
  emit('save-changes', { ...localData })
  value.value = false
}
</script>

<template>
  <HeadlessTransitionRoot
    as="template"
    :show="value">
    <HeadlessDialog
      as="div"
      class="relative z-10"
      @close="value = false">
      <HeadlessTransitionChild
        as="template"
        enter="timing-out-glide-medium"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="timing-out-glide-short"
        leave-from="opacity-100"
        leave-to="opacity-0">
        <div class="fixed inset-0 bg-surface-500 bg-opacity-75 transition-opacity" />
      </HeadlessTransitionChild>

      <div class="fixed inset-0 z-10 overflow-y-auto">
        <div class="min-h-full flex items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <HeadlessTransitionChild
            as="template"
            enter="timing-out-glide-medium"
            enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enter-to="opacity-100 translate-y-0 sm:scale-100"
            leave="timing-out-glide-short"
            leave-from="opacity-100 translate-y-0 sm:scale-100"
            leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95">
            <HeadlessDialogPanel
              class="anim-all-short relative w-full transform overflow-hidden rounded-wl-small bg-surface-50 px-4 pb-4 pt-5 text-left sm:my-8 sm:max-w-lg sm:p-6">
              <div>
                <div class="mx-auto h-12 w-12 flex items-center justify-center rounded-wl-small bg-accent-100 text-accent-950">
                  <BaseIcon
                    icon="edit"
                    :size="24" />
                </div>
                <div class="mt-3 text-center sm:mt-5">
                  <HeadlessDialogTitle
                    as="h3"
                    class="text-xl font-headline text-surface-900">
                    Edit Shade
                  </HeadlessDialogTitle>
                  <div class="mt-2">
                    <div class="mb-2">
                      <label
                        for="name-input"
                        class="mb-2 block text-left text-sm font-medium">
                        Name
                      </label>
                      <input
                        id="name-input"
                        v-model="localData.name"
                        type="text"
                        class="block w-full rounded-wl-small bg-surface-100 p-2.5 text-sm text-surface-900 focus:outline-none">
                    </div>
                    <label
                      for="hue-range"
                      class="mb-2 block text-left text-sm font-medium">
                      Hue: {{ localData.hue }}
                    </label>
                    <input
                      id="hue-range"
                      v-model="localData.hue"
                      type="range"
                      :max="360"
                      :min="0"
                      class="w-full slider-wl-tonal">
                    <label
                      for="chroma-range"
                      class="mb-2 block text-left text-sm font-medium">
                      Chroma: {{ localData.chroma }}
                    </label>
                    <input
                      id="chroma-range"
                      v-model="localData.chroma"
                      type="range"
                      :max="0.5"
                      :min="0"
                      :step="0.001"
                      class="w-full slider-wl-tonal">

                    <label class="flex cursor-pointer select-none items-center justify-center py-6">
                      <label
                        for="is-dark-checkbox"
                        class="block w-full text-left text-sm font-medium">
                        Is Dark: {{ localData.isDark ? 'Yes' : 'No' }}
                      </label>
                      <div class="relative">
                        <input
                          id="is-dark-checkbox"
                          type="checkbox"
                          :checked="localData.isDark"
                          class="sr-only"
                          @change="localData.isDark = !localData.isDark">
                        <div :class="['block h-6 w-14 rounded-wl-small', localData.isDark ? 'bg-accent-300' : 'bg-surface-200']" />
                        <div
                          :class="[
                            'absolute left-1 top-1 flex h-4 w-4 items-center justify-center rounded-wl-small transition duration-150',
                            localData.isDark
                              ? 'translate-x-8 bg-accent-700 hover:bg-accent-800'
                              : 'bg-surface-500 hover:bg-surface-600'
                          ]" />
                      </div>
                    </label>
                  </div>
                </div>
              </div>
              <div class="mt-5 sm:grid sm:grid-flow-row-dense sm:grid-cols-2 sm:mt-6 sm:gap-3">
                <a
                  class="inline-flex items-center justify-center btn-wl-filled"
                  @click="save()">
                  Update
                </a>
                <a
                  class="inline-flex items-center justify-center btn-wl-outlined"
                  @click="value = false">
                  Cancel
                </a>
              </div>
            </HeadlessDialogPanel>
          </HeadlessTransitionChild>
        </div>
      </div>
    </HeadlessDialog>
  </HeadlessTransitionRoot>
</template>
