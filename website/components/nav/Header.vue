<script setup lang="ts">

const open = ref(false)
const scrolled = ref(false)

const navigation = [
  { name: 'Documentation', href: '/docs' },
  { name: 'Palette Generator', href: '/generator' },
  { name: 'Site Color', href: '/theme' },
  { name: 'Blog', href: '/blog' }
]

onMounted(() => {
  if (process.client) {
    window.addEventListener('scroll', () => (scrolled.value = window.scrollY > 1))
  }
})

const close = () => (open.value = false)
</script>

<template>
  <header
    :class="scrolled && 'bg-surface-50'"
    class="fixed z-10 w-full transition-colors">
    <nav
      class="mx-auto max-w-7xl flex items-center justify-between px-3 py-3 lg:px-8"
      aria-label="Global">
      <div class="mr-12 flex">
        <NuxtLink
          to="/"
          class="inline-flex items-center p-1.5 -m-1.5">
          <NavLogo class="text-accent-700" />
          <h1 class="ml-1.5 text-xl font-headline text-surface-950">
            Whirlombre
          </h1>
        </NuxtLink>
      </div>
      <div class="flex lg:hidden">
        <BaseButton icon="menu" @click="open = true" />
      </div>
      <div class="hidden lg:flex lg:gap-x-4">
        <NuxtLink
          v-for="item in navigation"
          :key="item.name"
          :to="item.href"
          :class="$route.path.startsWith(item.href) ? 'bg-surface-950/12 text-surface-950' : 'text-surface-700 hover:bg-surface-900/12'"
          class="rounded-wl-small px-3 py-2 text-sm leading-6 transition-wl-colors">
          {{ item.name }}
        </NuxtLink>
      </div>
      <div class="hidden items-center lg:flex lg:flex-1 lg:justify-end lg:space-x-3">
        <NavSearch :class="scrolled ? 'bg-surface-10': 'bg-surface-100'" />
        <BaseButton
          target="_blank"
          rel="noopener"
          href="https://github.com/jeffreyturns/whirlombre"
          variant="filled"
          text="Github"
          icon-right="north_east" />
      </div>
    </nav>
    <ClientOnly>
      <HeadlessTransitionRoot
        :show="open"
        appear
        as="template">
        <HeadlessDialog
          as="div"
          class="lg:hidden"
          :open="open"
          @close="close()">
          <HeadlessTransitionChild
            as="template"
            enter="timing-out-glide-medium"
            enter-from="opacity-0"
            enter-to="opacity-100"
            leave="timing-out-glide-short"
            leave-from="opacity-100"
            leave-to="opacity-0">
            <div class="fixed inset-0 z-10 bg-surface-500 bg-opacity-75 transition-opacity" />
          </HeadlessTransitionChild>

          <HeadlessTransitionChild
            as="template"
            enter="timing-out-glide-medium"
            enter-from="opacity-0 translate-x-12"
            enter-to="opacity-100"
            leave="timing-out-glide-short"
            leave-from="opacity-100"
            leave-to="opacity-0 -translate-x-12">
            <HeadlessDialogPanel
              class="sm:shape-wl-l-base fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-surface-100 px-6 py-3 sm:max-w-sm">
              <div class="flex items-center justify-between">
                <NuxtLink
                  to="/"
                  class="p-1.5 -m-1.5"
                  @click="close()">
                  <span class="sr-only">Whirlombre</span>
                  <NavLogo class="text-accent-700" />
                </NuxtLink>
                <BaseButton icon="close" @click="close()" />
              </div>
              <NavSearch class="my-4 w-full bg-surface-10" @click="close()" />
              <div class="mt-6 flow-root">
                <div class="-my-6 divide-y divide-surface-950/12">
                  <div class="py-6 space-y-2">
                    <NuxtLink
                      v-for="item in navigation"
                      :key="item.name"
                      :to="item.href"
                      class="block rounded-wl-small px-3 py-2 text-base leading-7 text-surface-950 -mx-3 hover:bg-surface-950/12"
                      @click="close()">
                      {{ item.name }}
                    </NuxtLink>
                  </div>
                </div>
              </div>
            </HeadlessDialogPanel>
          </HeadlessTransitionChild>
        </HeadlessDialog>
      </HeadlessTransitionRoot>
    </ClientOnly>
  </header>
</template>
