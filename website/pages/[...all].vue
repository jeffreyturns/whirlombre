<script setup lang="ts">
useHead({ title: 'Not Found' })

const links = [
  {
    name: 'Documentation',
    href: '/docs',
    symbols: '𒿤',
    description: 'Dive deep and seamlessly integrate our versatile library with your unique application.'
  },
  {
    name: 'Palette Magic',
    href: '/generator',
    symbols: '𒿓',
    description: 'Craft stunning palettes instantly. Bring colors to life, everywhere!'
  },
  {
    name: 'Blog',
    href: '/blog',
    symbols: '𒾜',
    description: 'Stay updated! Discover the latest enhancements and innovations in our library.'
  }
]
</script>

<template>
  <div class="relative isolate">
    <main class="grid place-items-center py-16 sm:py-24">
      <div>
        <p class="text-primary-700 dark:text-primary-200 text-center font-minoan text-[60px] sm:text-[120px]">
          𒿗·𒾱·𒿑
        </p>

        <h1 class="text-center text-xl text-gray-900 sm:text-2xl dark:text-gray-100">
          404 — Lost in the Digital Void!
        </h1>
        <p class="mt-2 max-w-xl text-center text-sm text-gray-700 sm:text-base dark:text-gray-300">
          The page you're seeking isn't here. Double-check the URL.
        </p>
        <div class="mt-6 flex items-center justify-center gap-x-6">
          <div class="mx-auto mt-6 flow-root max-w-lg sm:mt-10">
            <h2 class="sr-only">
              Popular pages
            </h2>
            <ul
              role="list"
              class="-mt-6 mb-3 divide-y divide-gray-200 dark:divide-gray-800">
              <li
                v-for="(link, linkIdx) in links"
                :key="linkIdx"
                class="relative flex gap-x-6 rounded-sm px-3 py-6 transition-colors hover:bg-gray-100 dark:hover:bg-gray-800">
                <div class="bg-primary-100 dark:bg-primary-600 flex size-10 flex-none items-center justify-center rounded-sm font-minoan text-sm">
                  {{ link.symbols }}
                </div>
                <div class="flex-auto">
                  <h3 class="text-sm font-semibold leading-6 text-gray-900 dark:text-gray-100">
                    <NuxtLink :href="link.href">
                      <span
                        class="absolute inset-0"
                        aria-hidden="true" />
                      {{ link.name }}
                    </NuxtLink>
                  </h3>
                  <p class="mt-1 text-sm leading-6 text-gray-700 dark:text-gray-300">
                    {{ link.description }}
                  </p>
                </div>
                <div class="flex-none self-center text-gray-700 dark:text-gray-300">
                  <UIcon name="i-material-symbols-navigate-next" />
                </div>
              </li>
            </ul>
            <div class="mt-10 space-x-3 text-center">
              <UButton label="Go Back" @click="$router.back()" />
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>
