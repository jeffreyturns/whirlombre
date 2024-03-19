<script setup lang="ts">
import { Dialog, DialogPanel } from '@headlessui/vue'

const navigation = [
  { name: 'Documentation', href: '/docs' },
  { name: 'Palette Generator', href: '/generator' },
  { name: 'Site Color', href: '/theme' },
  { name: 'Blog', href: '/blog' }
]

const mobileMenuOpen = ref(false)
</script>

<template>
  <header class="fixed top-0 z-50 w-full">
    <UContainer as="nav" class="flex w-full items-center justify-between py-3" aria-label="Global">
      <div class="flex items-center gap-x-12">
        <a href="#" class="-m-1.5 p-1.5">
          <span class="sr-only">Whirlombre</span>
          <AppLogo />
        </a>
        <div class="hidden lg:flex lg:gap-x-8">
          <ULink v-for="item in navigation" :key="item.name" :to="item.href" class="rounded-sm px-3 py-2 text-sm leading-6 text-gray-900 transition-colors hover:bg-gray-900/25 dark:text-gray-200 dark:hover:bg-gray-200/25">
            {{ item.name }}
          </ULink>
        </div>
      </div>
      <div class="flex lg:hidden">
        <button type="button" class="-m-2.5 inline-flex items-center justify-center rounded-sm p-2.5 text-gray-700" @click="mobileMenuOpen = true">
          <span class="sr-only">Open main menu</span>
          <Bars3Icon class="size-6" aria-hidden="true" />
        </button>
      </div>
      <div class="hidden space-x-3 lg:flex">
        <AppCommandPalette />

        <UButton>
          GitHub
          <UIcon name="i-material-symbols-north-east" class="size-4" />
        </UButton>
      </div>
    </UContainer>

    <Dialog as="div" class="lg:hidden" :open="mobileMenuOpen" @close="mobileMenuOpen = false">
      <div class="fixed inset-0 z-10" />
      <DialogPanel class="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white p-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
        <div class="flex items-center justify-between">
          <a href="#" class="-m-1.5 p-1.5">
            <span class="sr-only">Whirlombre</span>
            <AppLogo />
          </a>
          <button type="button" class="-m-2.5 rounded-sm p-2.5 text-gray-700" @click="mobileMenuOpen = false">
            <span class="sr-only">Close menu</span>
            <XMarkIcon class="size-6" aria-hidden="true" />
          </button>
        </div>
        <div class="mt-6 flow-root">
          <div class="-my-6 divide-y divide-gray-500/10">
            <div class="space-y-2 py-6">
              <a v-for="item in navigation" :key="item.name" :href="item.href" class="-mx-3 block rounded-sm px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">{{ item.name }}</a>
            </div>
            <div class="py-6">
              <a href="#" class="-mx-3 block rounded-sm px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Log in</a>
            </div>
          </div>
        </div>
      </DialogPanel>
    </Dialog>
    <AppLoadingIndicator />
  </header>
</template>
