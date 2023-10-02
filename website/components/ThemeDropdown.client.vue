<script lang="ts" setup>
const colorMode = useColorMode()

const themes = [
    {
        name: 'Auto',
        value: 'system',
        click: () => {
            colorMode.preference = 'system'
        }
    },
    {
        name: 'Light',
        value: 'light',
        click: () => {
            colorMode.preference = 'light'
        }
    },
    {
        name: 'Dark',
        value: 'dark',
        click: () => {
            colorMode.preference = 'dark'
        }
    }
]

const selected = ref(themes.find(it => it.value == colorMode.preference))
</script>

<template>
    <HeadlessListbox
        as="div"
        v-model="selected"
        v-slot="{ open }">
        <div class="relative mt-2">
            <HeadlessListboxButton
                class="relative w-48 cursor-default rounded-sm bg-surface-50 py-2 pl-3 pr-10 text-left text-surface-900 focus:outline-none focus:ring-none sm:text-sm sm:leading-6">
                <span class="block truncate text-sm">{{ selected?.name }}</span>
                <span class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                    <BaseIcon
                        class="shrink-0"
                        :icon="open ? 'navArrowUp' : 'navArrowDown'"
                        :size="18" />
                </span>
            </HeadlessListboxButton>

            <HeadlessListboxOptions
                class="absolute z-10 mt-1 max-h-60 w-48 overflow-auto rounded-sm bg-surface-100 py-2 shadow-lg outline-none sm:text-sm">
                <HeadlessListboxOption
                    as="template"
                    v-for="it in themes"
                    :value="it"
                    @click="it.click?.()"
                    v-slot="{ active, selected }">
                    <li
                        :class="[
                            active ? 'bg-accent-300 text-accent-950' : 'text-surface-950',
                            'relative cursor-default select-none px-2.5 py-2 transition-colors rounded-sm flex'
                        ]">
                        <span :class="[selected ? 'font-semibold' : 'font-normal', 'w-full truncate text-sm']">{{ it.name }}</span>
                        <span
                            v-if="selected"
                            class="flex-none">
                            <svg
                                width="18px"
                                height="18px"
                                fill="none"
                                stroke-width="1.5"
                                viewBox="0 0 24 24">
                                <path
                                    stroke="currentColor"
                                    stroke-width="1.5"
                                    stroke-linecap="square"
                                    stroke-linejoin="square"
                                    d="m5 13 4 4L19 7" />
                            </svg>
                        </span>
                    </li>
                </HeadlessListboxOption>
            </HeadlessListboxOptions>
        </div>
    </HeadlessListbox>
</template>
