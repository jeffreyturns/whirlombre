<script setup lang="ts">
const hue = useHue()
const lockHue = ref(false)

const theme = useTheme()

watch(
    () => hue.value,
    () => {
        theme.value.light.accent.hue = hue.value
        theme.value.light.surface.hue = hue.value
        theme.value.dark.accent.hue = hue.value
        theme.value.dark.surface.hue = hue.value
    },
    { deep: true, immediate: true }
)

const changePreset = (_hue: number) => {
    hue.value = _hue
    theme.value.light.accent.hue = _hue
    theme.value.light.surface.hue = _hue
    theme.value.dark.accent.hue = _hue
    theme.value.dark.surface.hue = _hue
}

const themeHuesArray = [
    {
        title: 'ocean',
        hue: 210,
        hexBg: '#00e0f6',
        hexText: '#001d29'
    },
    {
        title: 'forest',
        hue: 120,
        hexBg: '#b9d37f',
        hexText: '#001000'
    },
    {
        title: 'nebula',
        hue: 270,
        hexBg: '#8acdff',
        hexText: '#000b45'
    },
    {
        title: 'glacier',
        hue: 180,
        hexBg: '#47dfc8',
        hexText: '#001c02'
    },
    {
        title: 'aurora',
        hue: 300,
        hexBg: '#cdbeff',
        hexText: '#00003d'
    },
    {
        title: 'canyon',
        hue: 20,
        hexBg: '#ffa9ae',
        hexText: '#390000'
    },
    {
        title: 'prairie',
        hue: 35,
        hexBg: '#ffad9b',
        hexText: '#380000'
    },
    {
        title: 'honey',
        hue: 70,
        hexBg: '#fcbd7a',
        hexText: '#2f0000'
    }
]

</script>

<template>
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4 space-y-4">
        <div class="space-x-1">
            <h3>Presets:</h3>
        <a
            v-for="it in themeHuesArray.sort((a, b) => a.hue - b.hue)"
            @click="changePreset(it.hue)"
            :style="{ backgroundColor: it.hexBg, color: it.hexText }"
            class="text-sm mt-4 inline-flex items-center px-4 py-2.5 rounded-sm leading-6">
           {{ it.title }}
        </a>
        </div>
        <h3>Tools:</h3>
        <a
            @click="lockHue = !lockHue"
            class="text-sm mt-4 h-10 inline-flex items-center px-4 py-2.5 rounded-sm leading-6 bg-accent-200 hover:bg-accent-300 text-accent-950 focus:bg-accent-300 focus:outline-none">
            {{ lockHue ? 'Locked Hue' : 'Unlocked Hue' }}
        </a>
        <div class="divide-y divide-surface-200 overflow-hidden rounded-sm bg-surface-200 grid grid-cols-1 sm:gap-px sm:divide-y-0" v-if="lockHue">
            <div class="group relative bg-surface-50 p-6 focus:ring-none">
                <label
                            for="default-range"
                            class="block mb-2 text-sm font-medium">
                            Global Hue {{ hue }}
                        </label>
                        <input
                            id="default-range"
                            type="range"
                            v-model="hue"
                            :max="360"
                            :min="0"
                            class="w-full base-slider" />
           </div>
        </div>
        <h3 class="text-2xl pt-6">Light Theme</h3>
        <div class="divide-y divide-surface-200 overflow-hidden rounded-sm bg-surface-200 sm:grid sm:grid-cols-2 sm:gap-px sm:divide-y-0">
            <div class="group relative bg-surface-50 p-6 focus:ring-none">
                <div class="mt-8">
                    <h3 class="text-base font-semibold leading-6 text-surface-900">
                        <a class="focus:outline-none">Accent</a>
                    </h3>
                    <p class="mt-2 text-sm text-surface-500">
                        <div v-if="!lockHue">
                            <label
                            for="default-range"
                            class="block mb-2 text-sm font-medium">
                            Hue {{ theme.light.accent.hue }}
                        </label>
                        <input
                            id="default-range"
                            type="range"
                            v-model="theme.light.accent.hue"
                            :max="360"
                            :min="0"
                            class="w-full base-slider" />
                        </div>
                        <label
                            for="default-range"
                            class="block mb-2 text-sm font-medium">
                            Chroma {{ theme.light.accent.chroma }}
                        </label>
                        <input
                            id="default-range"
                            type="range"
                            v-model="theme.light.accent.chroma"
                            :max="0.5"
                            :min="0"
                            :step="0.001"
                            class="w-full base-slider" />
                    </p>
                </div>
            </div>
            <div class="group relative bg-surface-50 p-6 focus:ring-none">
                <div class="mt-8">
                    <h3 class="text-base font-semibold leading-6 text-surface-900">
                        <a
                            href=""
                            class="focus:outline-none">
                            Surface
                        </a>
                    </h3>
                    <p class="mt-2 text-sm text-surface-500">
                        <div v-if="!lockHue">
                            <label
                            for="default-range"
                            class="block mb-2 text-sm font-medium">
                            Hue {{ theme.light.surface.hue }}
                        </label>
                        <input
                            id="default-range"
                            type="range"
                            v-model="theme.light.surface.hue"
                            :max="360"
                            :min="0"
                            class="w-full base-slider" />
                        </div>
                        <label
                            for="default-range"
                            class="block mb-2 text-sm font-medium">
                            Chroma {{ theme.light.surface.chroma }}
                        </label>
                        <input
                            id="default-range"
                            type="range"
                            v-model="theme.light.surface.chroma"
                            :max="0.5"
                            :min="0"
                            :step="0.001"
                            class="w-full base-slider" />
                    </p>
                </div>
            </div>
        </div>
        <h3 class="text-2xl pt-6">Dark Theme</h3>
        <div class="divide-y divide-surface-200 overflow-hidden rounded-sm bg-surface-200 sm:grid sm:grid-cols-2 sm:gap-px sm:divide-y-0">
            <div class="group relative bg-surface-50 p-6 focus:ring-none">
                <div class="mt-8">
                    <h3 class="text-base font-semibold leading-6 text-surface-900">
                        <a class="focus:outline-none">Accent</a>
                    </h3>
                    <p class="mt-2 text-sm text-surface-500">
                        <div v-if="!lockHue">
                            <label
                            for="default-range"
                            class="block mb-2 text-sm font-medium">
                            Hue {{ theme.dark.accent.hue }}
                        </label>
                        <input
                            id="default-range"
                            type="range"
                            v-model="theme.dark.accent.hue"
                            :max="360"
                            :min="0"
                            class="w-full base-slider" />
                        </div>
                        <label
                            for="default-range"
                            class="block mb-2 text-sm font-medium">
                            Chroma {{ theme.dark.accent.chroma }}
                        </label>
                        <input
                            id="default-range"
                            type="range"
                            v-model="theme.dark.accent.chroma"
                            :max="0.5"
                            :min="0"
                            :step="0.001"
                            class="w-full base-slider" />
                    </p>
                </div>
            </div>
            <div class="group relative bg-surface-50 p-6 focus:ring-none">
                <div class="mt-8">
                    <h3 class="text-base font-semibold leading-6 text-surface-900">
                        <a
                            href=""
                            class="focus:outline-none">
                            Surface
                        </a>
                    </h3>
                    <p class="mt-2 text-sm text-surface-500">
                        <div v-if="!lockHue">
                            <label
                            for="default-range"
                            class="block mb-2 text-sm font-medium">
                            Hue {{ theme.dark.surface.hue }}
                        </label>
                        <input
                            id="default-range"
                            type="range"
                            v-model="theme.dark.surface.hue"
                            :max="360"
                            :min="0"
                            class="w-full base-slider" />
                        </div>
                        <label
                            for="default-range"
                            class="block mb-2 text-sm font-medium">
                            Chroma {{ theme.dark.surface.chroma }}
                        </label>
                        <input
                            id="default-range"
                            type="range"
                            v-model="theme.dark.surface.chroma"
                            :max="0.5"
                            :min="0"
                            :step="0.001"
                            class="w-full base-slider" />
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>
