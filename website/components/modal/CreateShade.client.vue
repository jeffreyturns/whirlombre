<script lang="ts" setup>
import { ShadeItem } from '~/types/shade'

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

const data = ref<ShadeItem>({
    id: generateID(),
    name: '',
    hue: 0,
    chroma: 0,
    isDark: false
})

const clearData = () => {
    data.value = {
        id: '',
        name: '',
        hue: 0,
        chroma: 0,
        isDark: false
    }
}

const createShade = () => {
    palette.value.push(data.value)
    value.value = false
}

const canAddShade = computed(() => data.value.name.length > 0 && !palette.value.some(shade => shade.name === data.value.name))
</script>

<template>
    <HeadlessTransitionRoot
        as="template"
        @after-leave="clearData()"
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
                            class="relative transform overflow-hidden rounded-sm bg-surface-50 px-4 pb-4 pt-5 text-left transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6">
                            <div>
                                <div class="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-accent-100 text-accent-950">
                                    <BaseIcon
                                        icon="plus"
                                        :size="24" />
                                </div>
                                <div class="mt-3 text-center sm:mt-5">
                                    <HeadlessDialogTitle
                                        as="h3"
                                        class="text-base font-semibold leading-6 text-surface-900">
                                        Create Shade
                                    </HeadlessDialogTitle>
                                    <div class="mt-2">
                                        <div class="mb-2">
                                            <label
                                                for="name-input"
                                                class="block mb-2 text-sm text-left font-medium">
                                                Name
                                            </label>
                                            <input
                                                type="text"
                                                v-model="data.name"
                                                id="name-input"
                                                class="bg-surface-100 text-surface-900 text-sm rounded-sm focus:outline-none block w-full p-2.5" />
                                        </div>
                                        <label
                                            for="hue-range"
                                            class="block mb-2 text-sm text-left font-medium">
                                            Hue: {{ data.hue }}
                                        </label>
                                        <input
                                            id="chroma-range"
                                            v-model="data.hue"
                                            type="range"
                                            :max="360"
                                            :min="0"
                                            class="w-full base-slider" />
                                        <label
                                            for="hue-range"
                                            class="block mb-2 text-sm text-left font-medium">
                                            Chroma: {{ data.chroma }}
                                        </label>
                                        <input
                                            id="hue-range"
                                            v-model="data.chroma"
                                            type="range"
                                            :max="0.5"
                                            :min="0"
                                            :step="0.001"
                                            class="w-full base-slider" />

                                        <label class="cursor-pointer flex items-center justify-center select-none py-6">
                                            <label
                                                for="is-dark-checkbox"
                                                class="block w-full text-sm text-left font-medium">
                                                Is Dark: {{ data.isDark ? 'Yes' : 'No' }}
                                            </label>
                                            <div class="relative">
                                                <input
                                                    type="checkbox"
                                                    id="is-dark-checkbox"
                                                    :checked="data.isDark"
                                                    @change="data.isDark = !data.isDark"
                                                    class="sr-only" />
                                                <div :class="['block h-6 w-14 rounded-sm', data.isDark ? 'bg-accent-300' : 'bg-surface-200']" />
                                                <div
                                                    :class="[
                                                        'absolute left-1 top-1 flex h-4 w-4 items-center justify-center rounded-sm transition duration-150',
                                                        data.isDark
                                                            ? 'translate-x-8 bg-accent-700 hover:bg-accent-800'
                                                            : 'bg-surface-500 hover:bg-surface-600'
                                                    ]" />
                                            </div>
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div class="mt-5 sm:mt-6 sm:grid sm:grid-flow-row-dense sm:grid-cols-2 sm:gap-3">
                                <a
                                    @click="canAddShade && createShade()"
                                    :class="[
                                        canAddShade
                                            ? 'bg-accent-600 text-surface-10 hover:bg-accent-700 focus:bg-accent-700 dark:hover:bg-accent-900 cursor-pointer'
                                            : 'bg-surface-950/12 text-surface-950/75 cursor-not-allowed'
                                    ]"
                                    class="text-sm h-10 inline-flex justify-center items-center px-4 py-2.5 rounded-sm leading-6 transition-colors focus:outline-none">
                                    Create
                                </a>
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
