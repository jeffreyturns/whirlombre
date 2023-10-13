<script lang="ts" setup>
import { reactive, watch, computed } from 'vue'
import { ShadeItem } from '~/types/shade'

type EditShadeProps = {
    modelValue?: boolean
    item: ShadeItem
}

const props = withDefaults(defineProps<EditShadeProps>(), {
    modelValue: false
})

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
    newItem => {
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
                            class="relative transform overflow-hidden rounded-sm bg-surface-50 px-4 pb-4 pt-5 text-left transition-all sm:my-8 w-full sm:max-w-lg sm:p-6">
                            <div>
                                <div class="mx-auto flex h-12 w-12 items-center justify-center rounded-sm bg-accent-100 text-accent-950">
                                    <BaseIcon
                                        icon="edit"
                                        :size="24" />
                                </div>
                                <div class="mt-3 text-center sm:mt-5">
                                    <HeadlessDialogTitle
                                        as="h3"
                                        class="text-base font-semibold leading-6 text-surface-900">
                                        Edit Shade
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
                                                v-model="localData.name"
                                                id="name-input"
                                                class="bg-surface-100 text-surface-900 text-sm rounded-sm focus:outline-none block w-full p-2.5" />
                                        </div>
                                        <label
                                            for="hue-range"
                                            class="block mb-2 text-sm text-left font-medium">
                                            Hue: {{ localData.hue }}
                                        </label>
                                        <input
                                            id="hue-range"
                                            v-model="localData.hue"
                                            type="range"
                                            :max="360"
                                            :min="0"
                                            class="w-full base-slider" />
                                        <label
                                            for="chroma-range"
                                            class="block mb-2 text-sm text-left font-medium">
                                            Chroma: {{ localData.chroma }}
                                        </label>
                                        <input
                                            id="chroma-range"
                                            v-model="localData.chroma"
                                            type="range"
                                            :max="0.5"
                                            :min="0"
                                            :step="0.001"
                                            class="w-full base-slider" />

                                        <label class="cursor-pointer flex items-center justify-center select-none py-6">
                                            <label
                                                for="is-dark-checkbox"
                                                class="block w-full text-sm text-left font-medium">
                                                Is Dark: {{ localData.isDark ? 'Yes' : 'No' }}
                                            </label>
                                            <div class="relative">
                                                <input
                                                    type="checkbox"
                                                    id="is-dark-checkbox"
                                                    :checked="localData.isDark"
                                                    @change="localData.isDark = !localData.isDark"
                                                    class="sr-only" />
                                                <div :class="['block h-6 w-14 rounded-sm', localData.isDark ? 'bg-accent-300' : 'bg-surface-200']" />
                                                <div
                                                    :class="[
                                                        'absolute left-1 top-1 flex h-4 w-4 items-center justify-center rounded-sm transition duration-150',
                                                        localData.isDark
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
                                    @click="save()"
                                    class="bg-accent-600 text-surface-10 hover:bg-accent-700 focus:bg-accent-700 dark:hover:bg-accent-900 cursor-pointer text-sm h-10 inline-flex justify-center items-center px-4 py-2.5 rounded-sm leading-6 transition-colors focus:outline-none">
                                    Update
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
