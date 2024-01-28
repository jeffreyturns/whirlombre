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
  <div class="mx-auto max-w-7xl px-4 py-4 space-y-4 lg:px-8 sm:px-6">
    <div class="space-x-1">
      <h3>Presets:</h3>
      <a
        v-for="it in themeHuesArray.sort((a, b) => a.hue - b.hue)"
        :key="it.title"
        :style="{ backgroundColor: it.hexBg, color: it.hexText }"
        class="mt-4 inline-flex items-center rounded-wl-small px-4 py-2.5 text-sm leading-6"
        @click="changePreset(it.hue)">
        {{ it.title }}
      </a>
      <a @click="changePreset(Math.floor(Math.random() * 360))" class="bg-surface-200 mt-4 inline-flex items-center rounded-wl-small px-4 py-2.5 text-sm leading-6">
        Random
        <BaseIcon class="ml-1" :size="18" icon="shuffle" />
      </a>
    </div>
    <h3>Tools:</h3>
    <a
      class="mt-4 h-10 inline-flex items-center rounded-wl-small bg-accent-200 px-4 py-2.5 text-sm leading-6 text-accent-950 focus:bg-accent-300 hover:bg-accent-300 focus:outline-none"
      @click="lockHue = !lockHue">
      {{ lockHue ? 'Locked Hue' : 'Unlocked Hue' }}
    </a>
    <div
      v-if="lockHue"
      class="grid grid-cols-1 overflow-hidden rounded-wl-small bg-surface-200 sm:gap-px divide-y divide-surface-200 sm:divide-y-0">
      <div class="group relative bg-surface-50 p-6 focus:ring-none">
        <label for="default-range" class="mb-2 block text-sm font-medium">
          Global Hue {{ hue }}
        </label>
        <input
          id="default-range"
          v-model="hue"
          type="range"
          :max="360"
          :min="0"
          class="w-full slider-wl-tonal">
      </div>
    </div>
    <h3 class="pt-6 text-2xl">
      Light Theme
    </h3>
    <div
      class="overflow-hidden rounded-wl-small bg-surface-200 sm:grid sm:grid-cols-2 sm:gap-px divide-y divide-surface-200 sm:divide-y-0">
      <div class="group relative bg-surface-50 p-6 focus:ring-none">
        <div class="mt-8">
          <h3 class="text-base font-semibold leading-6 text-surface-900">
            <a class="focus:outline-none">Accent</a>
          </h3>
          <p class="mt-2 text-sm text-surface-500" />
          <div v-if="!lockHue">
            <label for="default-range" class="mb-2 block text-sm font-medium">
              Hue {{ theme.light.accent.hue }}
            </label>
            <input
              id="default-range"
              v-model="theme.light.accent.hue"
              type="range"
              :max="360"
              :min="0"
              class="w-full slider-wl-tonal">
          </div>
          <label for="default-range" class="mb-2 block text-sm font-medium">
            Chroma {{ theme.light.accent.chroma }}
          </label>
          <input
            id="default-range"
            v-model="theme.light.accent.chroma"
            type="range"
            :max="0.5"
            :min="0"
            :step="0.001"
            class="w-full slider-wl-tonal">
        </div>
      </div>
      <div class="group relative bg-surface-50 p-6 focus:ring-none">
        <div class="mt-8">
          <h3 class="text-base font-semibold leading-6 text-surface-900">
            <a href="" class="focus:outline-none">
              Surface
            </a>
          </h3>
          <p class="mt-2 text-sm text-surface-500" />
          <div v-if="!lockHue">
            <label for="default-range" class="mb-2 block text-sm font-medium">
              Hue {{ theme.light.surface.hue }}
            </label>
            <input
              id="default-range"
              v-model="theme.light.surface.hue"
              type="range"
              :max="360"
              :min="0"
              class="w-full slider-wl-tonal">
          </div>
          <label for="default-range" class="mb-2 block text-sm font-medium">
            Chroma {{ theme.light.surface.chroma }}
          </label>
          <input
            id="default-range"
            v-model="theme.light.surface.chroma"
            type="range"
            :max="0.5"
            :min="0"
            :step="0.001"
            class="w-full slider-wl-tonal">
        </div>
      </div>
    </div>
    <h3 class="pt-6 text-2xl">
      Dark Theme
    </h3>
    <div
      class="overflow-hidden rounded-wl-small bg-surface-200 sm:grid sm:grid-cols-2 sm:gap-px divide-y divide-surface-200 sm:divide-y-0">
      <div class="group relative bg-surface-50 p-6 focus:ring-none">
        <div class="mt-8">
          <h3 class="text-base font-semibold leading-6 text-surface-900">
            <a class="focus:outline-none">Accent</a>
          </h3>
          <p class="mt-2 text-sm text-surface-500" />
          <div v-if="!lockHue">
            <label for="default-range" class="mb-2 block text-sm font-medium">
              Hue {{ theme.dark.accent.hue }}
            </label>
            <input
              id="default-range"
              v-model="theme.dark.accent.hue"
              type="range"
              :max="360"
              :min="0"
              class="w-full slider-wl-tonal">
          </div>
          <label for="default-range" class="mb-2 block text-sm font-medium">
            Chroma {{ theme.dark.accent.chroma }}
          </label>
          <input
            id="default-range"
            v-model="theme.dark.accent.chroma"
            type="range"
            :max="0.5"
            :min="0"
            :step="0.001"
            class="w-full slider-wl-tonal">
        </div>
      </div>
      <div class="group relative bg-surface-50 p-6 focus:ring-none">
        <div class="mt-8">
          <h3 class="text-base font-semibold leading-6 text-surface-900">
            <a href="" class="focus:outline-none">
              Surface
            </a>
          </h3>
          <p class="mt-2 text-sm text-surface-500" />
          <div v-if="!lockHue">
            <label for="default-range" class="mb-2 block text-sm font-medium">
              Hue {{ theme.dark.surface.hue }}
            </label>
            <input
              id="default-range"
              v-model="theme.dark.surface.hue"
              type="range"
              :max="360"
              :min="0"
              class="w-full slider-wl-tonal">
          </div>
          <label for="default-range" class="mb-2 block text-sm font-medium">
            Chroma {{ theme.dark.surface.chroma }}
          </label>
          <input
            id="default-range"
            v-model="theme.dark.surface.chroma"
            type="range"
            :max="0.5"
            :min="0"
            :step="0.001"
            class="w-full slider-wl-tonal">
        </div>
      </div>
    </div>
  </div>
</template>
