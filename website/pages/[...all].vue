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
    },
    { name: 'Blog', href: '#', symbols: '𒾬', description: 'Read our latest news and articles.' }
]
</script>

<template>
    <div class="relative isolate">
        <main class="grid place-items-center py-16 sm:py-24">
            <div>
                <p class="font-minoan text-[60px] text-center sm:text-[120px] text-accent-600">𒿗·𒾱·𒿑</p>

                <h1 class="text-xl text-surface-900 text-center sm:text-2xl">404 — Lost in the Digital Void!</h1>
                <p class="mt-2 text-sm sm:text-base text-center max-w-xl text-surface-600">The page you're seeking isn't here. Double-check the URL.</p>
                <div class="mt-6 flex items-center justify-center gap-x-6">
                    <div class="mx-auto mt-6 flow-root max-w-lg sm:mt-10">
                        <h2 class="sr-only">Popular pages</h2>
                        <ul
                            role="list"
                            class="-mt-6 divide-y divide-surface-950/12 mb-3">
                            <li
                                v-for="(link, linkIdx) in links"
                                :key="linkIdx"
                                class="relative flex gap-x-6 py-6 px-3 hover:bg-surface-50 rounded-sm">
                                <div class="flex h-10 w-10 flex-none items-center justify-center rounded-sm text-sm font-minoan bg-accent-50">
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
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                d="m9 6 6 6-6 6"></path>
                                        </svg>
                                    </span>
                                </div>
                            </li>
                        </ul>
                        <div class="text-center">
                            <NuxtLink to="/">
                                <button
                                    class="text-sm h-10 inline-flex items-center px-4 py-2.5 rounded-sm leading-6 bg-accent-600 text-surface-10 hover:bg-accent-700 focus:bg-accent-700 dark:hover:bg-accent-900 focus:outline-none">
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
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                d="M6 19 19 6m0 0v12.48M19 6H6.52"></path>
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
