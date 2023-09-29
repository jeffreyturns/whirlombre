<script setup lang="ts">
useHead({
    title: 'Not Found'
})

const links = [
    {
        name: 'Documentation',
        href: '#',
        symbols: '𒿤',
        description: 'Learn how to integrate our tools with your app.'
    },
    {
        name: 'API Reference',
        href: '#',
        symbols: '𒿓',
        description: 'A complete API reference for our libraries.'
    },
    {
        name: 'Guides',
        href: '#',
        symbols: '𒾜',
        description: 'Installation guides that cover popular setups.'
    }
]
</script>

<template>
    <div class="relative isolate">
        <main class="grid place-items-center py-16 sm:py-24">
            <div>
                <p class="text-center text-[60px] font-minoan text-accent-600 sm:text-[120px]">𒿗·𒾱·𒿑</p>

                <h1 class="text-center text-xl text-surface-900 sm:text-2xl">404 — Lost in the Digital Void!</h1>
                <p class="mt-2 max-w-xl text-center text-sm text-surface-600 sm:text-base">The page you're seeking isn't here. Double-check the URL.</p>
                <div class="mt-6 flex items-center justify-center gap-x-6">
                    <div class="mx-auto mt-6 flow-root max-w-lg sm:mt-10">
                        <h2 class="sr-only">Popular pages</h2>
                        <ul
                            role="list"
                            class="mb-3 -mt-6 divide-y divide-surface-950/12">
                            <li
                                v-for="(link, linkIdx) in links"
                                :key="linkIdx"
                                class="relative flex gap-x-6 rounded-sm px-3 py-6 hover:bg-surface-50">
                                <div class="h-10 w-10 flex flex-none items-center justify-center rounded-sm bg-accent-50 text-sm font-minoan">
                                    {{ link.symbols }}
                                </div>
                                <div class="flex-auto">
                                    <h3 class="text-sm font-semibold leading-6 text-surface-900">
                                        <a :href="link.href">
                                            <span
                                                class="absolute inset-0"
                                                aria-hidden="true" />
                                            {{ link.name }}
                                        </a>
                                    </h3>
                                    <p class="mt-2 text-sm leading-6 text-surface-600">{{ link.description }}</p>
                                </div>
                                <div class="flex-none self-center">
                                    <span aria-hidden="true">
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
                                                d="m9 6 6 6-6 6" />
                                        </svg>
                                    </span>
                                </div>
                            </li>
                        </ul>
                        <div class="text-center">
                            <NuxtLink to="/">
                                <button
                                    class="h-10 inline-flex items-center rounded-sm bg-accent-600 px-4 py-2.5 text-sm leading-6 text-surface-10 focus:bg-accent-700 hover:bg-accent-700 focus:outline-none dark:hover:bg-accent-900">
                                    Go back home
                                    <span
                                        class="ml-1"
                                        aria-hidden="true">
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
                                                d="M6 19 19 6m0 0v12.48M19 6H6.52" />
                                        </svg>
                                    </span>
                                </button>
                            </NuxtLink>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    </div>
</template>
