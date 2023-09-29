<script setup lang="ts">
const open = ref(false)
const isScrolled = ref(false)

const navigation = [
    { name: 'Docs', href: '/docs/get-started/introduction' },
    { name: 'Pallete Generator', href: '/generator' },
    { name: 'Site Color', href: '/theme' }
]

onMounted(() => {
    if (process.client) {
        window.addEventListener('scroll', () => (isScrolled.value = window.scrollY > 1))
    }
})
</script>

<template>
    <header
        :class="isScrolled && 'bg-surface-10/75'"
        class="fixed z-10 w-full transition-colors backdrop-blur-md">
        <nav
            class="mx-auto flex max-w-7xl items-center justify-between px-6 py-3 lg:px-8"
            aria-label="Global">
            <div class="flex mr-12">
                <NuxtLink
                    to="/"
                    class="-m-1.5 p-1.5 inline-flex items-center">
                    <span class="sr-only">Whirlombre</span>
                    <NavLogo class="text-accent-700" />
                    <h1 class="text-surface-950 text-xl ml-1.5 font-headline">Whirlombre</h1>
                </NuxtLink>
            </div>
            <div class="flex lg:hidden">
                <button
                    type="button"
                    class="-m-2.5 inline-flex items-center justify-center rounded-sm p-2 text-surface-950 hover:bg-surface-950/12"
                    @click="open = true">
                    <span class="sr-only">Open main menu</span>
                    <BaseIcon icon="menu" :size="24" />
                </button>
            </div>
            <div class="hidden lg:flex lg:gap-x-4">
                <NuxtLink
                    v-for="item in navigation"
                    :key="item.name"
                    :to="item.href"
                    :class="item.href == $route.path ? 'bg-surface-900/12 text-surface-950' : 'text-surface-700 hover:bg-surface-900/12'"
                    class="text-sm leading-6 px-3 py-2 rounded-sm">
                    {{ item.name }}
                </NuxtLink>
            </div>
            <div class="hidden lg:flex lg:flex-1 lg:justify-end lg:space-x-3 items-center">
                <NuxtLink
                    href="https://github.com/jeffreyturns/whirlombre"
                    target="_blank"
                    rel="noopener"
                    class="text-sm h-10 inline-flex items-center px-4 py-2.5 rounded-sm leading-6 transition-colors bg-accent-600 text-surface-10 hover:bg-accent-700 focus:bg-accent-700 dark:hover:bg-accent-900 focus:outline-none">
                    Github
                    <BaseIcon class="ml-1" icon="arrowTr" :size="18" />
                </NuxtLink>
            </div>
        </nav>
        <ClientOnly>
            <HeadlessDialog
                as="div"
                class="lg:hidden"
                @close="open = false"
                :open="open">
                <div class="fixed inset-0 z-10" />
                <HeadlessDialogPanel class="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-surface-100 px-6 py-3 sm:max-w-sm sm:rounded-l-sm">
                    <div class="flex items-center justify-between">
                        <NuxtLink
                            to="/"
                            class="-m-1.5 p-1.5">
                            <span class="sr-only">Whirlombre</span>
                            <NavLogo class="text-accent-700" />
                        </NuxtLink>
                        <button
                            type="button"
                            class="-m-2.5 inline-flex items-center justify-center rounded-sm p-2 text-surface-950 hover:bg-surface-950/12"
                            @click="open = false">
                            <span class="sr-only">Close menu</span>
                            <BaseIcon icon="cancel" :size="24" />
                        </button>
                    </div>
                    <div class="mt-6 flow-root">
                        <div class="-my-6 divide-y divide-surface-950/12">
                            <div class="space-y-2 py-6">
                                <NuxtLink
                                    v-for="item in navigation"
                                    :key="item.name"
                                    :to="item.href"
                                    class="-mx-3 block rounded-sm px-3 py-2 text-base leading-7 text-surface-950 hover:bg-surface-950/12">
                                    {{ item.name }}
                                </NuxtLink>
                            </div>
                            <!-- <div class="py-6" /> -->
                        </div>
                    </div>
                </HeadlessDialogPanel>
            </HeadlessDialog>
        </ClientOnly>
    </header>
</template>
