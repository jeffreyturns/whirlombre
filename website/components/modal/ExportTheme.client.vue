<script lang="ts" setup>
import { ShadeItem } from '~/types/shade'
import { generateShades, Shades } from '../../../library/src'

type CreateShadeProps = {
    modelValue?: boolean
}

const props = withDefaults(defineProps<CreateShadeProps>(), {
    modelValue: false
})

const emit = defineEmits<{
    (e: 'update:modelValue', value: boolean): void
}>()

const value = computed({
    get: () => props.modelValue,
    set: newValue => emit('update:modelValue', newValue)
})

const palette = usePalette()

// prettier-ignore
const toKebabCase = (it: string) => it.replace(/([a-z0-9])([A-Z])/g, '$1-$2').replace(/\s+/g, '-').toLowerCase()

const shadesToString = (colorName: string, shades: Shades) => {
    const kebabName = toKebabCase(colorName)
    let entries = Object.entries(shades).map(([key, value]) => `'${key}': '${value}'`)

    return `'${kebabName}': {
    ${entries.join(',\n    ')}
},`
}

const shades = ref('')

watch(
    () => [palette.value],
    () => {
        shades.value = ''
        palette.value.forEach(it => (shades.value += shadesToString(it.name, generateShades(it.hue, it.chroma, it.isDark))))
    },
    { deep: true, immediate: true }
)

const selected = ref(0)

const exportStyles = ref(['Tailwind CSS (HEX)', 'Tailwind CSS (OKLCH)', 'Tailwind (HSL)', 'SCSS (HEX)', 'CSS (HEX)', 'CSS (RGB)', 'SVG (Figma)'])
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
                enter="ease-out duration-300"
                enter-from="opacity-0"
                enter-to="opacity-100"
                leave="ease-in duration-200"
                leave-from="opacity-100"
                leave-to="opacity-0">
                <div class="fixed inset-0 bg-surface-500 bg-opacity-75 transition-opacity" />
            </HeadlessTransitionChild>

            <div class="fixed inset-0 z-10 overflow-y-auto">
                <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                    <HeadlessTransitionChild
                        as="template"
                        enter="ease-out duration-300"
                        enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                        enter-to="opacity-100 translate-y-0 sm:scale-100"
                        leave="ease-in duration-200"
                        leave-from="opacity-100 translate-y-0 sm:scale-100"
                        leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95">
                        <HeadlessDialogPanel
                            class="relative transform overflow-hidden rounded-sm bg-surface-50 px-4 pb-4 pt-5 text-left transition-all sm:my-8 w-full sm:max-w-xl sm:p-6">
                            <div>
                                <div class="mx-auto flex h-12 w-12 items-center justify-center rounded-sm bg-accent-100 text-accent-950">
                                    <BaseIcon
                                        icon="export"
                                        :size="24" />
                                </div>
                                <div class="mt-3 text-center sm:mt-5">
                                    <HeadlessDialogTitle
                                        as="h3"
                                        class="text-base font-semibold leading-6 text-surface-900">
                                        Export Theme
                                    </HeadlessDialogTitle>
                                    <div class="mt-4 text-left text-base flex flex-wrap">
                                        <div
                                            v-for="(it, i) in exportStyles"
                                            @click="selected = i"
                                            :class="selected == i ? 'chip-active' : 'chip-inactive'">
                                            <BaseIcon
                                                v-if="selected == i"
                                                icon="check"
                                                class="me-1"
                                                :size="18" />
                                            {{ it }}
                                        </div>
                                    </div>
                                    <div class="mt-2 bg-surface-100 text-left font-mono p-2 max-h-[50vh] overflow-y-auto">
                                        <code>
                                            <pre>{{ shades }}</pre>
                                        </code>
                                    </div>
                                </div>
                            </div>
                            <div class="mt-5 sm:mt-6 sm:grid sm:grid-flow-row-dense sm:gap-3">
                                <a
                                    @click="value = false"
                                    class="text-sm h-10 inline-flex justify-center items-center px-4 py-2.5 rounded-sm ring-1 transition-colors ring-surface-950/12 leading-6 bg-transparent hover:bg-accent-700/12 text-accent-700 focus:bg-accent-700/12">
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
