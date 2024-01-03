<script lang="ts" setup>
import { generateShades, Shades } from '../../../library/src'

type CreateShadeProps = {
    modelValue?: boolean
}

const props = withDefaults(defineProps<CreateShadeProps>(), { modelValue: false })

// eslint-disable-next-line func-call-spacing
const emit = defineEmits<{
    (e: 'update:modelValue', value: boolean): void
}>()

const value = computed({
  get: () => props.modelValue,
  set: newValue => emit('update:modelValue', newValue)
})

const palette = usePalette()

const toKebabCase = (it: string) => it.replace(/([a-z0-9])([A-Z])/g, '$1-$2').replace(/\s+/g, '-').toLowerCase()

const shadesToString = (colorName: string, shades: Shades) => {
  const kebabName = toKebabCase(colorName)
  const entries = Object.entries(shades).map(([key, value]) => `'${key}': '${value}'`)

  return `'${kebabName}': {
    ${entries.join(',\n    ')}
},`
}

const shades = ref('')
const icon = ref('content_copy')

watch(
  () => [palette.value],
  () => {
    shades.value = ''
    palette.value.forEach(it => (shades.value += shadesToString(it.name, generateShades(it.hue, it.chroma, it.isDark, it.harmonize ?? undefined))))
  },
  { deep: true, immediate: true }
)

const copy = () => {
  copyToClipboard(`${shades.value}`).then((success) => {
    if (success) {
      icon.value = 'done'
      setTimeout(() => (icon.value = 'content_copy'), 1500)
    } else {
      icon.value = 'error'
    }
  })
}

// const selected = ref(0)

// const exportStyles = ref(['Tailwind (HEX)', 'Tailwind (OKLCH)', 'Tailwind (HSL)', 'SCSS (HEX)', 'CSS (HEX)', 'CSS (RGB)', 'SVG (Figma)'])

const close = () => {
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
        <div class="fixed inset-0 bg-surface-500 bg-opacity-75 transition-wl-opacity duration-medium" />
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
              class="anim-all-short relative w-full transform overflow-hidden rounded-wl-small bg-surface-50 px-4 pb-4 pt-5 text-left sm:my-8 sm:max-w-xl sm:p-6">
              <div>
                <div class="mx-auto h-12 w-12 flex items-center justify-center rounded-wl-small bg-accent-100 text-accent-950">
                  <BaseIcon
                    icon="download"
                    :size="24" />
                </div>
                <div class="mt-3 text-center sm:mt-5">
                  <HeadlessDialogTitle
                    as="h3"
                    class="text-xl font-headline text-surface-900">
                    Export Theme
                  </HeadlessDialogTitle>
                  <!-- <div class="mt-4 flex flex-wrap text-left text-base">
                    <div
                      v-for="(it, i) in exportStyles"
                      :key="i"
                      :class="selected == i ? 'chip-wl-active' : 'chip-wl-inactive'"
                      @click="selected = i">
                      <BaseIcon
                        v-if="selected == i"
                        icon="done"
                        class="me-1"
                        :size="18" />
                      {{ it }}
                    </div>
                  </div> -->
                  <div class="relative">
                    <div class="relative static my-5">
                      <button
                        type="button"
                        class="absolute right-5 top-2.5 inline-flex items-center bg-surface-50 icon-btn-wl-text"
                        tabindex="-1"
                        @click="copy()">
                        <Transition :duration="150" name="fade" mode="out-in">
                          <BaseIcon
                            v-if="icon"
                            :key="icon"
                            class="flex-shrink-0"
                            :icon="icon"
                            :size="18" />
                        </Transition>
                      </button>
                      <div
                        class="mt-2 max-h-[50vh] overflow-y-auto rounded-wl-small bg-surface-100 p-2 text-left font-mono">
                        <code>
                          <pre>{{ shades }}</pre>
                        </code>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="mt-5 sm:grid sm:grid-flow-row-dense sm:mt-6 sm:gap-3">
                <BaseButton class="inline-flex items-center justify-center" variant="outlined" text="Cancel" @click="close()" />
              </div>
            </HeadlessDialogPanel>
          </HeadlessTransitionChild>
        </div>
      </div>
    </HeadlessDialog>
  </HeadlessTransitionRoot>
</template>
