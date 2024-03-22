<script setup lang="ts">
import { Dialog, DialogPanel } from '@headlessui/vue'

const { metaSymbol } = useShortcuts()
const commandPalette = useCommandPallette()

const navigation = [
  { name: 'Documentation', href: '/docs' },
  { name: 'Palette Generator', href: '/generator' },
  { name: 'Site Color', href: '/theme' },
  { name: 'Blog', href: '/blog' }
]

const mobileMenuOpen = ref(false)
const scrolled = ref(false)

onMounted(() => {
  if (window && process.client) {
    window.addEventListener('scroll', () => {
      scrolled.value = window.scrollY > 1
    })
  }
})
</script>

<template>
  <header class="fixed top-0 z-50 w-full transition-colors" :class="scrolled ? 'bg-gray-200 dark:bg-gray-700' : 'bg-transparent'">
    <UContainer as="nav" class="flex w-full items-center justify-between py-4" aria-label="Global">
      <div class="flex items-center gap-x-12">
        <a href="#" class="-m-1.5 p-1.5">
          <span class="sr-only">Whirlombre</span>
          <AppLogo />
        </a>
        <div class="hidden lg:flex lg:gap-x-8">
          <UButton v-for="item in navigation" :key="item.name" variant="nav" :to="item.href">
            {{ item.name }}
          </UButton>
        </div>
      </div>
      <div class="flex lg:hidden">
        <UButton size="lg" variant="nav" class="p-2" square @click="mobileMenuOpen = true">
          <UIcon name="i-material-symbols-menu" class="size-6" />
        </UButton>
      </div>
      <div class="hidden space-x-3 lg:flex">
        <div class="relative">
          <UInput
            class="hidden w-64 xl:flex"
            icon="i-material-symbols-search"
            :color="scrolled ? 'white' : 'gray'"
            placeholder="Search...">
            <template #trailing>
              <div class="flex items-center gap-0.5">
                <UKbd>{{ metaSymbol }}</UKbd>
                <UKbd>K</UKbd>
              </div>
            </template>
          </UInput>

          <UButton size="lg" class="p-2 xl:hidden" variant="nav" square>
            <UIcon name="i-material-symbols-search" class="size-6" />
          </UButton>

          <span class="absolute inset-0 cursor-pointer" @click="commandPalette = true" />
        </div>

        <UButton>
          GitHub
          <UIcon name="i-material-symbols-north-east" class="size-4" />
        </UButton>
      </div>
    </UContainer>

    <Dialog as="div" class="lg:hidden" :open="mobileMenuOpen" @close="mobileMenuOpen = false">
      <div class="fixed inset-0 z-10 bg-gray-200/75 dark:bg-gray-800/75" />
      <DialogPanel class="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-gray-200 p-4 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 dark:bg-gray-700">
        <div class="flex items-center justify-between">
          <a href="#" class="-m-1.5 p-1.5">
            <span class="sr-only">Whirlombre</span>
            <AppLogo />
          </a>
          <UButton size="lg" variant="nav" class="p-2" square @click="mobileMenuOpen = false">
            <UIcon name="i-material-symbols-close" class="size-6" />
          </UButton>
        </div>
        <div class="mt-6 flow-root">
          <div class="-my-6 divide-y divide-gray-500/10">
            <div class="space-y-2 py-6">
              <div class="relative">
                <UInput
                  icon="i-material-symbols-search"
                  size="lg"
                  placeholder="Search...">
                  <template #trailing>
                    <div class="flex items-center gap-0.5">
                      <UKbd>{{ metaSymbol }}</UKbd>
                      <UKbd>K</UKbd>
                    </div>
                  </template>
                </UInput>

                <span class="absolute inset-0 cursor-pointer" @click="commandPalette = true" />
              </div>

              <UButton
                v-for="item in navigation"
                :key="item.name"
                :to="item.href"
                size="xl"
                block
                class="justify-normal"
                variant="nav">
                {{ item.name }}
              </UButton>
            </div>
          </div>
        </div>
      </DialogPanel>
    </Dialog>

    <AppLoadingIndicator />
  </header>
</template>
